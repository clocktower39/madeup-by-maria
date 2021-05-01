import React from 'react'
import homeImg from '../Images/madeupbymariahomeimg.JPG'
import KissMark from '../Images/Kiss Mark Emoji.png'

function Home() {
    return (
        <main>
            <div id="left-section-container" class="">
                
            </div>
    
            <div id="center-section-container" class="">
                <h1 id="brandTitle">
                    Madeup by Maria <img width="25px" src={KissMark} />
                </h1>
                <h4 id="welcome"> Welcome...</h4>
                <div id="main-img-section">
                    <img id="main-img" src={homeImg} />
                </div>
                <h4 id="main-caption">Helping You Feel Beautiful</h4>
            </div>
    
            <div id="right-section-container" class="">
            </div>
        </main>
    )
}

export default Home
