// STORE-CATEGORIES REDUCER => STOREFRONT-CATEGORIES => APP.JS => 'INDEX.JS
// STORE PRODUCTS => STOREFRONT PRODUCTS => APP.JS => 'INDEX.JS
// STORE CART => STOREFRONT PRODUCTS => APP.JS => 'INDEX.JS
// API-ACTIONS => STOREFRONT PRODUCTS => APP.JS => 'INDEX.JS
//CART REDUCER => SIMPLE CART => APP.JS => 'INDEX.JS
// STORE-CATEGORIES-REDUCER => STORE INDEX.JS => 'INDEX.JS'
// PRODUCTS-REDUCER => STORE INDEX.JS => 'INDEX.JS'
//CART-REDUCER.JS => STORE INDEX.JS => 'INDEX.JS'
//API-REDUCER => STORE INDEX.JS => 'INDEX.JS' 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.js';
import store from './store/index.js';

function Main() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);