import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog" id="blog">
            <div className="container">
            <div className="common">
                <h1 className="mainHeader">Blog</h1>
                <p className="mainContent">I describe myself as a passionate developer who loves coding, solving problems and team worker.</p>
                <div className="commonBorder"></div>
            </div>
            
            <div className="blogBox">
                <div className="bBox">
                    <a href="/"><img src="https://miro.medium.com/max/700/0*wueohBheYq-ekUeC" alt="img" className="bBox-image"/>
                  <div className="bBox-header">10 Things You Must Know About JavaScript Array Methods</div>
                  <div className="bBox-p">JavaScript Array is a global object that is used in the construction of arrays like objects. Array is a global object that is construction of arrays like global object...</div></a>
                </div>
                <div className="bBox">
                <a href="/"><img src="https://miro.medium.com/max/700/0*QX8CRBwvnFUKqNDP" alt="img" className="bBox-image"/>
                  <div className="bBox-header">Everything You Have To Know About JavaScript ES6</div>
                  <div className="bBox-p">ES6 alludes to rendition 6 of the ECMA Script programming language. ECMA Script is the normalized name for in the construction of arrays like objects. Array is a global object...</div></a>
                </div>
                <div className="bBox">
                <a href="/"><img src="https://miro.medium.com/max/700/0*3gE_SF1QAMwMFZBU" alt="img" className="bBox-image"/>
                  <div className="bBox-header">Learn React Core Concepts In Simple Way</div>
                  <div className="bBox-p">React is an open-source, front-end, JavaScript library for building user interfaces or UI components. It is maintained by normalized name for in the construction of arrays...</div></a>
                </div>
            </div>
            <div className="headerButton text-center mt-4">
                <a target="_blank" href="https://tajbiul.medium.com" className="btn btn-outline" rel="noreferrer">
                  More Blog
                </a>
            </div>
            </div>
        </div>
    );
};

export default Blog;