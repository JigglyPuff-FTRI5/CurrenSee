const { response } = require('express');
const db = require('../models/dataModel.js');
const financialController = {};

financialController.getFinancials = async (req, res, next) => {
  const { email } = req.body;
  const queryString = `
  SELECT * FROM financials 
  WHERE email = ${email}`;
  try{
  const availableData = await db.query(queryString);
  if(!availableData.rows[0]){
  res.locals.financialsList = [email, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return next();
  }
  if(availableData.rows[0]){
    res.locals.financialsList = availableData.rows;
    return next();
  }
}
  catch(err){
    return next({
      status: 500,
      message: `financialController.getFinancials error: ${err}`,
    });
  }
};

financialController.postFinancials = async (req, res, next) => {
  const { email, housing_living, health_medical, auto_transport, education, loans_credit_cards, savings, investment, charity, misc } = req.body;
  const initialQuery = `
  SELECT * FROM financials 
  WHERE email = ${email}`;
  try{
    const availableData = await db.query(initialQuery);
    if(!availableData.rows[0]){
    try{
    const secondaryQuery = `
    INSERT INTO financials (email, housing_living, health_medical, auto_transport, education, loans_credit_cards, savings, investment, charity, misc)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *`;
    const values = [email, housing_living, health_medical, auto_transport, education, loans_credit_cards, savings, investment, charity, misc];
    const insertedFinancials = await db.query(secondaryQuery, values);
    return next();
    }
    catch(err){
      return next({
        status: 500,
        message: `financialController.postFinancials error: ${err}`,
      })
    }
  }
    if(availableData.rows[0]){
      try{
      let deletionQuery = `
      DELETE FROM financials
      WHERE email=${email}`;
      const deletedFinancials = await db.query(deletionQuery);
      const tertiaryQuery = `
      INSERT INTO financials (email, housing_living, health_medical, auto_transport, education, loans_credit_cards, savings, investment, charity, misc)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *`;
      const newValues = [email, housing_living, health_medical, auto_transport, education, loans_credit_cards, savings, investment, charity, misc];
      const updatedFinancials = await db.query(tertiaryQuery, newValues);
      return next();
    }
      catch(err){
        return next({
          status: 500,
          message: `financialController.postFinancials error: ${err}`,
        });
      }
    }
  }
    catch(err){
      return next({
        status: 500,
        message: `financialController.postFinancials error: ${err}`,
      });
    }
}

module.exports = financialController;