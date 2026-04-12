import React from 'react';
import "./TestimonialCard.css"

const TestimonialCard = (props) => {
    return (
        <div className='testimonial-card'>
            <div className='testimonial-stars'>
                {'★'.repeat(props.stars || 5)}
            </div>
            <p className='testimonial-review'>{props.review}</p>
            <hr className='testimonial-divider' />
            <p className='testimonial-name'>{props.name}</p>
        </div>
    );
}

export default TestimonialCard;