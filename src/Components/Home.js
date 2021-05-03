import React from 'react'
import { Box, CardMedia, Typography } from '@material-ui/core';
import homeImg from '../Images/madeupbymariahomeimg.JPG'
import KissMark from '../Images/Kiss Mark Emoji.png'

function Home() {
    return (
        <Box >
            <Typography 
                style={{fontFamily:'Lobster Two', fontStyle: 'italic', fontWeight: '400', fontSize: '38px',}}
                variant={'h4'}
                gutterBottom
            >
                Madeup by Maria
                <Box style={{width: '25px', display: 'inline-block'}}>
                    <CardMedia image={KissMark} style={{paddingTop: '100%',top: 0}}/>
                </Box>
            </Typography>
            <Typography variant={'h6'}> Welcome...</Typography>
            <Box >
                <CardMedia image={homeImg} style={{paddingTop: '100%',top: 0}}/>
            </Box>
            <Typography variant={'h6'} >Helping You Feel Beautiful</Typography>
        </Box>
    )
}

export default Home
