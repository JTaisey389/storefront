import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, TextField, Button, ListItemAvatar, Avatar, Typography, CardActions } from '@material-ui/core';
import { activate, reset } from '../../store/products.js';
import { increment, addToCart, removeFromCart } from '../../store/cart.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: '0 auto',
  },
  media: {
    height: 200,
  },
  cart: {
    maxWidth: 250,
    marginLeft: '10%',
    position: 'fixed',
    zIndex: 1000,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    padding: 10,
  },
  totalPrice: {
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#9CADCE',
    color: 'white',
    paddingRight: 15,
    paddingLeft: 15,
  },
  checkoutButton: {
    backgroundColor: '#9CADCE',
    color: 'white',
    margin: '0 auto',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  form: {
    padding: 20,
    display: 'flex',
  }, 
  inputForm: {
    width: '50%',
  },
  inputs: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
  }
});
function ShoppingCart(props) {

  function totalPrice(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      let cost = parseInt(array[i].price);
      total = total + cost;
    }
    return total;
  }

  let total = totalPrice(props.cartReducer.cart);

  const classes = useStyles();
  return (
    <>
      <Card id="shoppingCart" className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Order Summary
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          </Typography>
          <div>
            {props.cartReducer.cart.map(products => {
              return (
                <div className={classes.form}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={products.image} />
                  </ListItemAvatar>
                  <Typography className={classes.pos}>
                    {products.name} for ${products.price}
                  </Typography>
                    <Button className={classes.button} onClick={() => props.removeFromCart(products)} size="small">Remove</Button>
                </div>
              )
            })}
          </div>
          <Typography className={classes.totalPrice} color="textSecondary">
            Total: ${total}
          </Typography>

          <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.inputForm}>
              <Typography className={classes.title} variant="h5" component="h2">
                Billing Address
              </Typography>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="Full Name" /></div>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="Address" /></div>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="City" /></div>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="State" /></div>
              <div className={classes.inputs}><TextField required id="standard-basic" defaultValue="Zip" /></div>
            </div>
            <div className={classes.inputForm}>
              <Typography className={classes.title} variant="h5" component="h2">
                Payment Details
              </Typography>
              <div className={classes.inputs}><TextField required id="standard-required" defaultValue="Credit Card #" /></div>
              <div className={classes.inputs}><TextField required id="standard-required" defaultValue="mm/dd/yyyy" /></div>
              <div className={classes.inputs}><TextField required id="standard-required" defaultValue="CVV" /></div>
            </div>
          </form>
          <CardActions>
            <Button className={classes.checkoutButton} size="small">PLACE YOUR ORDER</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  )
}

const mapStateToProps = state => ({
  categoryReducer: state.categoryReducer,
  productReducer: state.productReducer,
  cartReducer: state.cartReducer
})

const mapDispatchToProps = { activate, reset, increment, addToCart, removeFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
