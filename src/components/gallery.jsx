import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class Gallery extends Component {
    render() {
        const { images } = this.props;

        return (
            <div className='container'>
                <GridList className='gridList' cols={3}>
                    {images.map(img => (
                        <GridListTile key={img.id}>
                            <img src={img.largeImageURL} alt='' />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default Gallery;