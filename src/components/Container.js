import React, { Component } from 'react';
import '../styles/Container.css';
import Projects from './Projects.js'


class Container extends Component {


  render() {
    var slide = {}
    var styles = {color:'red',};
    var styles2 = {color:'red', width: '0',};
    return (
      <div className="container" style={this.props.clicked ? slide : {}}>
        <div onClick={this.props.toggleHighlight} className="container-box" style={this.props.clicked ? styles : {}}>
            <article className="container-title">
                {this.props.clicked ? 
                <Projects/> 
                : 
                <p>
                Projects
                </p>
                }
            </article>

        </div>
         <div className="container-box" style={!this.props.clicked ? {}:styles2}>
             <article className="container-title">
                <p>
                Resume
                </p> 
             </article>

        </div>
        
        
 
      </div>
    );
  }
}

export default Container;