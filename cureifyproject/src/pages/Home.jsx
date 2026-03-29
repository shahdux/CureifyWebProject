import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import phone from "../assets/phone.svg";
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
        
        
        </>
     );
}
 
export default Home;