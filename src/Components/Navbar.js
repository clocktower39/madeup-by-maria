import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',

    },
});

function Navbar() {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item ><Link to="/">Home</Link></Grid>
            <Grid item ><Link to="/about">About</Link></Grid>
            <Grid item ><Link to="/portfolio">Portfolio</Link></Grid>
            <Grid item ><Link to="/contact">Contact</Link></Grid>
        </Grid>
    )
}

export default Navbar
