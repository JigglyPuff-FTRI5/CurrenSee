import * as types from '../constants/actionTypes';

const initialState = {

  housing: '0',
  health: '0',
  auto: '0',
  education: '0',
  loans: '0',
  savings: '0',
  investments: '0',
  charity: '0',
  misc: '0',
  income: '0',
  budget: '0'
};

const budgetReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.HOUSING_INPUT:
      return {...state, housing: action.payload};

    case types.HEALTH_INPUT:
      return {...state, health: action.payload};

    case types.AUTO_INPUT:
      return {...state, auto: action.payload};

    case types.EDUCATION_INPUT:
      return {...state, education: action.payload};

    case types.LOANS_INPUT:
      return {...state, loans: action.payload};

    case types.SAVINGS_INPUT:
      return {...state, savings: action.payload};

    case types.INVEST_INPUT:
      return {...state, investments: action.payload};

    case types.CHAR_INPUT:
      return {...state, charity: action.payload};

    case types.MISC_INPUT:
      return {...state, misc: action.payload};

    case types.INCOME_INPUT:
      return {...state, income: action.payload};
      
    case types.UPDATE_BUDGET:{
      const budg = Number(state.income) - 
      Number(state.housing) - 
      Number(state.health) - 
      Number(state.auto) - 
      Number(state.education) - 
      Number(state.loans) - 
      Number(state.savings) - 
      Number(state.investments) - 
      Number(state.charity) -
      Number(state.misc);
      return {...state, budget: budg}
    }

    case types.SUBMIT_BUDGET:{
      return {...state}
    }
    default:
       return state;
  }


};

export default budgetReducer;