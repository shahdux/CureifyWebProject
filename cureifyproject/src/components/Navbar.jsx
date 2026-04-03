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
                <Link to="/features" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Features"/>
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Blogs"/>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                    <Navlink linkname="About"/>
                </Link>
                <Link to="/careers" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Careers"/>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Contact"/>
                </Link>
                <Link to="/policies" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Policies"/>
                </Link>
                <Link to="/download" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Download Now" color="#00A4AA" fontWeight="600" />
                </Link>
            </div>
          
{/* <div className='langbutton'>
    <p className='langb'>AR</p>
</div> */}
        </div>
        
        </>
     );
}
 
export default Navbar;