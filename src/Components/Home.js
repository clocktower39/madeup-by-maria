import React from 'react'
import { Box, CardMedia, makeStyles, Typography } from '@material-ui/core';
import homeImg from '../Images/madeupbymariahomeimg.JPG';
import Header from './Header';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
    },
    welcome: {
        color: '#413F3D',
        fontFamily: 'Cabin',
        fontWeight: 400,
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.143em',
        padding: '0px 0px 25px 10px'
    },
    imgContainer: {
        width: '100%'
    },
    homeImg: {
        paddingTop: '115%',
        top: 0,
        opacity: 0.95,
        borderRadius: '5px',
    },
    motto: {
        color: '#413F3D',
        fontFamily: 'Cabin',
        fontWeight: 400,
        fontSize: '17px',
        padding: '20px 0',
        letterSpacing: 'normal',
    },
})

function Home() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Header />
            <Typography variant={'h6'} className={classes.welcome} >Welcome...</Typography>
            <Box component='div' className={classes.imgContainer}>
                <CardMedia image={homeImg} className={classes.homeImg}/>
            </Box>
            <Typography variant={'h6'} className={classes.motto} >Helping You Feel Beautiful</Typography>
        </Box>
    )
}

export default Home
