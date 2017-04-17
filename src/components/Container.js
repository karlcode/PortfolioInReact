import React, { Component } from 'react';
import '../styles/Container.css';


class Container extends Component {
  render() {
    return (
      <div className="container">
          
        <div className="container-box">
             <article className="container-title">
            <p>
            Projects
            </p>
          
        </article>

        </div>
         <div className="container-box">
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