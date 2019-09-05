import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import search from './searchReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  fuelSavings,
  search
});

export default rootReducer;
