import React from 'react';

import { connect } from 'react-redux';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { removeFromCart } from '../../store/cart.js';
// import DeleteIcon from '@material-ui/icons';
// import products from '../storefront/products';
// TODO import CSS 

// ./src/components/simplecart/simplecart.js
// Attempted import error: '@material-ui/icons' does not contain a default export (imported as 'DeleteIcon').
const SimpleCart = props => {
  console.log(props);
  return (
    <>
      <section>
        <CardContent>
          {props.cart.cart.map((product, i) => {
            return (
              <Card key={i} >
                <Typography className='price'>
                  ${product.price} : {product.name}
                </Typography>
                <IconButton onClick={() => props.removeFromCart(product)}>
                {/* <DeleteIcon/> */}
                </IconButton>
              </Card>
            );
          })}
        </CardContent>
      </section>
    </>
  )
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = {
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);