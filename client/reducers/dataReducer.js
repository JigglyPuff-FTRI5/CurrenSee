import * as types from '../constants/actionTypes';

const initialState = {
  name: '',
  email: '',
  password: '',
  isLoggedIn: false
};

const dataReducer = (state = initialState, action) => {
  //leaving in one basic switch case
  switch (action.type) {
    case types.NAME_INPUT:
      return {...state, name: action.payload};

    case types.EMAIL_INPUT:
      return {...state, email: action.payload};  

    case types.PASSWORD_INPUT:
      return {...state, password: action.payload};
      
    case types.SUBMIT_SIGNUP :
      return {...state, 
        name: '',
        email: '',
        password: '',
        isLoggedIn: action.payload.isLoggedIn
      }

      case types.SUBMIT_LOGIN :
        return {...state, 
          email: '',
          password: '',
          isLoggedIn: action.payload.isLoggedIn
        }
    default:
      return state;
  }
};
export default dataReducer;
