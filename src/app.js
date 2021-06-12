// STORE-CATEGORIES REDUCER => STOREFRONT-CATEGORIES => 'APP.JS'
// STORE PRODUCTS => STOREFRONT PRODUCTS => 'APP.JS'
// STORE CART => STOREFRONT PRODUCTS => 'APP.JS'
// API-ACTIONS => STOREFRONT PRODUCTS => 'APP.JS'
//CART REDUCER => SIMPLE CART => 'APP.JS'
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/storefront-categories.js'
import Products from './components/storefront/products.js';
import Cart from './components/simplecart/simplecart.js'
import './style.css';

function App() {
  return (
    <>
      <Header/>
      <Cart/>
      <Categories/>
      <Products/>
      <Footer/>
    </>
  )
};
export default App;

