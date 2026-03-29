import React, { Component } from 'react';
import "./Header2.css"
import FilledButton from './FilledButton';
const Header2 = (props) => {
    return ( <>
    
    <div className='pgwithimg'>
        <div className='forpgsection'>
            <p className='sectionTitle'>{props.sectiontitlename}</p>
             <p className='sectionDes'>{props.sectiontitledes}</p>
             <FilledButton btext="Learn More"/>
        </div>
        <div className='for2images'>
            <img className='imgclass' src={props.pimage} alt="" />
        </div>
    </div>
    
    
    </> );
}
 
export default Header2;