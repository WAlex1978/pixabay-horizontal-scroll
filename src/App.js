import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Search from './components/Search';
import Gallery from './components/Gallery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.getImages = this.getImages.bind(this);
  }

  state = {
    images: [],
  }

  async getImages(value) {
    this.setState({images: await Search(value)});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SearchBar search={this.getImages} />
          {this.state.images.length > 0 ? (<Gallery images={this.state.images} value={this.state.value} />): null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
