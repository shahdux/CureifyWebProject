import React, { Component } from 'react';
import "./StrokeButton.css";
// import greenarrow from "../assets/greenarrow.svg";

const StrokeButton = (props) => {
    return ( 
        <>
        <div className='strokeButton'>
            <p className='strokeb'>{props.stroketext}</p>
                        {/* <img src={greenarrow} alt="green arrow" /> */}
            
        </div>
        
        </>
     );
}
 
export default StrokeButton;