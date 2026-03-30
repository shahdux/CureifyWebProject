import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import phone from "../assets/phone.svg";
import FeatureCard from '../components/FeatureCard';
import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";



const Home = () => {
    return ( 
        <>
        <div className='center'>

        <Navbar />
        <Header />
        </div>
        <Header2 sectiontitlename="About Cureify" 
        sectiontitledes="Managing medication shouldn’t feel overwhelming. Between handwritten prescriptions, missed reminders, unavailable medicines, and confusing blood test results — staying consistent becomes harder than it should be. In Egypt, many families still rely on memory, paper notes, or scattered WhatsApp photos to track important treatments. And when life gets busy, health is often the first thing that slips. Keep it emotional. Not feature-heavy." 
        pimage={phone}/>
        <div className='featuresSection'>
            <p className='titles'>It’s the simplicity of staying on track. It’s your health, handled using…</p>
            <div className='forfeatures'>
                
<FeatureCard fimg={f1} fname="AI Prescription Scanner" fdes="Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo,  automatically populating 
your cart and schedule with 100% accuracy."/>
<FeatureCard fimg={f2} fname="Adherence Rewards" fdes="Unlike other platforms that only reward purchases, we reward consistency. Earn points for taking your medicine on time and staying on track with your treatment."/>
<FeatureCard fimg={f3} fname="Real-Time Stock Accuracy" fdes="No more surprise cancellations. Our direct integration with a verified network of pharmacies ensures what you see is actually on the shelf."/>
<FeatureCard fimg={f4} fname="Blood Test Records" fdes="Stop guessing about your health. Easily upload and compare your blood test results over time to visualize trends and track how your body is responding to treatment."/>


        
        


                
                

                 
         
                
         
              
            </div>
        </div>
             

        </>
     );
}
 
export default Home;