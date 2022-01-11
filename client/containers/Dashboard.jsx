import React, { Component } from 'react';
import {
  monthlyIncomeActionCreator,
  housingInputActionCreator,
  healthInputActionCreator,
  autoInputActionCreator,
  educationInputActionCreator,
  loansInputActionCreator,
  savingsInputActionCreator,
  investInputActionCreator,
  charInputActionCreator,
  miscInputActionCreator,
  submitBudgetActionCreator,
  updateBudgetActionCreator
} from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux';


function Dashboard() {
  const dispatch = useDispatch();
  const budget = useSelector(state => state.budget.budget)
  
  const submit = (e) => {
    e.preventDefault();
    const total = {
      housing: budget.housing,
      health: budget.health,
      auto: budget.auto,
      education: budget.education,
      loans: budget.loans,
      savings: budget.savings,
      investment: budget.investment,
      charity: budget.charity,
      misc: budget.misc
    }
    dispatch(submitBudgetActionCreator(total));
  }

  return (
    <div>
      
      
      
     
      <div className="monthly-income">
        <h1>Monthly Income</h1>
        <input type="number" onChange={(e) => {
          dispatch(monthlyIncomeActionCreator(e.target.value));
          dispatch(updateBudgetActionCreator());
          }} />
        </div>

      <div className="budget-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}>
        <div className="budget-div">
          <h1>Housing and Living Expenses</h1>
          <p>Rent/Utilities</p>
          <input type="number" onChange={(e) => {
            dispatch(housingInputActionCreator(e.target.value));
            dispatch(updateBudgetActionCreator());
          }}/>
        </div>
        <div className="budget-div">
          <h1>Health/Medical</h1>
          <p>Doctor Visits, Medication</p>
          <input type="number" onChange={(e) =>{
           dispatch(healthInputActionCreator(e.target.value));
           dispatch(updateBudgetActionCreator());
          } }/>
        </div>
        <div className="budget-div">
          <h1>Auto/Transport</h1>
          <p>Car payment/Gas/Auto insurance</p>
          <input type="number" onChange={(e) =>{
            dispatch(autoInputActionCreator(e.target.value));
            dispatch(updateBudgetActionCreator());
          } }/>
        </div>
        <div className="budget-div">
          <h1>Education</h1>
          <p>Tuition, Studying Materials</p>
          <input type="number" onChange={(e) => {
            dispatch(educationInputActionCreator(e.target.value));
            dispatch(updateBudgetActionCreator());
          }}/>
        </div>
        <div className="budget-div">
          <h1>Loans/Credit Cards</h1>
          <p>Credit Card Debt, Student Loans</p>
          <input type="number" onChange={(e) => {
            dispatch(loansInputActionCreator(e.target.value));
            dispatch(updateBudgetActionCreator());
            }}/>
            
        </div>
        <div className="budget-div">
          <h1>Savings</h1>
          <p>Piggy bank</p>
          <input type="number" onChange={(e) => {
            dispatch(savingsInputActionCreator(e.target.value));
            dispatch(updateBudgetActionCreator());
            }}/>
            
        </div>
        <div className="budget-div">
          <h1>Investment</h1>
          <p>Stocks, real-estate</p>
          <input type="number" onChange={(e) => {
            dispatch(investInputActionCreator(e.target.value));
            dispatch(updateBudgetActionCreator());
            }}/>
            
        </div>
        <div className="budget-div">
          <h1>Charitable Donations</h1>
          <p>UNICEF, Goodwill</p>
          <input type="number" onChange={(e) => {
            dispatch(charInputActionCreator(e.target.value));
            dispatch(updateBudgetActionCreator());
            }}/>
            
        </div>
        <div className="budget-div">
          <h1>Misc</h1>
          <p>Entertainment, travel, etc.</p>
          <input type="number" onChange={(e) => {
            dispatch(miscInputActionCreator(e.target.value));
            dispatch(updateBudgetActionCreator());
            }}/>
            
        </div>
        <div className="budget-div">
          <h1>Budget</h1>
          <p>Income minus the essentials</p>
          <strong>{budget}</strong>
        </div>
      </div>
      
    </div>
    
  );
}

export default Dashboard;