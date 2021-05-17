import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typical from 'react-typical';
import myPic from "../../Assets/myImg.png";
import './Banner.css';

const Banner = () => {
  
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="headerContent">
              <div className="headerSection">
                <h3>Hey There,</h3>
                <h1>I'm Md. Tajbiul</h1>
                <p>
                <Typical
                    steps={['Front-End Developer ', 2000, 'JavaScript Miner ', 2000, 'MERN Stack Developer ', 2000]}
                    loop={Infinity}
                    wrapper="b"
                    />
                </p>
                <div className="headerButton">
                  <a href="https://drive.google.com/uc?export=download&id=1z2KCKbbTGV8BnnzvOZyUka7miLWpwY0s" className="btn btn-outline">
                  Resume &nbsp; <FontAwesomeIcon icon={faDownload} /> 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="bannerImg">
              <img className="w-100" src={myPic} alt="myself" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
