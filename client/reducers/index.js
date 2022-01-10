import { combineReducers } from 'redux';

// import all reducers here like below
import dataReducer from './dataReducer';

// combine reducers
const reducers = combineReducers({
  data: dataReducer,
});

// make the combined reducers available for import
export default reducers;