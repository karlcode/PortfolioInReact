import React, { Component } from 'react';
import '../styles/Container.css';
import Projects from './Projects.js'
import Resume from './Resume.js'
import logo from '../assets/logo.svg'
class Container extends Component {


  render() {
    var styles,styles1,styles2,styles3;
    if (this.props.clicked){
        styles = {height: '100%'};
        styles2 = {width: '0' };
        styles3 = {display: 'none' };
    }
    else if(this.props.clicked2){
        styles = {width: '0',};
        styles1 = {display: 'none'};
        styles2 = {height: '100%' };
    }
    else {console.log('Thanks for visiting :)')}
    return (
      <div className="container" >
        <div onClick={this.props.toggleHighlight} className="container-box" style={styles}>
            <article className="container-title" style={styles1}>
                {this.props.clicked ? 
                <Projects/> 
                : 
             
                <div className="panel-title">
                <img src={logo}  alt="logo" />
                <p >Projects </p>
                </div>
        
                }
            </article>

        </div>
        
         <div onClick={this.props.toggleResume} className="container-box" style={styles2}>
             <article className="container-title"  style={styles3}>
                {this.props.clicked2 ? 
               
                 <Resume/>
                : 
                <div className="panel-title">
                <img src={logo}  alt="logo" />    
                <p >Resume </p>
                </div>
                }
             </article>

        </div>
        
        
 
      </div>
    );
  }
}

export default Container;