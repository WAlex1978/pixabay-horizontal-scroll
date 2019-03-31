import React, { Component } from 'react';
import Search from './components/search';
import Gallery from './components/gallery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  state = {
    images: [],
  }

  getImages = images => {
    this.setState({images: images});
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Search search={this.getImages} />
          {this.state.images.length > 0 ? (<Gallery images={this.state.images} />): null}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
