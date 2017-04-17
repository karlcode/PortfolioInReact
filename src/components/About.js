import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="aboutWrapper">
        <img src="http://www.bostonglobe.com/rf/image_585w/Boston/2011-2020/2012/08/23/BostonGlobe.com/Ideas/Images/26word1a.jpg"  alt="logo" />
        <article className="blurb">
            <p><i>
            Karl loves building awesome teams and shipping great software.
            </i></p>
           <p>
            He loves to talk. You'll hear him around the place sharing his passion for patterns, processes and technology: Angular 2.0, .NET Core, Azure, Scrum, clean code, dependency injection, tests and continuous delivery.
            </p>
            <p>
            Karl believes communication and agility lead to success: 'fail fast', inspect, adapt, have a lot of fun.
            </p>




        </article>
        </div>
      </div>
    );
  }
}

export default About;