import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfiniteScroll from 'react-infinite-scroll-component';

class Gallery extends Component {
    fetchImages() {
        console.log("fetch");
    }

    render() {
        const { images } = this.props;
        const { value } = this.props;

        return (
            <div className='container'>
                <InfiniteScroll dataLength={images.length}
                    next={this.fetchImages}
                    hasMore={true}
                />
                
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