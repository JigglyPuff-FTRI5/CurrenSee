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
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend)



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

  const pieData = {
    labels : ['Housing', 'Health', 'Auto', 'Education', 'Loans', 'Savings', 'Investments', 'Charity', 'Misc', 'Leftover Budget'],
    datasets: [{
      label: 'Budget Breakdown',
      data: [Number(useSelector(state => state.budget.housing)),
             Number(useSelector(state => state.budget.health)),
             Number(useSelector(state => state.budget.auto)), 
             Number(useSelector(state => state.budget.education)), 
             Number(useSelector(state => state.budget.loans)), 
             Number(useSelector(state => state.budget.savings)), 
             Number(useSelector(state => state.budget.investment)), 
             Number(useSelector(state => state.budget.charity)), 
             Number(useSelector(state => state.budget.misc)),
             Number(useSelector(state => state.budget.budget))],
      backgroundColor: [
      'rgba(8, 61, 119, 0.2)',
      'rgba(235, 235, 211, 0.2)',
      'rgba(218, 65, 103, 0.2)',
      'rgba(244, 211, 94, 0.2)',
      'rgba(247, 135, 100, 0.2)',
      'rgba(93, 183, 222, 0.2)',
      'rgba(159, 159, 237, 0.2)',
      'rgba(255, 202, 233, 0.2)',
      'rgba(88, 139, 139, 0.2)',
      'rgba(55, 150, 52, 0.2)',
    ],
    borderColor: [
      'rgba(8, 61, 119, 1)',
      'rgba(235, 235, 211, 1)',
      'rgba(218, 65, 103, 1)',
      'rgba(244, 211, 94, 1)',
      'rgba(247, 135, 100, 1)',
      'rgba(93, 183, 222, 1)',
      'rgba(159, 159, 237, 1)',
      'rgba(255, 202, 233, 1)',
      'rgba(88, 139, 139, 1)',
      'rgba(55, 150, 52, 1)',
    ]
    }],
    
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
      


      <Pie className='pieChart' data={pieData} width='25vw'/>

    </div>
    
  );
}

export default Dashboard;