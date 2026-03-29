import React, { Component } from 'react';
import "./Navbar.css";
import Navlink from './Navlink';
const Navbar = () => {
    return ( 
        <>
        <div className='nav'>
            <div className='forlinks'>
                <Navlink linkname="Features"/>
            </div>
        </div>
        
        </>
     );
}
 
export default Navbar;