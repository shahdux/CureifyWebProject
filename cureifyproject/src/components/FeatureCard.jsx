import React, { Component } from 'react';
import "./FeatureCard.css"
const FeatureCard = (props) => {
    return ( 
        <>
        <div className='fcard'>
            <img src={props.fimg} alt="feature icon" />
            <p className='featureName'>{props.fname}</p>
                        <p className='featureDes'>{props.fdes}</p>


        </div>
        
        
        
        </>
     );
}
 
export default FeatureCard;