import React, { Component } from 'react';
import "./ValueCard.css";

const ValueCard = (props) => {
    return (
      <div className='valuecard' style={{ background: props.bgColor }}>
            <div className='valuecard-circle' />
            <img src={props.icon} alt="icon" className='valuecard-icon' />
            <div className='valuecard-bottom'>
                <p className='valuecard-title'>{props.title}</p>
                <p className='valuecard-des'>{props.des}</p>
            </div>
        </div>
    );
}

export default ValueCard;