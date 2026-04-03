import React, { Component } from 'react';
import "./DownloadApp.css";
import bigphone from "../assets/phone3.svg";
import apple from "../assets/apple.svg";
import play from "../assets/play.svg";

import DownloadButton from './DownloadButton';

const DownloadApp = () => {
    return ( 
        <>
        <div className='downloadSection '>
<img src={bigphone} alt="phone mockup" className='imgpa'/>
<div className='downloadsecpg'>
    <p className='downloadTitle'>Simplify Your Medication Management & Download Now</p>
     <p className='downloadDes'>Stay on top of your medicone. Manage your health anytime, anywhere.</p>
     <div className='for2buttons2'>
        <DownloadButton softwareimg={apple} downtext="Download on the" store="App Store"/>
                <DownloadButton softwareimg={play} downtext="Get it on" store="Google Play"/>

        
     </div>
</div>

        </div>
        
        
        
        </>
     );
}
 
export default DownloadApp;