// STORE-CATEGORIES-REDUCER => 'STORE INDEX.JS' 
// PRODUCTS-REDUCER => 'STORE INDEX.JS
//CART-REDUCER.JS => 'STORE INDEX.JS'
//API-REDUCER => 'STORE INDEX.JS'
//THUNK => 'STORE INDEX.JS'
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