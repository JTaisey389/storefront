//CART REDUCER => 'SIMPLE CART' => APP.JS
import React from "react";
import { connect } from "react-redux";
import { activate, reset } from "../../store/products.js";
import { Typography,Card, CardContent, CardActions, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { increment, addToCart, removeFromCart } from "../../store/cart.js";

const useStyles = makeStyles ({ 
  root: {
    maxWidth: 275,
    position: 'fixed',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})
const SimpleCart = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card id="cartCard" className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Cart
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          ></Typography>
          <div>
            {props.cartReducer.cart.map((product) => {
              return (
                <>
                  <Typography>{product.name}</Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {product.price}
                  </Typography>
                  <CardActions>
                    <Button onClick={() => props.removeFromCart(product)} size="small">Remove</Button>
                  </CardActions>
                </>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
const mapStateToProps = (state) => ({
  categoryReducer: state.categoryReducer,
  productReducer: state.productReducer,
  cartReducer: state.cartReducer,
});

const mapDispatchToProps = {
  activate,
  reset,
  increment,
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
