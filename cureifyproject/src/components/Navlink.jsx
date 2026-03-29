import React, { Component } from 'react';
import "./Navlink.css";
const Navlink = (props) => {
    return ( 
        <>
          <p  className="navLink"
  style={{
    color: props.color,
    fontWeight: props.fontWeight
  }}
>
  {props.linkname}</p>
        
        
        
        </>
     );
}
 
export default Navlink;