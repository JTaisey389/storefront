import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/storefront-categories.js'
import Products from '../src/components/storefront/products.js';
import { activate } from '../src/store/store-categories.js'
import { connect } from 'react-redux';

import './app.css';

function App(props) {
  return (
    <>
    <Header/>
      <main>
        <body>
          <Categories/>
        <h1>Browse our Categories</h1>
        <h3><span onClick={ () => props.activate('Electronics')}>Electronics</span> | <span onClick={ () => props.activate('Food')}>Food</span></h3>
        <h1>ELECTRONICS</h1>
        <p>Category Description Goes Here</p>
        <Products/>
        </body>
      </main>
    <Footer/>
    </>
  )
};
const mapDispatchToProps = { activate }

export default connect(null, mapDispatchToProps)(App);