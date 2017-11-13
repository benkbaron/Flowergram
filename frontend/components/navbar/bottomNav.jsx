import React from 'react';

const bottomNav = () => (
  <ul className="bottom-nav">
    <div className="bottom-nav-section" className="bottom-nav-section-left">
      <li><a target="_blank" href="https://www.linkedin.com/in/ben-baron-015381118"><img className="bottom-nav-links" src={`${window.images.linkedinIcon}`}/></a></li>
      <li><a target="_blank" href="https://github.com/benkbaron"><img className="bottom-nav-links" src={`${window.images.githubIcon}`}/></a></li>
    </div>
    <div className="bottom-nav-section">
      <li><a className="bottom-nav-links" target="_blank" href="http://benbaron.info">CREATED BY BEN BARON</a></li>
    </div>
  </ul>
);

export default bottomNav;
