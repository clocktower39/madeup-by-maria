import React from 'react'
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    bottom: 0,
    height: "50px",
    width: "100%",
    fontSize: '11px',
    color: "rgba(255, 255, 255, 0.65)",
    backgroundColor: "rgb(22, 22, 22)",
  }
})

function Footer() {
  const classes = useStyles();
    return (
      <Box component={'footer'} className={classes.root} >
        Copyright © 2021 MadeupbyMaria.com - All Rights Reserved.
      </Box>
    );
}

export default Footer
