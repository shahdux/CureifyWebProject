import React, { Component } from 'react';
import "./DownloadApp.css";
import bigphone from "../assets/bphone.svg";
const DownloadApp = () => {
    return ( 
        <>
        <div className='downloadSection'>
<img src={bigphone} alt="phone mockup" className='imgpa'/>
<div className='downloadsecpg'>
    <p className='downloadTitle'>Simplify Your Medication Management & Download Now</p>
     <p className='downloadDes'>Stay on top of your medicone. Manage your health anytime, anywhere.</p>
     <div className='for2buttons'></div>
</div>

        </div>
        
        
        
        </>
     );
}
 
export default DownloadApp;