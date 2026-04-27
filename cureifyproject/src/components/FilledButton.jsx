import React, { Component } from 'react';
import arrow from "../assets/whitearrow.svg";

import "./FilledButton.css"
import { useLang } from '../context/LanguageContext';
const FilledButton = (props) => {
        const { isArabic } = useLang(); 
    
    return ( 
        <>
        <div className='filledButton' onClick={props.onClick}>
            <p className='buttontext'>{props.btext}</p>
            <img src={arrow} alt="logo" style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }}/>

        </div>
        
        
        </>
     );
}
 
export default FilledButton;