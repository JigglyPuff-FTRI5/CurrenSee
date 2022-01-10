
// import actionType constants
import * as types from '../constants/actionTypes';
import axios from 'axios';

export const loginActionCreator = () => {
  return function (dispatch) {
      dispatch({
        type: types.LOGIN,
        payload: payload,
      });
    }
    }