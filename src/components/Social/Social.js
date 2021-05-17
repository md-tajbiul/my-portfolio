import { faFacebookF, faGithub, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Social.css';

const Social = () => {
    return (
        <div>
            <div className="icon-bar">
            <ul className="socialUl">
                <a href="https://www.facebook.com/tajbiul.fb" target="_blank" rel="noreferrer">
                  <li>
                    <FontAwesomeIcon className="headerIcon" icon={faFacebookF} />
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/md-tajbiul" target="_blank" rel="noreferrer">
                  <li>
                    <FontAwesomeIcon className="headerIcon" icon={faLinkedinIn} />
                  </li>
                </a>
                <a href="https://github.com/md-tajbiul" target="_blank" rel="noreferrer">
                  <li>
                    <FontAwesomeIcon className="headerIcon" icon={faGithub} />
                  </li>
                </a>
                <a href="https://stackoverflow.com/users/15770076/md-tajbiul" target="_blank" rel="noreferrer">
                  <li>
                    <FontAwesomeIcon className="headerIcon" icon={faStackOverflow} />
                  </li>
                </a>
                <a href="https://tajbiul.medium.com" target="_blank" rel="noreferrer">
                  <li>
                    <FontAwesomeIcon className="headerIcon" icon={faMediumM} />
                  </li>
                </a>
            </ul>
            </div>
        </div>
    );
};

export default Social;