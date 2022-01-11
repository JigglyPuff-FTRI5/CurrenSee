import { combineReducers } from 'redux';

// import all reducers here like below
import dataReducer from './dataReducer';
import budgetReducer from './budgetReducer';

// combine reducers
const reducers = combineReducers({
  data: dataReducer,
  budget: budgetReducer
});

// make the combined reducers available for import
export default reducers;