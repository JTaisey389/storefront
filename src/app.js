import React, { useEffect } from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/storefront-categories.js'
import Products from './components/storefront/products.js';
import Cart from './components/simplecart/simplecart.js'
import * as actions from './store/actions.js';

import { activate } from './store/store-categories.js'
import { connect } from 'react-redux';

import './app.css';

function App(props) {
  //===NEW CODE ===
  const fetchData = (e) => {
    e && e.preventDefault();
    props.get() // Hit the API to get the information
  }
  useEffect(() => {
    fetchData();
  }, []);
  //===EXISTING CODE===
  return (
    <>
      <Header/>
      {/* <Categories/>
      <Cart />
      <Products/> */}
      <main>
        <body>
          <Categories/>
          <Cart/>
        {/* <h1>Browse our Categories</h1> */}
        <h3><span onClick={ () => props.activate('Electronics')}>Electronics</span> | <span onClick={ () => props.activate('Food')}>Food</span></h3>
        <h1>ELECTRONICS</h1>
        {/* <p>Category Description Goes Here</p> */}
        <Products/>
        </body>
      </main>
      <Footer/>
    </>
  )
};
// const mapDispatchToProps = { activate } => OLD CODE
const mapDispatchToProps = (dispatch, activate) => ({ 
  get: () => dispatch(actions.getRemoteData()),
  activate
}) //check to see if activate is passed in a parameter 

// NEW CODE
const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, mapDispatchToProps)(App); OLD CODE