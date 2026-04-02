import React from 'react';
import "./Careers.css";
import Navbar from '../components/Navbar';
import career1 from "../assets/c1.png";
import career2 from "../assets/c2.svg";
import career3 from "../assets/c3.svg";
import career4 from "../assets/c4.svg";
import career5 from "../assets/c5.svg";
// import career6 from "../assets/c6.svg";
import FilledButton from '../components/FilledButton';


const Careers = () => {
    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

        <div className='pgwithimg2 careersbg'>
        <div className='titlewdes2'>
            <p className='grey white fsize'>Build Technology <span className='greentext'>That Simplifies Healing.</span></p>
            <p className='valuedess white'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
        </div>
    
        <div className='htwcards'>
            <img src={career1} alt="" />
                        <img src={career2} alt="" />
            <img src={career3} alt="" />
            <img src={career4} alt="" />
            <img src={career5} alt="" />

       
        </div>
        <FilledButton btext="View Open Roles"/>
    </div>
        </>
    );
}

export default Careers;