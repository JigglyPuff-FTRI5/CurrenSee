const db = require('../models/dataModel.js');
const bcrypt = require('bcrypt');
const userController = {};

userController.loginUser = async (req, res, next) => {

  //destructure email/password from req body
  const { email, password } = req.body;

//check if email or password are missing
  if (!email || !password) {
    res.locals.isLoggedIn = false;
    res.locals.errorMessage = 'Invalid email or password. Please try again.'
    return res.status(400).json({email : '', name : '', isLoggedIn : res.locals.isLoggedIn, errorMessage: res.locals.errorMessage})
  }
  
  //Query members table for matching email 
  const queryString = `
  SELECT * FROM members 
  WHERE email = '${email}'`;
  const foundUser = await db.query(queryString);
  console.log(foundUser)
  //If the user does not exist - return an error
  if (!foundUser.rows.length) {
    res.locals.isLoggedIn = false;
    res.locals.errorMessage = 'Your username or password was entered incorrectly.';
    return res.status(400).json({email : '', name : '', isLoggedIn : res.locals.isLoggedIn, errorMessage: res.locals.errorMessage})
  }

  //find the hashed password for the found user (store the name) and compareSync the input password with the hash password
  const hashPassword = foundUser.rows[0].password;
  const userName = foundUser.rows[0].name;

  const compare = bcrypt.compareSync(password, hashPassword);
  //If the password does not match return error
  if (!compare) {
  res.locals.isLoggedIn = false;
  res.locals.errorMessage = 'Your username or password was entered incorrectly. Please try again.';
  return res.status(400).json({email : '', name : '', isLoggedIn : res.locals.isLoggedIn, errorMessage: res.locals.errorMessage})
  }

  //if the password matches, store email as user_id and userName and send both in the response
  res.locals.isLoggedIn = true;
  res.locals.email = email;
  res.locals.name = userName;

next();
}

userController.signupUser = async (req, res, next) => {

//destructure name, email, and password from req body
const {name, email, password} = req.body;

if (!name || !email || !password) {
  res.locals.isLoggedIn = false;
  res.locals.errorMessage = 'One of the fields are invalid. Please try again.'
  return res.status(400).json({email : '', name : '', isLoggedIn : res.locals.isLoggedIn, errorMessage: res.locals.errorMessage})
}

//hash password
const hashPassword = bcrypt.hashSync(password, 10);

//check database to see if user already exists
const queryString = `
  SELECT * FROM members 
  WHERE email = '${email}'`;
  const foundUser = await db.query(queryString);

  //return error if a user already exists
  if (foundUser.rows.length) {
    res.locals.isLoggedIn = false;
    res.locals.errorMessage = 'A user account already exists with this email address. Please try again.'
    return res.status(400).json({email : '', name : '', isLoggedIn : res.locals.isLoggedIn, errorMessage: res.locals.errorMessage})
  }

  //if user does not exist, insert user into db, store email as user_id and send in the response 
  const query1String = `
  INSERT INTO members (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING email, name`;

  // Values array
  const values = [name, email, hashPassword];

  //submit userQuery
  const userCreated = await db.query(query1String, values);
  
  //store create user's email and name for response
  res.locals.isLoggedIn = true;
  res.locals.email = userCreated.rows[0].email;
  res.locals.name = userCreated.rows[0].name;

  next();
}

module.exports = userController;