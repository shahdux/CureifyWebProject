import React, { useState } from 'react';
import "./FAQs.css";

const FAQs = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='faq-card' onClick={() => setOpen(!open)}>
            <div className='faq-top'>
                <p className='faq-plus'>{open ? '−' : '+'}</p>
                <p className='faq-question'>{props.question}</p>
            </div>
            {open && <p className='faq-answer'>{props.answer}</p>}
        </div>
    );
}

export default FAQs;