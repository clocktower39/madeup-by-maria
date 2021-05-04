import React from 'react'
import { Link, useLocation } from 'react-router-dom';
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
    },
    activePage: {
        backgroundColor: '#FBD4D5',
    }
});

function Navbar() {
    const classes = useStyles();
    const location = useLocation();

    const MouseOver = (event) => {
      event.target.parentElement.style.background = '#FBD4D5';
    }
    const MouseOut = (event) => {
        console.log(event.target.parentElement.classList);
      event.target.parentElement.style.background="#FEFFFF";
    }

    return (
      <Grid container className={classes.root}>
          
        <Grid item className={`${classes.option} ${classes.activePage}`}>
          <Link className={classes.Link} to="/"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            
          >
            Home
          </Link>
        </Grid>
        <Grid item className={`${classes.option} ${classes.activePage}`}>
          <Link className={classes.Link} to="/about"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            >
            About
          </Link>
        </Grid>
        <Grid item className={`${classes.option} ${classes.activePage}`}>
          <Link className={classes.Link} to="/portfolio"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            >
            Portfolio
          </Link>
        </Grid>
        <Grid item className={classes.option}>
          <Link className={classes.Link} to="/contact"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            >
            Contact
          </Link>
        </Grid>
      </Grid>
    );
}

export default Navbar
