

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Navlink from './Navlink';
import smalllogo from "../assets/smalllogo.svg";
import menuicon from "../assets/menuicon.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <>
        <div className='nav'>
                            <Link to="/" style={{ textDecoration: "none" }}>

            <img src={smalllogo} alt="logo" /></Link>
            
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

            <div className='nav-hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuicon} alt="menu" className='nav-menu-icon' />
            </div>
        </div>

        {menuOpen && (
            <div className='nav-mobile-menu'>
                <Link to="/features" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Features"/>
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Blogs"/>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="About"/>
                </Link>
                <Link to="/careers" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Careers"/>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Contact"/>
                </Link>
                <Link to="/policies" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Policies"/>
                </Link>
                <Link to="/download" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Download Now" color="#00A4AA" fontWeight="600" />
                </Link>
            </div>
        )}
        </>
     );
}
 
export default Navbar;