import React, { Component } from 'react';
import './App.css';

import HomePage from './components/homepage';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <HomePage />
      </div>
    );
  }
}

export default App;
