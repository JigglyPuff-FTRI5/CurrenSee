const db = require('../models/dataModel.js');
const financialController = {};

financialController.getFinancials = async (req, res, next) => {
  const { user_id, created_date } = req.body;
  const queryString = `
  SELECT * FROM financials 
  WHERE user_id = ${user_id} 
  AND created_date = ${created_date}`;



};

module.exports = financialController;