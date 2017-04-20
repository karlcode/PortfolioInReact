import React, { Component } from 'react';
import '../styles/About.css';
import me from '../assets/me.jpg'
import resicon from '../assets/resicon.jpg'
import projicon    from '../assets/projicon.jpg'
class About extends Component {
  render() {
    var content, style;
    style = { }
    if (this.props.clicked){
      content =   <div>
                  <img src={projicon}  alt="logo" /><h1>
                  Projects
                  </h1></div>
    }else if (this.props.clicked2){
      content =   <div>
                  <img src={resicon}  alt="logo" />
                  <h1>
                  Resume
                  </h1></div>
    }else {
      content =   <div>
                  <img className="about-image" src={me}  alt="logo" />
                  <h1 style={style }>
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
       
        <article className="blurb">
          {content}
        </article>
        </div>
      </div>
    );
  }
}

export default About;