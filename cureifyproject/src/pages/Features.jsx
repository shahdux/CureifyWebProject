import React, { Component } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
const Features = () => {
    const text = "EXPLORE ALL FEATURES • ";
    
    return ( 
        <>
                <div className='center'>

        <Navbar /></div>
         <div className="featuresHero">
        <p className="fsubtitle">Your All In One</p>
<h1 className="ftitle">
  <div className="ticker-wrapper">
    <div className="ticker-items">
      <span>Medicine Tracker</span>
      <span>Medicine Stock Finder</span>
      <span>Blood Test Analyzer</span>
      {/* Repeat the first one at the end for a seamless loop */}
      <span>Medicine Tracker</span>
    </div>
  </div>
</h1>        <p className="fdescription">
          Smart reminders, organized schedules, and peace of mind — right in your pocket.
        </p>

       <div className="circular-container">
  <svg viewBox="0 0 200 200" className="circular-text">
    <defs>
      <path
        id="featurePath"
        /* Increased radius to 70 to give letters room to breathe */
        d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
        fill="transparent"
      />
    </defs>
    <text>
      <textPath
        href="#featurePath"
        className="text-content"
        /* This forces the text to stretch exactly around the circle */
        textLength="440" 
      >
        EXPLORE ALL FEATURES • EXPLORE ALL FEATURES •
      </textPath>
    </text>
  </svg>
  <div className="arrow">↓</div>
</div>
      </div>
        </>
     );
}
 
export default Features;