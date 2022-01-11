
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
    }).then(res => {
      console.log(res);
      dispatch({type: types.SUBMIT_SIGNUP})
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
    }).then(res => {
      console.log(res);
      dispatch({type: types.SUBMIT_LOGIN})
    })
    .catch(err => console.log(err))
  }
}