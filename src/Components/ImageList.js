import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../Images/portfolio', false, /\.(JPG|png|jpe?g|svg)$/));

const tileData = images.map((image, index)=>({
    img: image.default,
}));

const useStyles = makeStyles((theme) => ({
  root: {
  },
  gridList: {
  },
}));



export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={230} className={classes.gridList} cols={3}>

        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
        
      </GridList>

    </div>
  );
}