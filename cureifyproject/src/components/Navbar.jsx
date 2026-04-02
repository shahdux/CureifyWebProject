import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Navlink from './Navlink';
import FilledButton from './FilledButton';
import smalllogo from "../assets/smalllogo.svg";


const Navbar = () => {
    return ( 
        <>
        <div className='nav'>
<img src={smalllogo} alt="" />
            <div className='forlinks'>
                <Link to="/features" style={{ textDecoration: "none" }} >
                <Navlink linkname="Features"/>
                </Link>
                <Navlink linkname="Blogs"/>
                <Navlink linkname="About"/>
                <Navlink linkname="Careers"/>
                                <Navlink linkname="Contact"/>
                                                                <Navlink linkname="Policies"/>
                                                                  <Navlink linkname="Download Now" color="#00A4AA" fontWeight="600" />


<div className='langbutton'>
    <p className='langb'>AR</p>
</div>
            </div>
        </div>
        
        </>
     );
}
 
export default Navbar;