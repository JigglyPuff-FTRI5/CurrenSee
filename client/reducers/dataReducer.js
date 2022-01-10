import * as types from '../constants/actionTypes';

const initialState = {
  data: []
};

const dataReducer = (state = initialState, action) => {
  //leaving in one basic switch case
  switch (action.type) {
    case types.LOGIN:
      return { ...state};
    
    default:
      return state;
  }
};
export default dataReducer;
