import React from 'react'
import { Box, CardMedia, makeStyles, Typography } from '@material-ui/core';
import homeImg from '../Images/madeupbymariahomeimg.JPG';
import Header from './Header';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
    },
    imgContainer: {
        width: '100%'
    },
    homeImg: {
        paddingTop: '100%',
        top: 0,
    }
})

function Home() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Header />
            <Typography variant={'h6'}>Welcome...</Typography>
            <Box component='div' className={classes.imgContainer}>
                <CardMedia image={homeImg} className={classes.homeImg}/>
            </Box>
            <Typography variant={'h6'} >Helping You Feel Beautiful</Typography>
        </Box>
    )
}

export default Home
