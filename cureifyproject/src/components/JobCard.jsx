import React from 'react';
import "./JobCard.css";
import bagicon from "../assets/depart.svg";
import locationicon from "../assets/loc.svg";
import clockicon from "../assets/clockc.svg";
import greenarrow from "../assets/greenarrow.svg";
import { useLang } from '../context/LanguageContext';


const JobCard = (props) => {
    const { isArabic } = useLang(); 
    return (
        <div className='jobcard'>
            <div className='jobcard-left'>
                <p className='jobcard-title'>{props.title}</p>
                <div className='jobcard-tags'>
                    <img src={bagicon} alt="department" className='jobcard-icon' />
                    <p className='jobcard-tag'>{props.department}</p>
                    <img src={locationicon} alt="location" className='jobcard-icon' />
                    <p className='jobcard-tag'>{props.location}</p>
                    <img src={clockicon} alt="type" className='jobcard-icon' />
                    <p className='jobcard-tag'>{props.type}</p>
                </div>
            </div>
            <div className='jobcard-right'>
                <p className='jobcard-apply'>
    {isArabic ? "قدّم الآن" : "Apply Now"}
</p>
               <img style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }} src={greenarrow} alt="green arrow" />
            </div>
        </div>
    );
}

export default JobCard;