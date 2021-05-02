import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        backgroundColor: '#FEFFFF',
    },
    option: {
        padding: '5px',
    },
    Link: {
        textDecoration: 'none',
        color: '#413F3D',
    }
});

function Navbar() {
    const classes = useStyles();
    return (
      <Grid container className={classes.root}>
        <Grid item className={classes.option}>
          <Link className={classes.Link} to="/">
            Home
          </Link>
        </Grid>
        <Grid item className={classes.option}>
          <Link className={classes.Link} to="/about">
            About
          </Link>
        </Grid>
        <Grid item className={classes.option}>
          <Link className={classes.Link} to="/portfolio">
            Portfolio
          </Link>
        </Grid>
        <Grid item className={classes.option}>
          <Link className={classes.Link} to="/contact">
            Contact
          </Link>
        </Grid>
      </Grid>
    );
}

export default Navbar
