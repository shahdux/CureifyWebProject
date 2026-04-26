// import React from 'react';
// import "./Careers.css";
// import Navbar from '../components/Navbar';
// import ii1 from "../assets/heart.svg";
// import ii2 from "../assets/rocket.svg";
// import ii3 from "../assets/people.svg";
// import ii4 from "../assets/flex.svg";
// import FilledButton from '../components/FilledButton';
// import CircularGallery from '../components/CircularGallery';
// import FeatureCard from '../components/FeatureCard';
// import JobCard from '../components/JobCard';
// import ValueCard from '../components/ValueCard';
// import wclock from "../assets/wclock.svg";
// import health from "../assets/health.svg";
// import gift2 from "../assets/gift.svg";
// import DownloadApp from '../components/DownloadApp';
// import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';


// const Careers = () => {
//     return (
//         <>
//             <div className='center'>
//                 <Navbar />
//             </div>

        


//             <div className=' careersbg'>
//  <div className='titlewdes2 paddingtop'>
//             <p className='grey white fsize'>Build Technology <span className='greentext'>That Simplifies Healing.</span></p>
//             <p className='valuedess white'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
//         </div>
//      <div style={{ height: '600px', position: 'relative' }}>
//   <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}
 
//   scrollSpeed={2}
 
// />

// </div>
// <div className='forbutton'>

//         <FilledButton btext="View Open Roles"/>
// </div>

// </div>
//  <div className='featuresSection whitebg padding120'>
//  <div className='titlewdes2'>
//             <p className='grey'>Why Work With Us</p>
//             <p className='valuedess'>We’re building a company where people can do their best work while feeling supported and inspired.</p>
//         </div>
//                     <div className='forfeatures'>
        
// <FeatureCard fimg={ii1} fname="Meaningful Impact" fdes="Everything we build improves real lives. You'll see the direct result of your work in the health of our users."/>
// <FeatureCard fimg={ii2} fname="Growth & Learning" fdes="We believe in mentorship, curiosity, and ownership. We provide annual learning budgets and internal workshops."/>
// <FeatureCard fimg={ii3} fname="Collaborative Culture" fdes="Kindness, transparency, and shared success. We work as a unified team where every voice matters."/>
// <FeatureCard fimg={ii4} fname="Flexibility" fdes="Remote-friendly environment with flexible hours. We value output and well-being over hours at a desk."/>
//             </div>
//         </div>
//  <div className='featuresSection bluebgi'>
// <div className='titlewdes2'>
//             <p className='grey white margin0'>Open Positions</p>
//             <p className='valuedess white'>Join us in our mission to make care simple and reliable.</p>
//         </div>            <div className='forfeatures'>

//                         <Link  to="/job-applications" style={{ textDecoration: "none" }} >
      
// <JobCard
//     title="Senior Product Designer"
//     department="Design"
//     location="Remote / Cairo, EG"
//     type="Full-time"
// />
// </Link>

// <JobCard
//     title="Senior Frontend Engineer (React)"
//     department="Engineering"
//     location="Remote / London, UK"
//     type="Full-time"
// />
// <JobCard
//     title="Content Strategist"
//     department="Marketing"
//     location="Cairo, EG"
//     type="Full-time"
// />
//             </div>
//         </div>
// <div className='pgwithimg2 forvaluesbg'>
//         <div className='titlewdes2'>
//             <p className='grey'>Our Values</p>
//             <p className='valuedess'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
//         </div>
    
//         <div className='htwcards'>
//            <ValueCard
//     bgColor="linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)"
//     icon={wclock}
//     title="Never Miss a Dose"
//     des="Get started in minutes with your existing system."
// />
// <ValueCard
//     bgColor="linear-gradient(135deg, #4a5568 0%, #2d3748 100%)"
//     icon={health}
//     title="Save Time & Effort"
//     des="No more manual searches or calls to pharmacies. Everything you need is organized and ready with a single tap."
// />
// <ValueCard
//     bgColor="linear-gradient(135deg, #1a3a6e 0%, #0d2347 100%)"
//     icon={gift2}
//     title="Reward Your Commitment"
//     des="Your consistency matters. Earn points and perks simply by staying on track with your health."
// />
//         </div>
//     </div>
// <DownloadApp />
// <Footer />
//         </>
//     );
// }

// export default Careers;
import React, { useState, useEffect } from 'react';
import "./Careers.css";
import Navbar from '../components/Navbar';
import ii1 from "../assets/heart.svg";
import ii2 from "../assets/rocket.svg";
import ii3 from "../assets/people.svg";
import ii4 from "../assets/flex.svg";
import FilledButton from '../components/FilledButton';
import CircularGallery from '../components/CircularGallery';
import FeatureCard from '../components/FeatureCard';
import JobCard from '../components/JobCard';
import ValueCard from '../components/ValueCard';
import wclock from "../assets/wclock.svg";
import health from "../assets/health.svg";
import gift2 from "../assets/gift.svg";
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';

const Careers = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState("");

    useEffect(() => {
        async function callGetAPI() {
            const res = await supabase.from("Careers").select("*");
            setJobs(res.data);
            setLoading(false);
        }
        callGetAPI();
    }, []);

   if (loading) return (
    <div className="loader-container">
        <div className="spinner"></div>
    </div>
);

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='careersbg'>
                <div className='titlewdes2 paddingtop'>
                    <p className='grey white fsize'>Build Technology <span className='greentext'>That Simplifies Healing.</span></p>
                    <p className='valuedess white'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
                </div>
                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} scrollSpeed={2} />
                </div>
                <div className='forbutton'>
                    <FilledButton btext="View Open Roles" />
                </div>
            </div>

            <div className='featuresSection whitebg padding120'>
                <div className='titlewdes2'>
                    <p className='grey'>Why Work With Us</p>
                    <p className='valuedess'>We're building a company where people can do their best work while feeling supported and inspired.</p>
                </div>
                <div className='forfeatures'>
                    <FeatureCard fimg={ii1} fname="Meaningful Impact" fdes="Everything we build improves real lives. You'll see the direct result of your work in the health of our users." />
                    <FeatureCard fimg={ii2} fname="Growth & Learning" fdes="We believe in mentorship, curiosity, and ownership. We provide annual learning budgets and internal workshops." />
                    <FeatureCard fimg={ii3} fname="Collaborative Culture" fdes="Kindness, transparency, and shared success. We work as a unified team where every voice matters." />
                    <FeatureCard fimg={ii4} fname="Flexibility" fdes="Remote-friendly environment with flexible hours. We value output and well-being over hours at a desk." />
                </div>
            </div>

            <div className='featuresSection bluebgi'>
                <div className='titlewdes2'>
                    <p className='grey white margin0'>Open Positions</p>
                    <p className='valuedess white'>Join us in our mission to make care simple and reliable.</p>
                </div>
                <div className='forfeatures'>
                    {jobs.map((job) => (
                        <Link to="/job-applications" style={{ textDecoration: "none" }}>
                            <JobCard
                                title={job.title_en}
                                department={job.department_en}
                                location={job.location_en}
                                type={job.time_en}
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div className='pgwithimg2 forvaluesbg'>
                <div className='titlewdes2'>
                    <p className='grey'>Our Values</p>
                    <p className='valuedess'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
                </div>
                <div className='htwcards'>
                    <ValueCard bgColor="linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)" icon={wclock} title="Never Miss a Dose" des="Get started in minutes with your existing system." />
                    <ValueCard bgColor="linear-gradient(135deg, #4a5568 0%, #2d3748 100%)" icon={health} title="Save Time & Effort" des="No more manual searches or calls to pharmacies. Everything you need is organized and ready with a single tap." />
                    <ValueCard bgColor="linear-gradient(135deg, #1a3a6e 0%, #0d2347 100%)" icon={gift2} title="Reward Your Commitment" des="Your consistency matters. Earn points and perks simply by staying on track with your health." />
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </>
    );
}

export default Careers;