import React, { Component } from 'react';
import '../styles/About.css';
import me from '../assets/me.jpg'
class About extends Component {
  render() {
    var content;
    if (this.props.clicked){
      content =   <div><h1>
                  Projects
                  </h1></div>
    }else if (this.props.clicked2){
      content =   <div><h1>
                  Resume
                  </h1></div>
    }else {
      content =   <div>
                  <h1 href="http://google.com">
                  Karl Li
                  </h1>
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
        <img src={me}  alt="logo" />
        <article className="blurb">
          {content}
        </article>
        </div>
      </div>
    );
  }
}

export default About;