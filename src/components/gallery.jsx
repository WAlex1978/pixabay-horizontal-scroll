import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component {
    
    render() {
        const { images } = this.props;

        return (
            <div className="container">
                {console.log(images)}
                {images.map(img => (<img className='img-slider' src={img.largeImageURL} alt=''/>))}
            </div>
        );
    }
}

export default Gallery;