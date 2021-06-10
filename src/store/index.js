// STORE PRODUCTS REDUCER => INDEX.JS => STOREFRONT PRODUCTS.JS => APP.JS
// STORE PRODUCTS REDUCER => INDEX.JS => STOREFRONT CATEGORIES.JS => APP.JS
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './store-categories.js';
import productReducer from './products.js';
import cartReducer from './cart.js';
import thunk from '../middleware/thunk.js';
import apiReducer from './api-reducer.js'


let reducers = combineReducers({ 
  categoryReducer, 
  productReducer, 
  cartReducer,
  apiReducer,
});
// let reducers = combineReducers({ categoryReducer, productReducer, cartReducer });OLD CODE

const storeIndex = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
  // return createStore(reducers, composeWithDevTools());OLD CODE
}

export default storeIndex();