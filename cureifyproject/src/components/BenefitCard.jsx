import React from 'react';
import "./BenefitCard.css";

const BenefitCard = (props) => {
    return (
        <div className='benefitcard'>
                <img src={props.icon} alt="benefit icon"  />
           
            <div className='benefitcard-text'>
                <p className='benefitcard-title'>{props.title}</p>
                <p className='benefitcard-des'>{props.des}</p>
            </div>
        </div>
    );
}

export default BenefitCard;