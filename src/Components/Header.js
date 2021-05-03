import React from 'react'
import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import KissMark from '../Images/Kiss Mark Emoji.png'

const useStyles = makeStyles({
    root:{
        textAlign: 'center',
        fontFamily: "Lobster Two",
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: "38px",
    },
})

function Header() {
    const classes = useStyles();
    return (
      <Typography
        className={classes.root}
        variant={"h4"}
        gutterBottom
      >
        Madeup by Maria<span> </span>
        <Box style={{ width: "25px", display: "inline-block" }}>
          <CardMedia
            component={"img"}
            image={KissMark}
            style={{ paddingTop: "100%", top: 0 }}
          />
        </Box>
      </Typography>
    );
}

export default Header
