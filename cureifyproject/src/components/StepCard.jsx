import React from 'react';
import "./StepCard.css";

const StepCard = (props) => {
    return (
        <div className='stepcard'>
                <img src={props.icon} alt="step icon"  />
            
            <p className='stepcard-title'>{props.title}</p>
            <p className='stepcard-des'>{props.des}</p>
        </div>
    );
}

export default StepCard;