import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import './App.css';

class App extends Component {
  state = {
    value: '',
    images: [],
  }

  getImages = (value, images) => {
    this.setState(
      {
        value: value,
        images: images,
      });
  }

  render() {
    return (
      <div>
        <SearchBar return={this.getImages} />
        {this.state.images.length > 0 ? (<Gallery images={this.state.images} value={this.state.value} />): null}
      </div>
    );
  }
}

export default App;
