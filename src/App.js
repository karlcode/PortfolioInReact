import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import About from './components/About.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        
          
          
        <About/>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
