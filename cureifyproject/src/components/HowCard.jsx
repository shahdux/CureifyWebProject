import React from 'react';
import "./HowCard.css"

const HowCard = (props) => {
    return (
        <div className={`howcard ${props.reverse ? 'howcard-reverse' : ''}`}>
            <div className='howcard-left'>
                <p className='howcard-number'>{props.number}</p>
                <p className='howcard-title'>{props.title}</p>
                <p className='howcard-des'>{props.description}</p>
            </div>
            <img src={props.img} alt="step image" className='howcard-img' />
        </div>
    );
}

export default HowCard;