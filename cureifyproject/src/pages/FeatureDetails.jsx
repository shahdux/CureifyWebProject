import React, { Component } from 'react';
import "./FeatureDetails.css"
import Navbar from '../components/Navbar';

import f1d from "../assets/details1.svg";

import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
import FilledButton from '../components/FilledButton';
import StepCard from '../components/StepCard';
import cameraicon from "../assets/camicon.svg";
import aiicon from "../assets/fast.svg";
import verifyicon from "../assets/check.svg";
import organizeicon from "../assets/organize.svg";

import greenclock from "../assets/greenclock.svg";
import fast2 from "../assets/yellow.svg";
import cameraicon2 from "../assets/orangecam.svg";
import shieldicon from "../assets/shield.svg";
import BenefitCard from '../components/BenefitCard';
const About = () => {
    return ( <>
      <div className='center'>

        <Navbar />
        </div>


    
    
  
                
    
    
      <div className='aboutdiv vission'>
              
              

               
                <div className='about-overlay' />

                <div className='about-left ml'>
                    <h1 className='about-title w610'>AI-Powered
Prescription Scanner</h1>
                    <p className='about-des '>
Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy.                    </p>
<div className='martop30'>

<FilledButton btext="See how it works " />
</div>
                </div>

                <div className='about-right'>
                    <img src={f1d} alt="robotic hand" className='about-phone' />
                </div>
                                <div className='blur blur2'></div>

    </div>
    <div className='featuresSection whitebg padding120'>
 <div className='titlewdes2'>
            <p className='grey'>Why Work With Us</p>
            <p className='valuedess'>We’re building a company where people can do their best work while feeling supported and inspired.</p>
        </div>
                  
<div className='steps-section'>
    <StepCard
        icon={cameraicon}
        title="Scan a Photo"
        des="Simply take a photo of your prescription using your smartphone camera."
    />
    <div className='steps-line' />
    <StepCard
        icon={aiicon}
        title="AI Processing"
        des="Advanced AI analyzes and extracts all information in seconds."
    />
    <div className='steps-line' />
    <StepCard
        icon={verifyicon}
        title="Verify"
        des="Review extracted data with smart validation and error checking."
    />
    <div className='steps-line' />
    <StepCard
        icon={organizeicon}
        title="Organize"
        des="Your medications are automatically added to your personal library."
    />
</div>
        </div>
        <div className='featuresSection bluebgi padding180'>
<div className='titlewdes2'>
            <p className='grey white margin0'>Key Benefits</p>
            <p className='valuedess white'>Turning your prescription into a structured, ready-to-follow plan.</p>
        </div>          
        <div className='benefits-grid'>
    <BenefitCard
        icon={greenclock}
        iconBg="linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)"
        title="Saves time"
        des="What used to take minutes of manual entry now takes a single photo. Quick, effortless, and efficient — so you can focus on your health instead of administrative tasks."
    />
    <BenefitCard
        icon={fast2}
        iconBg="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
        title="Instant Accuracy"
        des="No more typing medication names manually or worrying about spelling mistakes. Every detail is captured clearly and correctly within seconds."
    />
    <BenefitCard
        icon={cameraicon2}
        iconBg="linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
        title="Smart Recognition"
        des="Works with handwritten and printed prescriptions. Even recognizes complex medical terminology."
    />
    <BenefitCard
        icon={shieldicon}
        iconBg="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
        title="Secure & Private"
        des="Your prescription data is encrypted and processed securely. We never store your personal health information."
    />
</div>
        </div>
      <DownloadApp />
                
                <Footer />
    
    
    
    
    
    
    </> );
}
 
export default About;