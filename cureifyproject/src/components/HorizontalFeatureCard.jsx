// import React, { Component } from 'react';
// import whitea from "../assets/whitearrow.svg";
// import "./HorizontalFeatureCard.css";
// import circle from "../assets/circle.svg";



// const HorizontalFeatureCard = (props) => {
//     return ( 
//         <>
        
//         <div className='fcard2' style={{ background: props.bgColor }}>
//             <img src={props.feat1img} alt="person holding a phone" className='fimages' />
//             <img src={circle} alt="circle" className='circle'/>
//             <div className='featpg'>

//             <div className='feattitle'>{props.feattitle}</div>           
//              <div className='featDes'>{props.featdes}</div>
//              <div className='textButton'>
//                 <p className='learntext'>Learn More</p>
//                 <img src={whitea} alt="white arrow icon" />
//              </div>
//             </div>


//         </div>
        
        
        
//         </>
//      );
// }
 
// export default HorizontalFeatureCard;

import whitea from "../assets/whitearrow.svg";
import "./HorizontalFeatureCard.css";
import circle from "../assets/circle.svg";
const HorizontalFeatureCard = (props) => {
    return ( 
        /* Pass the custom top offset and background color as inline styles */
        <div className='fcard2' style={{ 
            background: props.bgColor, 
            top: props.stickyTop,
            ...props.style // This spreads the transform and zIndex
        }}>
            <img src={props.feat1img} alt="feature" className='fimages' />
            <img src={circle} alt="circle" className='circle'/>
            <div className='featpg'>
                <div className='feattitle'>{props.feattitle}</div>           
                <div className='featDes'>{props.featdes}</div>
                <div className='textButton'>
                    <p className='learntext'>Learn More</p>
                    <img src={whitea} alt="arrow" />
                </div>
            </div>
        </div>
    );
}
export default HorizontalFeatureCard;