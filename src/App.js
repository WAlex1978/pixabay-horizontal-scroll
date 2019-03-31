import React, { Component } from 'react';
import Search from './components/search';
import Gallery from './components/gallery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Search />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
