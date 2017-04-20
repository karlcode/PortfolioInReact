import React, { Component } from 'react';
import '../styles/Projects.css';
import map from '../assets/map.jpg'
import extension from '../assets/extension.jpg'
import datasci from '../assets/datasci.jpg'
import gamer from '../assets/gamer.jpg'
import law from '../assets/law.jpg'
import construction from '../assets/construction.jpg'
import syanni from '../assets/syanni.jpg'
import store from '../assets/store.jpg'

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="project-box">
          <a href="http://karlcode.github.io/Near/" target="_blank">
          <div className="project-blurb">
              <h1>Near</h1>
              <p>Google Maps API project</p>
               <p>Made with React.js</p>
               </div>
           <div className="project-content">
             
            <img src={map}  alt="logo" />
            
          </div>
          </a>
        </div>
         <div className="project-box">
          <a href="http://chrome.google.com/webstore/detail/simple-job-tracker/mafgfloakbfldlimcidokodmdfbjebih" target="_blank">
          <div className="project-blurb">
              <h1>Simple Job Tracker</h1>
              <p>Google Chrome Extension</p>
              <p>Made with pure Javascript</p>
               </div>
           <div className="project-content">
             
            <img src={extension}  alt="logo" />
            
          </div>
          </a>
        </div>
        <div className="project-box">
          <div className="project-blurb">
              <h1>Loaft</h1>
              <p>Jewellery E-commerce</p>
              <p>Built with Shopify</p>
             
               </div>
           <div className="project-content">
             
            <img src={store}  alt="logo" />
            
          </div>
        </div>
        <div className="project-box">
          <div className="project-blurb">
              <h1>Sentosa</h1>
              <p>Logotype</p>
              <p>Adobe Illustrator</p>
             
               </div>
           <div className="project-content">
             
            <img src={syanni}  alt="logo" />
            
          </div>
        </div>
        <div className="project-box">
          <div className="project-blurb">
              <h1>Gamerholic</h1>
              <p>Branding and logotype</p>
              <p>Adobe Illustrator</p>
             
               </div>
           <div className="project-content">
             
            <img src={gamer}  alt="logo" />
            
          </div>
        </div>
        <div className="project-box">
          <div className="project-blurb">
              <h1>Paramount Law Group</h1>
                <p>Logotype</p>
              <p>Adobe Illustrator</p>
               </div>
           <div className="project-content">
             
            <img src={law}  alt="logo" />
            
          </div>
        </div>
        <div className="project-box">
         
          <div className="project-blurb">
                <h1>UNSW Data Science Society</h1>
                <p>Logotype</p>
              <p>Adobe Illustrator</p>
               </div>
           <div className="project-content">
             
            <img src={datasci}  alt="logo" />
            
          </div>
        
        </div>
        <div className="project-box">
          <div className="project-blurb">
              <h1>Almega Construction</h1>
              <p>Logotype</p>
               <p>Adobe Illustrator</p>
            
               </div>
           <div className="project-content">
             
            <img src={construction}  alt="logo" />
            
          </div>
        </div>
        
        
        
       
      </div>
    );
  }
}

export default Projects;