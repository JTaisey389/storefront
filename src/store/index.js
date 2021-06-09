import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './store-categories.js';
import productReducer from './products.js';

let reducers = combineReducers({ categoryReducer, productReducer });

const storeIndex = () => {
  return createStore(reducers, composeWithDevTools());
}

export default storeIndex();