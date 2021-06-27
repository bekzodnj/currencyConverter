import { createStore, combineReducers } from 'redux';
import { ratesReducer } from './rates';
import { userReducer } from './user';

export const store = createStore(
  combineReducers({
    rates: ratesReducer,
    user: userReducer,
  })
);

// example of accessing the state:
// state => state.rates.amount
// state => state.user.name
