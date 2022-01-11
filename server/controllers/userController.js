const db = require('../models/dataModel.js');
const bcrypt = require('bcrypt');
const userController = {};

userController.loginUser = async (req, res, next) => {

  //destructure email/password from req body
  const { email, password } = req.body;
  //bcrypt hash email and password
  const hashEmail = bcrypt.hashSync(email, 10)
  const hashPassword = bcrypt.hashSync(password, 10)
next();
}

module.exports = userController;