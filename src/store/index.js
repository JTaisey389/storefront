// STORE PRODUCTS REDUCER => INDEX.JS => STOREFRONT PRODUCTS.JS => APP.JS
// STORE PRODUCTS REDUCER => INDEX.JS => STOREFRONT CART.JS => APP.JS
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './store-categories.js';
import productReducer from './products.js';
import cartReducer from './cart.js';
// import thunk from '../middleware/thunk.js';
// import apiReducer from './api-reducer.js'


let reducers = combineReducers({ categoryReducer, productReducer, cartReducer });

const storeIndex = () => {
  return createStore(reducers, composeWithDevTools());
}

export default storeIndex();