import React from 'react'
import { CardMedia } from '@material-ui/core';
import brandTitleImage from '../Images/madeupbymariaaboutimg.JPG'
import KissMark from '../Images/Kiss Mark Emoji.png'
function About() {
    return (
        <main>
            <h1 id="brandTitle">
                Madeup by Maria <div style={{width: '25px', display: 'inline-block'}}><CardMedia image={KissMark} style={{paddingTop: '100%',top: 0}}/></div>
            </h1>
            <div id="main">
                <div>
                    <CardMedia image={brandTitleImage} style={{paddingTop: '100%',top: 0}}/>
                </div>
                <div>
                    <p id="about-description">Thank you for checking out MadeupbyMaria. I've been a makeup enthusiast since I was a little girl and luckily was able to make a career out of it. <br /><br />I completed the beauty makeup course at London Eyes Inc. International Academy of Makeup along with their Airbrush Master Class. In an effort to keep up with the latest techniques, I recently had the ultimate experience to attend the celebrity makeup artist, Mario Dedivanovic, Master Class. He has made up countless celebrities such as Kim Kardashian West, Selma Hayek, Kate Bosworth, Bebe Rexha, Demi Lovato and many more. 
                        <br /><br />I specialize in event make up including weddings and proms and would love to make you feel your best on your special day. 
                        Please email me so you too can be MadeupbyMaria. 
                    </p>
                </div>
            </div>
    </main>
    )
}

export default About
