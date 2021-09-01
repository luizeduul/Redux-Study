import { createStore, combineReducers } from 'redux';
import numbersReducer from './reducers/numberReducer';

const reducers = combineReducers({
  numbers: numbersReducer
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;