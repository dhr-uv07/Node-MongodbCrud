const db = require('../models/index');
const User = db.User;

const verifyUser = async (req, res, next) => {
  try {
    const email = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (email) {
      res.send('Email Already Exists, Try Using Another Email');
    }
  } catch (error) {
    console.log(error);;
  }
  next();
};



module.exports = {
  verifyUser,
}