const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

//Login Post Request - w/o OAuth
router.post('/login', userController.loginUser, (req, res) => {
return res
    .set('Content-Type', 'application/json')
    .status(200).json({user_id : res.locals.user_id, name : res.locals.name})
});

//Signup Post Request - w/o OAuth
router.post('/signup', userController.signupUser, (req, res) => {
  // return res
  //     .set('Content-Type', 'application/json')
      //.status(200).json({user_id : res.locals.user_id, name : res.locals.name})
      // console.log(res.location())
      return res.redirect('http://localhost:8080/dashboard');
  });

//Signup Post Request - w/o OAuth
router.post('/logout', (req, res) => {
  return res
      .set('Content-Type', 'application/json')
      .status(200).send('hello - logout')
  });

module.exports = router;