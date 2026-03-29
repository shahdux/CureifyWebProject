import React, { Component } from 'react';
import arrow from "../assets/whitearrow.svg";

import "./FilledButton.css"
const FilledButton = (props) => {
    return ( 
        <>
        <div className='filledButton'>
            <p className='buttontext'>{props.btext}</p>
            <img src={arrow} alt="logo" />

        </div>
        
        
        </>
     );
}
 
export default FilledButton;