// STORE PRODUCTS => 'STOREFRONT PRODUCTS' => APP.JS
// STORE CART => 'STOREFRONT PRODUCTS' => APP.JS
// API-ACTIONS => 'STOREFRONT PRODUCTS' => APP.JS
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import * as actions from "../../store/api-actions.js";
import { activate, reset } from "../../store/products.js";
import { addToCart } from "../../store/cart.js";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    display: "inline-block",
    maxWidth: 300,
    maxHeight: 400,
    overflow: "auto",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const ActiveProduct = (props) => {
  const fetchData = (e) => {
    e && e.preventDefault();
    props.get(); // Hit the API to get the information
  };
  useEffect(() => {
    fetchData();
  }, []);
  const classes = useStyles();
  console.log("API-Products", props.apiReducer.results);
  return (
    <section>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
      <Container maxWidth="md" component="main">
        <ul>
          {props.apiReducer.results.map((product) => {
            if (product.categoryContainer === props.categoryReducer.activate)
              return (
                <>
                  <Card className={classes.root}>
                    <CardActions>
                      <CardMedia
                        component="img"
                        alt={product.name}
                        height="140"
                        image={product.image}
                        title={product.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {product.description}
                        </Typography>
                      </CardContent>
                    </CardActions>
                    <CardActions>
                      <Button
                        onClick={() => props.addToCart(product)}
                        size="small"
                        color="primary"
                      >
                        ADD TO CART
                      </Button>
                      <Button size="small" color="primary">
                        VIEW DETAILS
                      </Button>
                    </CardActions>
                  </Card>
                </>
              );
          })}
        </ul>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  categoryReducer: state.categoryReducer,
  productReducer: state.productReducer,
  // ADDED CART REDUCER
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer,
});

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(actions.getRemoteData()),
  addToCart: (product) => dispatch(addToCart(product)),
  //TODO delete from cart
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveProduct);
