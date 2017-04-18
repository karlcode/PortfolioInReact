import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  render() {
    var content;
    if (this.props.clicked){
      content =   <div><p>
                  Projects
                  </p></div>
    }else if (this.props.clicked2){
      content =   <div><p>
                  Resume
                  </p></div>
    }else {
      content =   <div>
                  <p>
                  Aspiring product manager/ software engineer
                  </p>
                  <p>
                  Sydney, AU
                  </p>
                  <p>
                  UNSW Graduate
                  </p>
              </div>
    }
    return (
      <div className="about">
        <div className="aboutWrapper">
        <img src="http://www.bostonglobe.com/rf/image_585w/Boston/2011-2020/2012/08/23/BostonGlobe.com/Ideas/Images/26word1a.jpg"  alt="logo" />
        <article className="blurb">
          {content}
        </article>
        </div>
      </div>
    );
  }
}

export default About;