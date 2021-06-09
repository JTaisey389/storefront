import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';

import { activate, reset } from '../../store/products.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ActiveProduct = props => {
  const classes = useStyles();
  // console.log(props.categoryReducer.selectedCategory);
  return(
    <section>
      <ul>
        {props.productReducer.products.map(product => {
          if (product.categoryContainer === props.categoryReducer.selectedCategory)
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
  productReducer: state.productReducer
})

const mapDispatchToProps = { activate, reset }

export default connect(mapStateToProps, mapDispatchToProps)(ActiveProduct);