// STORE-CATEGORIES REDUCER => 'STOREFRONT-CATEGORIES' =>
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { activate, inactive, reset } from "../../store/store-categories.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ActiveCategory = (props) => {
  const classes = useStyles();
  return (
    <section>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
      <h1 id="category">Browse Our Categories</h1>
      <ul>
        <li>
          {props.categoryList.map((category) => {
            return (
              <Button
                color="primary"
                onClick={() => props.activate(category.name)}
                key={category.name}
              >
                {" "}
                {category.name}
              </Button>
            );
          })}
        </li>
      </ul>
      <h2 id="selectedCategory">{props.categoryList.activate}</h2>
    </section>
  );
};

const mapStateToProps = (state) => ({
  categoryList: state.categoryReducer.categoryList,
});

const mapDispatchToProps = (dispatch) => ({
  activate: () => dispatch(activate()),
  // inactive: () => dispatch(inactive()),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategory);
