import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Button, Typography, CardActions, CardActionArea, CardMedia } from '@material-ui/core';
import { activeCategory, reset } from '../../store/products.js';
import { increment, addToCart, removeFromCart } from '../../store/cart.js';
import * as actions from '../../store/api-actions.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: '0 auto',
  },
  media: {
    height: 400,
  },
  cart: {
    maxWidth: 250,
    marginLeft: '10%',
    position: 'fixed',
    zIndex: 950,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    width: 650,
    backgroundColor: '#9CADCE',
    color: 'white',
  }
})
function ProductDetails(props) {
  const classes = useStyles();
  let selectedItem = props.location.state;
  return (
    <>
      <Container>
        <Card id="cardProducts" className={classes.cart}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Cart
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            </Typography>
            <div>
              {props.cartReducer.cart.map(products => {
                return (
                  <>
                    <Typography>
                      {products.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {products.price}
                    </Typography>
                    <CardActions>
                      <Button onClick={() => props.remove(products)} size="small">Remove</Button>
                    </CardActions>
                  </>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </Container>
      <Container id="productDetails" className={classes.root}>
        <h2 id="itemTitle">{selectedItem.name}</h2>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={selectedItem.image} title={selectedItem.name}/>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                In stock: {selectedItem.inventoryCount}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ${selectedItem.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ${selectedItem.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button onClick={() => props.add(selectedItem)} className={classes.button} size="large" color="light">Buy</Button>
      </Container>
    </>
  )
}

const mapStateToProps = state => ({
  categoryReducer: state.categoryReducer,
  cartReducer: state.cartReducer,
  apiReducer: state.apiReducer,
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  addToCart: (products) => dispatch(addToCart(products)),
  reset: () => dispatch(reset()),
  removeFromCart: (products) => dispatch(removeFromCart(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);