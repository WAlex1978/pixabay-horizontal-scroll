import React, { Component } from 'react';
import Card from 'material-ui/Card';
import './gallery.css';

class Gallery extends Component {
    
    render() {
        const { images } = this.props;

        return (
            <div className="container">
                    {images.map(img => (<Card key={img.id}><img src={img.largeImageURL} /></Card>))}
            </div>
        );
    }
}

export default Gallery;