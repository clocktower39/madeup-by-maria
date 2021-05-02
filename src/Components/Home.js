import React from 'react'
import { CardMedia } from '@material-ui/core';
import homeImg from '../Images/madeupbymariahomeimg.JPG'
import KissMark from '../Images/Kiss Mark Emoji.png'

function Home() {
    return (
        <main>    
            <div id="center-section-container" >
                <h1 id="brandTitle">
                    Madeup by Maria <div style={{width: '25px', display: 'inline-block'}}><CardMedia image={KissMark} style={{paddingTop: '100%',top: 0}}/></div>
                </h1>
                <h4 id="welcome"> Welcome...</h4>
                <div id="main-img-section">
                    <CardMedia image={homeImg} style={{paddingTop: '100%',top: 0}}/>
                </div>
                <h4 id="main-caption">Helping You Feel Beautiful</h4>
            </div>
        </main>
    )
}

export default Home
