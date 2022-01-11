const express = require('express');
const financialController = require('../controllers/financialController.js');

const router = express.Router();

//GET request to /financial
router.get('/', financialController.getFinancials, (req, res) => {
  res.set('Content-Type', 'application/json').status(200).json({ financialsList: res.locals.financialsList });
});

//POST request to /financial
router.post('/', financialController.postFinancials, (req, res) => {
  res.status(200).send('Data successfully saved!')
});


module.exports = router;