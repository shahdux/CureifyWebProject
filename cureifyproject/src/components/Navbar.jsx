import React, { Component } from 'react';
import "./Navbar.css";
import Navlink from './Navlink';
const Navbar = () => {
    return ( 
        <>
        <div className='nav'>
            <div className='forlinks'>
                <Navlink linkname="Features"/>
                <Navlink linkname="Blogs"/>
                <Navlink linkname="About"/>
                <Navlink linkname="Careers"/>
                                <Navlink linkname="Contact"/>
                                                                <Navlink linkname="Policies"/>


            </div>
        </div>
        
        </>
     );
}
 
export default Navbar;