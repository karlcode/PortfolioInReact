import React, { Component } from 'react';
import './styles/App.css';
import About from './components/About.js'
import Container from './components/Container.js'

class App extends Component {
  constructor() {
  super();
  this.state = {loading: true, clicked: false, clicked2: false}
  this.toggleHighlight = this.toggleHighlight.bind(this)
  this.toggleResume = this.toggleResume.bind(this)
}
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000); 
  }
  toggleHighlight () {
    this.setState({clicked: !this.state.clicked});
  }
  toggleResume () {
    this.setState({clicked2: !this.state.clicked2});
  }
  render() {
    const { loading } = this.state;
    if(loading) {
      return null; // render null when app is not ready
    }
    return (
      <div className="App">
        
          
          
        <About clicked={this.state.clicked} clicked2={this.state.clicked2}/>
        <Container toggleHighlight={this.toggleHighlight} toggleResume={this.toggleResume} clicked={this.state.clicked} clicked2={this.state.clicked2}/>
        
      </div>
    );
  }
}

export default App;
