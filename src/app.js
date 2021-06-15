// STORE-CATEGORIES REDUCER => STOREFRONT-CATEGORIES => 'APP.JS'
// STORE PRODUCTS => STOREFRONT PRODUCTS => 'APP.JS'
// STORE CART => STOREFRONT PRODUCTS => 'APP.JS'
// API-ACTIONS => STOREFRONT PRODUCTS => 'APP.JS'
//CART REDUCER => SIMPLE CART => 'APP.JS'
import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/storefront-categories.js'
import Products from './components/storefront/products.js';
import ProductDetails from './components/storefront/product-details.js';
import SimpleCart from './components/simplecart/simplecart.js';
import ShoppingCart from './components/storefront/shopping-cart.js';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path ="/">
          <SimpleCart />
          <Categories/>
          <Products/>
        </Route>
        <Route 
        exact path={`/details/:${props.productReducer._id}`} component={(props) => <ProductDetails {...props} />}>
        </Route>
        <Route exact path ="/cart">
          <ShoppingCart/>
        </Route>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </>
  )
};

const mapStateToProps = state => ({
  productReducer: state.productReducer,
  categoryReducer: state.categoryReducer,
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer,
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  addToCart: (products) => dispatch(addToCart(products)),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

