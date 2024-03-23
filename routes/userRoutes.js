const express = require('express');
const { checkSchema, validationResult } = require('express-validator');
const db = require('../models/index');
const User = db.User;
const userController = require('../controllers/userController');
const verifyUser = require('../middleware/verifyUser');

const routes = express.Router();

const userRegistrationSchema = {
  firstName: {
    trim: true,
    notEmpty: true,
    errorMessage: 'FirstName is required',
  },
  lastName: {
    trim: true,
    notEmpty: true,
    errorMessage: 'LastName is required',
  },
  email: {
    isEmail: true,
    normalizeEmail: true,
    errorMessage: 'Email is invalid',
    // custom: {
    //   options: async (email) => {
    //     const user = await User.findOne({
    //       where: {
    //         email: email,
    //       }
    //     })
    //     if (user) {
    //       throw new Error('E-mail already in use');
    //     }
    //   }
  // }
  },
  password: {
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password should be at least 6 characters',
    },
    matches: {
      options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      errorMessage: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)',
    },
    notEmpty: true,
  },
};

routes.post('/', checkSchema(userRegistrationSchema),
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(400).json({ error: error.array() });
    }
    next();
  },
  verifyUser.verifyUser,
  userController.registerUser);

module.exports = routes;


/*
const { checkSchema } = require('express-validator');
const User = require('./path/to/your/user/model'); // Adjust the path to where your Sequelize User model is located

const registrationSchema = {
  email: {
    normalizeEmail: true,
    custom: {
      options: async (email) => {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
          return Promise.reject('E-mail already in use');
        }
      }
    }
  },
  // Include other fields and validation rules here
};


*/