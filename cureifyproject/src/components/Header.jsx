import React, { Component } from 'react';
import "./Header.css";
import cureifytext from "../assets/CUREIFY.svg" ;
import img1 from "../assets/leftimg.png" ;
import img2 from "../assets/centerimg.svg" ;
import img3 from "../assets/rightimg.png" ;
import FilledButton from './FilledButton';
import StrokeButton from './StrokeButton';


const Header = () => {
    return ( 
        <>
        <div className='header'>
            {/* <img src={homebg} alt="blue background" /> */}
            <img src={cureifytext} alt="cureify text" className='textc'/>
            <div className='forpg'>
                <div className='forimages'>
                    <img src={img1} alt="doctor holding phone" className='pa pleft'/>
                                        <img src={img2} alt="doctor holding a glass" className='centerimg'/>
                                                                                <img src={img3} alt="phone app" className='pa pright'/>


                </div>
                <div className='blur'></div>
                <div className='forherotexts'>
                    <p className='heroText'>All Your Medications. One Simple App.</p>
                    <p className='heroSubtext'>Smart reminders, organized schedules, and peace of mind — right in your pocket.</p>
                    <div className='for2buttons'>
                        <FilledButton btext="Explore Features"/>
                        <StrokeButton stroketext="  Download Now" />
                    </div>
                </div>
            </div>

        </div>
        
        
        
        </>
     );
}
 
export default Header;