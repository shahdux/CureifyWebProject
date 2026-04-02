import React, { Component } from 'react';
import "./About.css"
import Navbar from '../components/Navbar';
import about from "../assets/aboutbg.svg";
import micon from "../assets/micon.svg";
import vision from "../assets/visionimg.svg";

import video from "../assets/video.mp4";
import ValueCard from '../components/ValueCard';


import wclock from "../assets/wclock.svg";
import health from "../assets/health.svg";
import gift2 from "../assets/gift.svg";
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
const About = () => {
    return ( <>
      <div className='center'>

        <Navbar />
        </div>


    
    
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
    
    <div className='centereddiv missionbgimg'>
        <img src={micon} alt="vision icon" />
                    <h2 className='mission-title'>Our Mission</h2>
                    <p className='mission-des'>
                        "To create a world where managing medication is effortless, accessible, and 
                        empowering—enabling every person to take control of their health with 
                        confidence and clarity."
                    </p>
    </div>
    
    
    
      <div className='aboutdiv vission'>
              
              

               
                <div className='about-overlay' />

                <div className='about-left ml'>
                    <h1 className='about-title'>Our Vision</h1>
                    <p className='about-des widthauto'>
                       “To create a world where managing medication is effortless, accessible, and empowering—enabling every person to take control of their  health with confidence and clarity.”
                    </p>
                </div>

                <div className='about-right'>
                    <img src={vision} alt="robotic hand" className='about-phone' />
                </div>
    </div>
     <div className='pgwithimg2 forvaluesbg'>
        <div className='titlewdes2'>
            <p className='grey'>Our Values</p>
            <p className='valuedess'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
        </div>
    
        <div className='htwcards'>
           <ValueCard
    bgColor="linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)"
    icon={wclock}
    title="Never Miss a Dose"
    des="Get started in minutes with your existing system."
/>
<ValueCard
    bgColor="linear-gradient(135deg, #4a5568 0%, #2d3748 100%)"
    icon={health}
    title="Save Time & Effort"
    des="No more manual searches or calls to pharmacies. Everything you need is organized and ready with a single tap."
/>
<ValueCard
    bgColor="linear-gradient(135deg, #1a3a6e 0%, #0d2347 100%)"
    icon={gift2}
    title="Reward Your Commitment"
    des="Your consistency matters. Earn points and perks simply by staying on track with your health."
/>
        </div>
    </div>
      <DownloadApp />
                
                <Footer />
    
    
    
    
    
    
    </> );
}
 
export default About;