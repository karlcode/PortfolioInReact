import React, { Component } from 'react';
import '../styles/Container.css';
import Projects from './Projects.js'
import Resume from './Resume.js'
import backarrow from '../assets/back.ico'
import resicon from '../assets/resicon.jpg'
import projicon    from '../assets/projicon.jpg'
class Container extends Component {


  render() {
    var styles,styles1,styles2,styles3,back;
    if (this.props.clicked){
        styles = {height: '100%', transform: 'scale(0.9)'};
        styles2 = {width: '0' };
        styles3 = {display: 'none' };
          back= <img onClick={this.props.toggleHighlight} alt="back" className="back-button" src={backarrow} aria-hidden="true"/>
    }
    else if(this.props.clicked2){
        styles = {width: '0',};
        styles1 = {display: 'none'};
        styles2 = {height: '100%', transform: 'scale(0.9)' };
        back= <img onClick={this.props.toggleResume} alt="back" className="back-button" src={backarrow} aria-hidden="true"/>
    }
    else {console.log('Thanks for visiting :)')}
    return (
      <div className="container" >
          <div>{back}</div>
        <div onClick={this.props.toggleHighlight} className="container-box" style={styles}>
            <article className="container-title" style={styles1}>
                {this.props.clicked ? 
                <Projects/> 
                : 
             
                <div className="panel-title">
                <img src={projicon}  alt="logo" />
                <h1 >Projects </h1>
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
                <img src={resicon}  alt="logo" />    
                 <h1 >Resume </h1>
                </div>
                }
             </article>

        </div>
        
        
 
      </div>
    );
  }
}

export default Container;