import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/storefront-categories.js'
import Products from './components/storefront/products.js';
import Cart from './components/simplecart/simplecart.js'

import './app.css';

function App(props) {
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
        {/* <h3><span onClick={ () => props.activate('Electronics')}>Electronics</span> | <span onClick={ () => props.activate('Food')}>Food</span></h3> */}
        <h1>ELECTRONICS</h1>
        {/* <p>Category Description Goes Here</p> */}
        <Products/>
        </body>
      </main>
      <Footer/>
    </>
  )
};
export default App;

