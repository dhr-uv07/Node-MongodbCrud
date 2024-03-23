const bcrypt = require('bcrypt');
const db = require('../models/index');
const User = db.User;


const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const data = {
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(password, 10),
    }
    const user = await User.create(data);
    if (user) {
      res.status(200).send('User created successfully');
    } else {
      res.status(404).send('Not Inserted');
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
      }
    });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {

      } else {
        res.status(404).send('Invalid Email or Password');
      }
    } else {
      res.status(404).send('Invalid Email or Password');
    }

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUser,
  loginUser
}