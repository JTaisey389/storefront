import React from 'react';
import { connect } from 'react-redux';
// import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { activate, reset } from '../../store/products.js'
import { increment, addToCart, removeFromCart } from '../../store/cart.js';
// import DeleteIcon from '@material-ui/icons';
// import products from '../storefront/products';

const SimpleCart = props => {
  console.log(props);
  return (
    <>
      <section>
        <h3>Cart</h3>
        <div>
          {props.cartReducer.cart.map(product => {
            return (
              <ul>
                <li>Name: {product.name}, Price: {product.price}</li>
              </ul>
            )
          })}
        </div>
      </section>
    </>
  )
}
const mapStateToProps = state => ({
  categoryReducer: state.categoryReducer,
  productReducer: state.productReducer,
  cartReducer: state.cartReducer
})

const mapDispatchToProps = {
  activate, reset, increment, addToCart, removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);