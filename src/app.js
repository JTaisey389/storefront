import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Products from '../src/store/products.js';
import './app.css';

export default function App() {
  return (
    <>
    <Header/>
      <main>
        <body>
        <h1>Browse our Categories</h1>
        <h3>Electronics | Food</h3>
        <h1>ELECTRONICS</h1>
        <p>Category Description Goes Here</p>
        <Products/>
        </body>
      </main>
    <Footer/>
    </>
  )
};