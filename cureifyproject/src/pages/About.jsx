import React, { Component } from 'react';
import "./About.css"
import Navbar from '../components/Navbar';
import about from "../assets/aboutbg.svg";
import video from "../assets/video.mp4";


const About = () => {
    return ( <>
      <div className='center'>

        <Navbar />
        </div>


        {/* <div className='aboutdiv'>
            <video src={video} autoPlay loop></video>
              <div className='about-left'>
                    <h1 className='about-title'>About Cureify</h1>
                    <p className='about-des'>
                        Managing medication shouldn't feel overwhelming. Between handwritten prescriptions, 
                        missed reminders, unavailable medicines, and confusing blood test results — staying 
                        consistent becomes harder than it should be. In Egypt, many families still rely on 
                        memory, paper notes, or scattered WhatsApp photos to track important treatments. 
                        And when life gets busy, health is often the first thing that slips. Keep it emotional. 
                        Not feature-heavy.
                    </p>
                </div>

                    <img src={about} alt="Cureify app on phone" className='about-phone' />
        </div> */}
    
    
     <div className='aboutdiv'>
              
                <video 
                    className='about-video' 
                    autoPlay 
                    muted 
                    loop 
                  
                >
                    <source src={video} type="video/mp4" />
                </video>

               
                <div className='about-overlay' />

                <div className='about-left'>
                    <h1 className='about-title'>About Cureify</h1>
                    <p className='about-des'>
                        Managing medication shouldn't feel overwhelming. Between handwritten prescriptions, 
                        missed reminders, unavailable medicines, and confusing blood test results — staying 
                        consistent becomes harder than it should be. In Egypt, many families still rely on 
                        memory, paper notes, or scattered WhatsApp photos to track important treatments. 
                        And when life gets busy, health is often the first thing that slips. Keep it emotional. 
                        Not feature-heavy.
                    </p>
                </div>

                <div className='about-right'>
                    <img src={about} alt="Cureify app on phone" className='about-phone' />
                </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </> );
}
 
export default About;