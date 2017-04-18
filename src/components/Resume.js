import React, { Component } from 'react';
import sauce from '../assets/resume.jpg'
class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <img src={sauce} alt="resume"  style={{width: '90%'}} />
      </div>
    );
  }
}

export default Resume;