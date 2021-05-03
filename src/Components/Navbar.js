import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        backgroundColor: '#FEFFFF',
    },
    option: {
        padding: '15px 7.5px',
    },
    Link: {
        textDecoration: 'none',
        color: '#413F3D',
        padding: '7.5px',
        width: '100%',
        fontFamily: 'Cabin',
        textTransform: 'uppercase',
        fontSize: '14px',
        letterSpacing: '0.143em',
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
