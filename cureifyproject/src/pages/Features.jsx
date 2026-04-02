import React, { Component } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
import feat1 from "../assets/e1.svg";
import feat2 from "../assets/mob2.svg";
import feat3 from "../assets/mob32.png";
import feat4 from "../assets/mob4.svg";
import feat5 from "../assets/p52.svg";
import feat6 from "../assets/mob7.svg";



import HorizontalFeatureCard from '../components/HorizontalFeatureCard';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
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
      {/* <div className='for fcards'>
        <p className='titles grey w400px'>Cureify combines intelligent technology with thoughtful design to simplify how you manage medications, track your health, and find what you need — all in one seamless experience.</p>
        <div className='forcardsd'>
          <HorizontalFeatureCard feat1img={feat1}
          feattitle="AI-Powered Prescription Scanner"
          featdes="Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy."
          />
 <HorizontalFeatureCard feat1img={feat1}
          feattitle="AI-Powered Prescription Scanner"
          featdes="Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy."
          />
          <HorizontalFeatureCard feat1img={feat1}
          feattitle="AI-Powered Prescription Scanner"
          featdes="Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy."
          />
        </div>
      


      </div> */}

       <div className='for fcards'>
        <p className='titles grey w400px'>Cureify simplifies medication management, health tracking, and more — all in one seamless, intuitive and reliable experience.</p>
        <div className='forcardsd'>
          
  <HorizontalFeatureCard 
    feat1img={feat1}
    bgColor="linear-gradient(180deg, #145EB0 0%, #08284A 100%)"
    feattitle="AI-Powered Prescription Scanner"
    featdes="Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy."
    stickyTop="100px" 
    style={{ transform: 'scale(1)', zIndex: 1 }}
  />

  {/* CARD 2 */}
  <HorizontalFeatureCard 
    feat1img={feat2}
    bgColor="linear-gradient(180deg, #03A0A9 0%, #013F43 100%)"
    feattitle="Adherence Rewards"
    featdes="Unlike other platforms that only reward purchases, we reward consistency. Earn points for taking your medicine on time and staying on track with your treatment."
    stickyTop="140px" 
    style={{ transform: 'scale(1.02)', zIndex: 2 }}
  />

  {/* CARD 3 */}
  <HorizontalFeatureCard 
    feat1img={feat3}
    bgColor="linear-gradient(180deg, #243E40 0%, #243E40 100%)"
    feattitle="Real-Time Stock Accuracy"
    featdes="No more surprise cancellations. Our direct integration with a verified network of pharmacies ensures what you see is actually on the shelf."
    stickyTop="180px" 
    style={{ transform: 'scale(1.04)', zIndex: 3 }}
  />

  {/* CARD 4 */}
  <HorizontalFeatureCard 
    feat1img={feat4}
    bgColor="linear-gradient(180deg, #0094B3 0%, #003F4D 100%)"
    feattitle="Blood Test Analyzer"
    featdes="Upload your blood test results and get a plain-language breakdown instantly. Understand your health without needing a medical degree."
    stickyTop="220px" 
    style={{ transform: 'scale(1.06)', zIndex: 4 }}
  />

  {/* CARD 5 */}
  <HorizontalFeatureCard 
    feat1img={feat5}
    bgColor="linear-gradient(180deg, #072043 0%, #00337D 100%)"
    feattitle="Augmented Reality Medicine Guide"
    featdes="Scan your medicine box and instantly view clear, enlarged instructions and essential details — designed especially for elderly users or anyone who needs better visibility."
    stickyTop="260px" 
    style={{ transform: 'scale(1.08)', zIndex: 5 }}
  />

  {/* CARD 6 */}
  <HorizontalFeatureCard 
    feat1img={feat6}
    bgColor="linear-gradient(180deg, #091D60 0%, #395FAB 100%)"
    feattitle="Smart Medication Reminders"
    featdes="Tracks the full duration of each prescribed treatment and notifies users when it’s time to stop taking the medication. This helps prevent accidental overuse and reduces resistance."
    stickyTop="300px" 
    style={{ transform: 'scale(1.10)', zIndex: 6 }}
  />
        </div>
      


      </div>


  <DownloadApp />
                
                <Footer />
     
        </>
     );
}
 
export default Features;
