import React, { Component } from 'react';
import "./Header2.css"
import FilledButton from './FilledButton';
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import { Link } from 'react-router-dom';


const Header2 = (props) => {
    return ( <>
    
    <div className='pgwithimg'>
        <div className='forpgsection'>
            <p className='sectionTitle'>{props.sectiontitlename}</p>
             <p className='sectionDes'>{props.sectiontitledes}</p>
                                                             <Link  to="/about" style={{ textDecoration: "none" }} >
             <FilledButton btext="Learn More"/>
                                                             </Link>

        </div>
        {/* <div className='for2images'>
            <img className='imgclass' src={props.pimage} alt="" />
        </div> */}
        <div className='for2images'>
                {/* The main background image */}
                <img className='imgclass' src={props.pimage} alt="Medication display" />

                {/* Floating Badges */}
                <div className="floating-badge badge-top-left">
                   <img src={icon1} alt="" />
                    <span>Medicine Finder</span>
                </div>
                <div className="floating-badge badge-top-right">
                                       <img src={icon2} alt="" />

                    <span>One App</span>
                </div>
                <div className="floating-badge badge-bottom-left">
                                       <img src={icon3} alt="" />

                    <span>Medicine Tracking</span>
                </div>
                <div className="floating-badge badge-bottom-right">
                                       <img src={icon4} alt="" />

                    <span>Discounts</span>
                </div>
            </div>
    </div>
    
    
    </> );
}
 
export default Header2;