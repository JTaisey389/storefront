import React from 'react';
import { connect } from 'react-redux';
import { switchCategory, reset } from '../../store/products.js';

const Products = props => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        {props.prodReducer.products.map(product => {
          if (product.categoryContainer === props.catReducer.activeCategory)
          return (
            <li>{product.name}</li>
          )
        })}
      </ul>
    </section>
  )
}
const mapStateToProps = state => ({
  prodReducer: state.prodReducer,
  catReducer: state.catReducer,
})

// const mapDispatchToProps = dispatch => ({
//   switchCategory: (name) => dispatch(switchCategory(name)),
//   reset: () => dispatch(reset())
// })

const mapDispatchToProps = { switchCategory, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Products);