import React, { Component } from 'react';
import './styles/App.css';
import About from './components/About.js'
import Container from './components/Container.js'

class App extends Component {
  constructor() {
  super();
  this.state = {clicked: false, clicked2: false}
  this.toggleHighlight = this.toggleHighlight.bind(this)
  this.toggleResume = this.toggleResume.bind(this)
}
  toggleHighlight () {
    this.setState({clicked: !this.state.clicked});
  }
  toggleResume () {
    this.setState({clicked2: !this.state.clicked2});
  }
  render() {
    return (
      <div className="App">
        
          
          
        <About clicked={this.state.clicked} clicked2={this.state.clicked2}/>
        <Container toggleHighlight={this.toggleHighlight} toggleResume={this.toggleResume} clicked={this.state.clicked} clicked2={this.state.clicked2}/>
        
      </div>
    );
  }
}

export default App;
