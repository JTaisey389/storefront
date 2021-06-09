import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './store-categories.js';
import productReducer from './products.js';
import cartReducer from './cart.js';

let reducers = combineReducers({ categoryReducer, productReducer, cartReducer });

const storeIndex = () => {
  return createStore(reducers, composeWithDevTools());
}

export default storeIndex();