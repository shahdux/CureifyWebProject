import React, { Component } from 'react';
import "./DownloadButton.css"
const DownloadButton = (props) => {
    return ( <>
    <div className='downloadb'>
        <img src={props.softwareimg} alt="logo" />
        <div className='downtextwdes'>
            <p className='downtext'>{props.downtext}</p>
              <p className='storename'>{props.store}</p>
        </div>
    </div>
    
    
    
    
    
    </> );
}
 
export default DownloadButton;