// STORE PRODUCTS => 'STOREFRONT PRODUCTS' => APP.JS
// STORE CART => 'STOREFRONT PRODUCTS' => APP.JS
// API-ACTIONS => 'STOREFRONT PRODUCTS' => APP.JS
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import * as actions from '../../store/api-actions.js';
import { activate, reset } from '../../store/products.js';
import { addToCart } from '../../store/cart.js'; 

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
    padding: theme.spacing(2)
  },
}));

const ActiveProduct = props => {
    const fetchData = (e) => {
    e && e.preventDefault();
    props.get() // Hit the API to get the information
  }
  useEffect(() => {
    fetchData();
  }, []);
  const classes = useStyles();
  console.log('API-Products', props.apiReducer.results);
  return(
    <section>
      <ul>
        {props.apiReducer.results.map(product => {
          // if (product.categoryContainer === props.categoryReducer.selectedCategory)
          return (
            <>
              <Grid item xs={4}>
                <Grid container item xs={12} spacing={3}>
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
                          <Typography variant="body2" color="textSecondary" component="p">
                          {product.description}
                        </Typography>
                      </CardContent>
                    </CardActions>
                      <CardActions>
                        <Button size="small" color="primary">
                          ADD TO CART
                        </Button>
                        <Button size="small" color="primary">
                          VIEW DETAILS
                        </Button>
                      </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </>
          )
        })}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  categoryReducer: state.categoryReducer,
  productReducer: state.productReducer,
  // ADDED CART REDUCER
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer,
})

const mapDispatchToProps = (dispatch) => ({
  get: () => dispatch(actions.getRemoteData()),
  add: (product) => dispatch (addToCart(product)),
  reset: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(ActiveProduct);