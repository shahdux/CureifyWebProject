import React, { Component } from 'react';
import whitea from "../assets/whitearrow.svg";
import "./HorizontalFeatureCard.css"

const HorizontalFeatureCard = (props) => {
    return ( 
        <>
        
        <div className='fcard2'>
            <img src={props.feat1img} alt="person holding a phone" className='fimages' />
            <div className='featpg'>

            <div className='feattitle'>{props.feattitle}</div>           
             <div className='featDes'>{props.featdes}</div>
             <div className='textButton'>
                <p className='learntext'>Learn More</p>
                <img src={whitea} alt="white arrow icon" />
             </div>
            </div>


        </div>
        
        
        
        </>
     );
}
 
export default HorizontalFeatureCard;