
// import actionType constants
import * as types from '../constants/actionTypes';
import axios from 'axios';

// export const loginActionCreator = () => {
//   return function (dispatch) {
//       dispatch({
//         type: types.LOGIN,
//         payload: payload,
//       });
//     }
//   }

export const nameInputActionCreator = (input) => ({
  type: types.NAME_INPUT,
  payload: input
});

export const emailInputActionCreator = (input) => ({
  type: types.EMAIL_INPUT,
  payload: input
});

export const passwordInputActionCreator = (input) => ({
  type: types.PASSWORD_INPUT,
  payload: input
});

export const updateBudgetActionCreator = () => ({
  type: types.UPDATE_BUDGET,
});


export const submitSignupActionCreator = (user) => {
  return (dispatch) => {
    fetch('/user/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password
      })
    }).then(res => (res.json()))
    .then(response => {
      console.log(response);
      const payload = response;
      dispatch({type: types.SUBMIT_SIGNUP, payload: payload})
    })
    .catch(err => console.log(err))
  }
}

export const submitBudgetActionCreator = (total) => {
  return (dispatch) => {
    fetch('endpoint', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        housing: total.housing,
      health: total.health,
      auto: total.auto,
      education: total.education,
      loans: total.loans,
      savings: total.savings,
      investment: total.investment,
      charity: total.charity,
      misc: total.misc
      })
    }).then(res => {
      console.log(res);
    dispatch({type: types.SUBMIT_BUDGET})
    })
    .catch(err => console.log(err))
  }
}

export const submitLoginActionCreator = (user) => {
  return (dispatch) => {
    fetch('/user/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    }).then(res => (res.json()))
      .then(response => {
      const payload = response;
      dispatch({type: types.SUBMIT_LOGIN, payload: payload})
    })
      
    
    .catch(err => console.log(err))
  }
}



// Budget Actions

export const monthlyIncomeActionCreator = (input) => ({
  type: types.INCOME_INPUT,
  payload: input
});

export const housingInputActionCreator = (input) => ({
  type: types.HOUSING_INPUT,
  payload: input
});

export const healthInputActionCreator = (input) => ({
  type: types.HEALTH_INPUT,
  payload: input
});

export const autoInputActionCreator = (input) => ({
  type: types.AUTO_INPUT,
  payload: input
});

export const educationInputActionCreator = (input) => ({
  type: types.EDUCATION_INPUT,
  payload: input
});

export const loansInputActionCreator = (input) => ({
  type: types.LOANS_INPUT,
  payload: input
});

export const savingsInputActionCreator = (input) => ({
  type: types.SAVINGS_INPUT,
  payload: input
});

export const investInputActionCreator = (input) => ({
  type: types.INVEST_INPUT,
  payload: input
});

export const charInputActionCreator = (input) => ({
  type: types.CHAR_INPUT,
  payload: input
});

export const miscInputActionCreator = (input) => ({
  type: types.MISC_INPUT,
  payload: input
});
