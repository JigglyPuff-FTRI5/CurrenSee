const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

//Login Post Request - w/o OAuth
router.post('/login', userController.loginUser, (req, res) => {
return res
    .set('Content-Type', 'application/json')
    .status(200).send('hello - login')
});

//Signup Post Request - w/o OAuth
router.post('/signup', (req, res) => {
  return res
      .set('Content-Type', 'application/json')
      .status(200).send('hello - signup')
  });

//Signup Post Request - w/o OAuth
router.post('/logout', (req, res) => {
  return res
      .set('Content-Type', 'application/json')
      .status(200).send('hello - logout')
  });

module.exports = router;