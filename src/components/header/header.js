import React from "react";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Paper,
  Typography,
  Link,
  IconButton,
  Container,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { positions } from '@material-ui/system';
import { connect } from "react-redux";
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.black,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  fullHeight: {
    height: "100%"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  name: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // button: {
  //   positions: ArrowRight,
  // },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OUR STORE
          </Typography>
          <Button color="inherit" positions="right">CART (0)</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default App;
