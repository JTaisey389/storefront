// INDEX.JS => CART.JS => SIMPLECART.JS => APP.JS
import React from 'react';
import { connect } from 'react-redux';
import { activate, reset } from '../../store/products.js'
import { increment, addToCart, removeFromCart } from '../../store/cart.js';

const SimpleCart = props => {
  // console.log(props);
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