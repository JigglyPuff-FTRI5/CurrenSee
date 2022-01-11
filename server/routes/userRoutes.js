const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

// //GET request to /compliments?tag=1&user=1
// router.get('/', complimentController.getCompliments, (req, res) => {
//   return res
//     .set('Content-Type', 'application/json')
//     .status(200)
//     .json({ complimentsList: res.locals.complimentsList });
// });


module.exports = router;