import React from 'react';
import "./Careers.css";
import Navbar from '../components/Navbar';
import ii1 from "../assets/heart.svg";
import ii2 from "../assets/rocket.svg";
import ii3 from "../assets/people.svg";
import ii4 from "../assets/flex.svg";
import FilledButton from '../components/FilledButton';
import CircularGallery from '../components/CircularGallery';
import FeatureCard from '../components/FeatureCard';


const Careers = () => {
    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

        


            <div className=' careersbg'>
 <div className='titlewdes2 paddingtop'>
            <p className='grey white fsize'>Build Technology <span className='greentext'>That Simplifies Healing.</span></p>
            <p className='valuedess white'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
        </div>
     <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
 
  scrollSpeed={2}
 
/>

</div>
<div className='forbutton'>

        <FilledButton btext="View Open Roles"/>
</div>

</div>
 <div className='featuresSection whitebg'>
 <div className='titlewdes2'>
            <p className='grey'>Why Work With Us</p>
            <p className='valuedess'>We’re building a company where people can do their best work while feeling supported and inspired.</p>
        </div>
                    <div className='forfeatures'>
                
<FeatureCard fimg={ii1} fname="Meaningful Impact" fdes="Everything we build improves real lives. You'll see the direct result of your work in the health of our users."/>
<FeatureCard fimg={ii2} fname="Growth & Learning" fdes="We believe in mentorship, curiosity, and ownership. We provide annual learning budgets and internal workshops."/>
<FeatureCard fimg={ii3} fname="Collaborative Culture" fdes="Kindness, transparency, and shared success. We work as a unified team where every voice matters."/>
<FeatureCard fimg={ii4} fname="Flexibility" fdes="Remote-friendly environment with flexible hours. We value output and well-being over hours at a desk."/>
            </div>
        </div>
        </>
    );
}

export default Careers;