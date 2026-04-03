

import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom"; // Added useLocation
import "./Navbar.css";
import Navlink from './Navlink';
import smalllogo from "../assets/smalllogo.svg";
import menuicon from "../assets/menuicon.svg";
import greenarrow from "../assets/greenarrow.svg";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // Hook to get current URL path

    // Helper to keep code clean and avoid repeating the Hex code
    const getActiveColor = (path) => location.pathname === path ? "#00A4AA" : "";

    return ( 
        <>
        <div className='nav'>
            <Link to="/" style={{ textDecoration: "none" }}>
                <img src={smalllogo} alt="logo" />
            </Link>
            
            <div className='forlinks'>
                <Link to="/features" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Features" color={getActiveColor("/features")} />
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Blogs" color={getActiveColor("/blogs")} />
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                    <Navlink linkname="About" color={getActiveColor("/about")} />
                </Link>
                <Link to="/careers" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Careers" color={getActiveColor("/careers")} />
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Contact" color={getActiveColor("/contact")} />
                </Link>
                <Link to="/policies" style={{ textDecoration: "none" }}>
                    <Navlink linkname="Policies" color={getActiveColor("/policies")} />
                </Link>
                <Link to="/download" style={{ textDecoration: "none" }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Navlink 
            linkname="Download Now" 
            color="#00A4AA" 
            fontWeight="600" 
        />
        <img src={greenarrow} alt="green arrow" />
    </div>
                </Link>
            </div>

            <div className='nav-hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuicon} alt="menu" className='nav-menu-icon' />
            </div>
        </div>

        {/* Mobile Menu - Apply the same logic here */}
        {menuOpen && (
            <div className='nav-mobile-menu'>
                <Link to="/features" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Features" color={getActiveColor("/features")} />
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Blogs" color={getActiveColor("/blogs")} />
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="About" color={getActiveColor("/about")} />
                </Link>
                <Link to="/careers" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Careers" color={getActiveColor("/careers")} />
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Contact" color={getActiveColor("/contact")} />
                </Link>
                <Link to="/policies" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname="Policies" color={getActiveColor("/policies")} />
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