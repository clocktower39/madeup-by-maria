import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import Header from './Header';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../Images/portfolio', false, /\.(JPG|png|jpe?g|svg)$/));

const useStyles = makeStyles((theme) => ({
  root: {
  },
  gridList: {
  },
}));



function Portfolio() {
    const classes = useStyles();
    const [tileData, setTileData] = useState([...images.map((image, index)=>({
        img: image.default,
        cols: 1,
        rows: 1,
    }))])

    const handleClick = (e, eIndex) => {
        setTileData(tileData.map((tile, index) => {
          if(index === eIndex){
              if(tile.cols === 1){
                tile.cols = 3;
                tile.rows = 3;
              }
              else {
                tile.cols = 1;
                tile.rows = 1;
              }
          }
          return(tile);
      }))
    }

    return (
        <div>
            <Header />
            <div>
            <GridList cellHeight={230} className={classes.gridList} cols={3}>

                {tileData.map((tile, index) => {
                    return(
                        <GridListTile key={tile.img} cols={tile.cols} rows={tile.rows} onClick={(e)=>handleClick(e, index)}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    )
                })}
                
            </GridList>

            </div>
        </div>
    )
}

export default Portfolio
