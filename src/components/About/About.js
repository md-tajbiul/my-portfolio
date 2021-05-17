import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import './About.css';

const About = () => {

  return (
    <div className="about" id="about">
      <div className="container">

        <div className="common">
          <h1 className="mainHeader">About Me</h1>
          <p className="mainContent">I describe myself as a passionate developer who loves coding, solving problems and team worker.</p>
          <div className="commonBorder"></div>
        </div>
        
        <div className="row">

          <div className="col-6">
            <div className="aboutInfoLeft text-right">
              <div>
                I am a coder who is 19 years old Front End Developer based in Bangladesh. I describe myself as a passionate developer who loves coding, solving problems and team worker. ❤️
              </div>
              <br/>
              <div>
              Also I enjoy writing technical things at my <a href="https://tajbiul.medium.com" target="_blank" rel="noreferrer" style={{color:"#ff4a57"}}>blog</a>. ✍️
              </div>
              <br/>
              <div>
              In my free time you can find me at the Basketball Court 🏀, at the beach 🏖 or on tech meetups and conferences around the world. 🌍
              </div>
            </div>
          </div>

          <div className="col-6">
          <div className="aboutInfoRight">
              <div>
                I am a coder who is 19 years old Front End Developer based in Bangladesh. I describe myself as a passionate developer who loves coding, solving problems and team worker. ❤️
              </div>
              <br/>
              <div>
              Also I enjoy writing technical things at my <a href="https://tajbiul.medium.com/">blog</a>. ✍️
              </div>
              <div>
              In my free time you can find me at the Basketball Court 🏀, at the beach 🏖 or on tech meetups and conferences around the world. 🌍 And I know who I am.
              </div>
            </div>
          </div>

          <div className="row mt-5 text-white">
              <div className="col-6">
              <div className="aboutInfoBottomLeft text-right">
              <div>
                I am a coder who is 19 years old Front End Developer based in Bangladesh. I describe myself as a passionate developer who loves coding, solving problems and team worker. ❤️ I am a coder who is 19 years old Front End Developer based in Bangladesh.
              </div>
              <br/>
              <div>
              In my free time you can find me at the Basketball Court 🏀, at the beach 🏖 or on tech meetups and conferences around the world. 🌍 In my free time you can find me at the Basketball Court. In my free time you can find me at the Basketball Court
              </div>
            </div>
              </div>
              <div className="col-6">
                <div className="row mb-1 skillBar">
                <h6 className="col-md-2">React</h6>
                <ProgressBar completed={95} bgColor="#ff4a57" borderRadius="0" className="col-md-10"/>
                </div>
                <div className="row mb-1 skillBar">
                <h6 className="col-md-2">JavaScript</h6>
                <ProgressBar completed={90} bgColor="#ff4a57" borderRadius="0" className="col-md-10"/>
                </div>
                <div className="row mb-1 skillBar">
                <h6 className="col-md-2">Node</h6>
                <ProgressBar completed={75} bgColor="#ff4a57" borderRadius="0" className="col-md-10"/>
                </div>
                <div className="row mb-1 skillBar">
                <h6 className="col-md-2">MongoDB</h6>
                <ProgressBar completed={85} bgColor="#ff4a57" borderRadius="0" className="col-md-10"/>
                </div>
                <div className="row mb-1 skillBar">
                <h6 className="col-md-2">Express</h6>
                <ProgressBar completed={80} bgColor="#ff4a57" borderRadius="0" className="col-md-10"/>
                </div>
                <div className="row mb-1 skillBar">
                <h6 className="col-md-2">HTML5</h6>
                <ProgressBar completed={100} bgColor="#ff4a57" borderRadius="0" className="col-md-10"/>
                </div>
                <div className="row mb-1 skillBar">
                <h6 className="col-md-2">CSS3</h6>
                <ProgressBar completed={98} bgColor="#ff4a57" borderRadius="0" className="col-md-10"/>
                </div>
                <div className="row mb-1 skillBar">
                <h6 className="col-md-2">Bootstrap</h6>
                <ProgressBar completed={95} bgColor="#ff4a57" borderRadius="0" className="col-md-10"/>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
