import { createStore, combineReducers } from 'redux';
import { composedWithDevTools } from 'redux-devtools-extension';

import Categories from './categories.js';

let reducers = combineReducers({ counter });

let initialState = { 
  productsList: [],
  count: 0,
  activeProduct: '',
}
