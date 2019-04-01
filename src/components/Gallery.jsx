import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Gallery extends Component {
    state = {
        open: false,
        selectedImage: '',
    }

    handleEnlarge = image => {
        this.setState({
            open: true,
            selectedImage: image,
        });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { images } = this.props;

        return (
            <div className='container'>
                <GridList cellHeight={240} cols={3}>
                    {images.map(img => (
                        <GridListTile key={img.id}>
                            <LazyLoadImage alt='' style={{cursor: 'pointer'}} width='100%' src={img.largeImageURL} 
                                onClick={() => this.handleEnlarge(img.largeImageURL)}/>
                        </GridListTile>
                    ))}
                </GridList>
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth={true} maxWidth='md'>
                    <img src={this.state.selectedImage} alt="" style={{ width: '100%' }} />
                </Dialog>
            </div>
        );
    }
}

export default Gallery;
