import React, { Component } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
import feat1 from "../assets/f4.png";

import HorizontalFeatureCard from '../components/HorizontalFeatureCard';
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
      <div className='for fcards'>
        <p className='titles grey w400px'>Cureify combines intelligent technology with thoughtful design to simplify how you manage medications, track your health, and find what you need — all in one seamless experience.</p>
        <div className='forcardsd'>
          <HorizontalFeatureCard feat1img={feat1}
          feattitle="AI-Powered Prescription Scanner"
          featdes="Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy."
          />

        </div>
      </div>
        </>
     );
}
 
export default Features;
