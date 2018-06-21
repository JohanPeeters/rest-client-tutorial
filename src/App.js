import React, { Component } from 'react';
import './App.css';
import ResourceUse from './ResourceUse'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the l33t h4x0r social network</h1>
        </header>
        <ResourceUse/>
      </div>
    );
  }
}

export default App;
