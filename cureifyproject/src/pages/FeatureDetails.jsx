import React, { Component } from 'react';
import "./FeatureDetails.css"
import Navbar from '../components/Navbar';

import f1d from "../assets/details1.svg";

import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
import FilledButton from '../components/FilledButton';
import StepCard from '../components/StepCard';
import cameraicon from "../assets/camicon.svg";
import aiicon from "../assets/fast.svg";
import verifyicon from "../assets/check.svg";
import organizeicon from "../assets/organize.svg";

import greenclock from "../assets/greenclock.svg";
import fast2 from "../assets/yellow.svg";
import cameraicon2 from "../assets/orangecam.svg";
import shieldicon from "../assets/shield.svg";
import BenefitCard from '../components/BenefitCard';
const FeatureDetails = () => {
    return ( <>
      <div className='center'>

        <Navbar />
        </div>


    
    
  
                
    
    
      <div className='aboutdiv vission'>
              
              

               
                <div className='about-overlay' />

                <div className='about-left ml'>
                    <h1 className='about-title w610'>AI-Powered
Prescription Scanner</h1>
                    <p className='about-des '>
Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy.                    </p>
<div className='martop30'>

<FilledButton btext="See how it works " />
</div>
                </div>

                <div className='about-right'>
                    <img src={f1d} alt="robotic hand" className='about-phone' />
                </div>
                                <div className='blur blur2'></div>

    </div>
    <div className='featuresSection whitebg padding120'>
 <div className='titlewdes2'>
            <p className='grey'>Why Work With Us</p>
            <p className='valuedess'>We’re building a company where people can do their best work while feeling supported and inspired.</p>
        </div>
                  
<div className='steps-section'>
    <StepCard
        icon={cameraicon}
        title="Scan a Photo"
        des="Simply take a photo of your prescription using your smartphone camera."
    />
    <div className='steps-line' />
    <StepCard
        icon={aiicon}
        title="AI Processing"
        des="Advanced AI analyzes and extracts all information in seconds."
    />
    <div className='steps-line' />
    <StepCard
        icon={verifyicon}
        title="Verify"
        des="Review extracted data with smart validation and error checking."
    />
    <div className='steps-line' />
    <StepCard
        icon={organizeicon}
        title="Organize"
        des="Your medications are automatically added to your personal library."
    />
</div>
        </div>
        <div className='featuresSection bluebgi padding180'>
<div className='titlewdes2'>
            <p className='grey white margin0'>Key Benefits</p>
            <p className='valuedess white'>Turning your prescription into a structured, ready-to-follow plan.</p>
        </div>          
        <div className='benefits-grid'>
    <BenefitCard
        icon={greenclock}
        iconBg="linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)"
        title="Saves time"
        des="What used to take minutes of manual entry now takes a single photo. Quick, effortless, and efficient — so you can focus on your health instead of administrative tasks."
    />
    <BenefitCard
        icon={fast2}
        iconBg="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
        title="Instant Accuracy"
        des="No more typing medication names manually or worrying about spelling mistakes. Every detail is captured clearly and correctly within seconds."
    />
    <BenefitCard
        icon={cameraicon2}
        iconBg="linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
        title="Smart Recognition"
        des="Works with handwritten and printed prescriptions. Even recognizes complex medical terminology."
    />
    <BenefitCard
        icon={shieldicon}
        iconBg="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
        title="Secure & Private"
        des="Your prescription data is encrypted and processed securely. We never store your personal health information."
    />
</div>
        </div>
      <DownloadApp />
                
                <Footer />
    
    
    
    
    
    
    </> );
}
 
export default FeatureDetails;





// import React from 'react';
// import "./FeatureDetails.css"
// import Navbar from '../components/Navbar';
// import f1d from "../assets/detailsone.svg";
// import f2d from "../assets/detailsone.svg";
// import f3d from "../assets/detailsone.svg";
// import f4d from "../assets/detailsone.svg";
// import f5d from "../assets/detailsone.svg";
// import f6d from "../assets/detailsone.svg";
// import Footer from '../components/Footer';
// import DownloadApp from '../components/DownloadApp';
// import FilledButton from '../components/FilledButton';
// import StepCard from '../components/StepCard';
// import BenefitCard from '../components/BenefitCard';
// import backarrow from "../assets/back.svg";
// import { Link, useParams } from 'react-router-dom';

// const FeatureDetails = () => {

//     const allfeatures = {
//         feature1: {
//             name: "AI-Powered Prescription Scanner",
//             image: f1d,
//             subtitle: "Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy.",
//             whyTitle: "How It Works",
//             whyDes: "A simple three-step process that turns any prescription photo into a fully organized medication plan.",
//             step1title: "Scan a Photo",
//             step1des: "Simply take a photo of your prescription using your smartphone camera.",
//             step2title: "AI Processing",
//             step2des: "Advanced AI analyzes and extracts all information in seconds.",
//             step3title: "Verify",
//             step3des: "Review extracted data with smart validation and error checking.",
//             step4title: "Organize",
//             step4des: "Your medications are automatically added to your personal library.",
//             benefitsTitle: "Key Benefits",
//             benefitsDes: "Turning your prescription into a structured, ready-to-follow plan.",
//             benefit1title: "Saves Time",
//             benefit1des: "What used to take minutes of manual entry now takes a single photo. Quick, effortless, and efficient.",
//             benefit1bg: "linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)",
//             benefit2title: "Instant Accuracy",
//             benefit2des: "No more typing medication names manually or worrying about spelling mistakes. Every detail is captured correctly.",
//             benefit2bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//             benefit3title: "Smart Recognition",
//             benefit3des: "Works with handwritten and printed prescriptions. Even recognizes complex medical terminology.",
//             benefit3bg: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
//             benefit4title: "Secure & Private",
//             benefit4des: "Your prescription data is encrypted and processed securely. We never store your personal health information.",
//             benefit4bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
//         },
//         feature2: {
//             name: "Adherence Rewards",
//             image: f2d,
//             subtitle: "Unlike other platforms that only reward purchases, we reward consistency. Earn points for taking your medicine on time and staying on track with your treatment.",
//             whyTitle: "How It Works",
//             whyDes: "A simple system that turns your daily medication routine into a rewarding habit.",
//             step1title: "Take Your Dose",
//             step1des: "Log your medication on time through the app each day.",
//             step2title: "Earn Points",
//             step2des: "Every on-time dose earns you reward points automatically.",
//             step3title: "Redeem Rewards",
//             step3des: "Exchange your points for discounts, health products, or app features.",
//             step4title: "Stay Consistent",
//             step4des: "Track your streak and celebrate milestones along the way.",
//             benefitsTitle: "Key Benefits",
//             benefitsDes: "Turning consistency into a habit you actually look forward to.",
//             benefit1title: "Stay Motivated",
//             benefit1des: "Rewards give you a reason to stay on track even on difficult days.",
//             benefit1bg: "linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)",
//             benefit2title: "Better Outcomes",
//             benefit2des: "Consistent medication leads to better health outcomes over time.",
//             benefit2bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//             benefit3title: "Real Value",
//             benefit3des: "Points can be redeemed for real discounts and health products.",
//             benefit3bg: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
//             benefit4title: "Track Progress",
//             benefit4des: "See your adherence history and streaks to stay accountable.",
//             benefit4bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
//         },
//         feature3: {
//             name: "Real-Time Stock Accuracy",
//             image: f3d,
//             subtitle: "No more surprise cancellations. Our direct integration with a verified network of pharmacies ensures what you see is actually on the shelf.",
//             whyTitle: "How It Works",
//             whyDes: "Live connections to pharmacy inventory so you always know what's available.",
//             step1title: "Search Medication",
//             step1des: "Search for any medication by name or scan your prescription.",
//             step2title: "Live Stock Check",
//             step2des: "We query pharmacy systems in real time for accurate availability.",
//             step3title: "See Nearby Options",
//             step3des: "View a map of pharmacies near you that have your medication in stock.",
//             step4title: "Get Notified",
//             step4des: "Set alerts for out-of-stock items and get notified when they're available.",
//             benefitsTitle: "Key Benefits",
//             benefitsDes: "No more wasted trips or surprise cancellations.",
//             benefit1title: "Save Time",
//             benefit1des: "Know exactly where your medication is before you leave home.",
//             benefit1bg: "linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)",
//             benefit2title: "Always Accurate",
//             benefit2des: "Live data means no outdated stock information — ever.",
//             benefit2bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//             benefit3title: "Wide Network",
//             benefit3des: "Connected to a verified network of pharmacies across the country.",
//             benefit3bg: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
//             benefit4title: "Stock Alerts",
//             benefit4des: "Get instantly notified when a previously unavailable medication is back in stock.",
//             benefit4bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
//         },
//         feature4: {
//             name: "Blood Test Analyzer",
//             image: f4d,
//             subtitle: "Upload your blood test results and get a plain-language breakdown instantly. Understand your health without needing a medical degree.",
//             whyTitle: "How It Works",
//             whyDes: "Upload your results and get a clear, personalized explanation in seconds.",
//             step1title: "Upload Results",
//             step1des: "Take a photo or upload a PDF of your blood test report.",
//             step2title: "AI Analysis",
//             step2des: "Our AI reads every marker and compares it against healthy ranges.",
//             step3title: "Get Explanation",
//             step3des: "Receive a plain-language breakdown of every value in your report.",
//             step4title: "Track Over Time",
//             step4des: "Monitor how your markers change across multiple tests.",
//             benefitsTitle: "Key Benefits",
//             benefitsDes: "Understanding your health has never been this simple.",
//             benefit1title: "No Confusion",
//             benefit1des: "Every marker explained in plain language — no medical degree needed.",
//             benefit1bg: "linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)",
//             benefit2title: "Instant Results",
//             benefit2des: "Get your breakdown immediately after uploading — no waiting.",
//             benefit2bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//             benefit3title: "Personalized",
//             benefit3des: "Analysis is tailored to your age, gender, and health profile.",
//             benefit3bg: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
//             benefit4title: "History Tracking",
//             benefit4des: "Compare results over time to see how your health is improving.",
//             benefit4bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
//         },
//         feature5: {
//             name: "Augmented Reality Medicine Guide",
//             image: f5d,
//             subtitle: "Scan your medicine box and instantly view clear, enlarged instructions and essential details — designed especially for elderly users or anyone who needs better visibility.",
//             whyTitle: "How It Works",
//             whyDes: "Point your camera and let AR do the rest.",
//             step1title: "Open AR Mode",
//             step1des: "Launch the AR guide from your medication detail page.",
//             step2title: "Scan the Box",
//             step2des: "Point your camera at any medicine box to begin scanning.",
//             step3title: "View Instructions",
//             step3des: "Enlarged, simplified instructions appear instantly on screen.",
//             step4title: "Get Reminders",
//             step4des: "Set reminders directly from the AR view with a single tap.",
//             benefitsTitle: "Key Benefits",
//             benefitsDes: "Making medication instructions accessible for everyone.",
//             benefit1title: "Better Visibility",
//             benefit1des: "Enlarged text and clear visuals make instructions easy to read.",
//             benefit1bg: "linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)",
//             benefit2title: "Elderly Friendly",
//             benefit2des: "Designed with older users in mind for maximum ease of use.",
//             benefit2bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//             benefit3title: "Fewer Errors",
//             benefit3des: "Clear instructions reduce the risk of medication mistakes.",
//             benefit3bg: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
//             benefit4title: "Works Offline",
//             benefit4des: "AR guide works even without an internet connection.",
//             benefit4bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
//         },
//         feature6: {
//             name: "Smart Medication Reminders",
//             image: f6d,
//             subtitle: "Tracks the full duration of each prescribed treatment and notifies users when it is time to stop taking the medication. This helps prevent accidental overuse and reduces resistance.",
//             whyTitle: "How It Works",
//             whyDes: "Smart reminders that adapt to your schedule and treatment plan.",
//             step1title: "Add Medication",
//             step1des: "Enter your medication and the prescribed duration from your doctor.",
//             step2title: "Set Schedule",
//             step2des: "Choose your preferred reminder times for each dose.",
//             step3title: "Get Reminded",
//             step3des: "Receive timely notifications when it's time to take your dose.",
//             step4title: "Complete Course",
//             step4des: "Get alerted when your treatment course is complete.",
//             benefitsTitle: "Key Benefits",
//             benefitsDes: "Never miss a dose or accidentally overmedicate again.",
//             benefit1title: "Never Miss a Dose",
//             benefit1des: "Timely reminders keep you on schedule every single day.",
//             benefit1bg: "linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)",
//             benefit2title: "Prevent Overuse",
//             benefit2des: "Course tracking ensures you stop taking medication at the right time.",
//             benefit2bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//             benefit3title: "Family Alerts",
//             benefit3des: "Notify a family member automatically if a dose is missed.",
//             benefit3bg: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
//             benefit4title: "Flexible Schedule",
//             benefit4des: "Easily snooze, reschedule, or adjust doses with a single tap.",
//             benefit4bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
//         },
//     };

//     const { key } = useParams();
//     const detailsfeature = allfeatures[key];

//     return (
//         <>
//             <div className='center'>
//                 <Navbar />
//             </div>

//             <Link to="/features" style={{ textDecoration: "none" }}>
//                 <p className='jobapp-back'>
//                     <img src={backarrow} alt="back" className='jobapp-back-icon' />
//                     Back to Features
//                 </p>
//             </Link>

//             <div className='aboutdiv vission'>
//                 <div className='about-overlay' />
//                 <div className='about-left ml'>
//                     <h1 className='about-title w610'>{detailsfeature.name}</h1>
//                     <p className='about-des'>{detailsfeature.subtitle}</p>
//                     <div className='martop30'>
//                         <FilledButton btext="See how it works" />
//                     </div>
//                 </div>
//                 <div className='about-right'>
//                     <img src={detailsfeature.image} alt="feature" className='about-phone' />
//                 </div>
//                 <div className='blur blur2'></div>
//             </div>

//             <div className='featuresSection whitebg padding120'>
//                 <div className='titlewdes2'>
//                     <p className='grey'>{detailsfeature.whyTitle}</p>
//                     <p className='valuedess'>{detailsfeature.whyDes}</p>
//                 </div>
//                 <div className='steps-section'>
//                     <StepCard title={detailsfeature.step1title} des={detailsfeature.step1des} />
//                     <div className='steps-line' />
//                     <StepCard title={detailsfeature.step2title} des={detailsfeature.step2des} />
//                     <div className='steps-line' />
//                     <StepCard title={detailsfeature.step3title} des={detailsfeature.step3des} />
//                     <div className='steps-line' />
//                     <StepCard title={detailsfeature.step4title} des={detailsfeature.step4des} />
//                 </div>
//             </div>

//             <div className='featuresSection bluebgi padding180'>
//                 <div className='titlewdes2'>
//                     <p className='grey white margin0'>{detailsfeature.benefitsTitle}</p>
//                     <p className='valuedess white'>{detailsfeature.benefitsDes}</p>
//                 </div>
//                 <div className='benefits-grid'>
//                     <BenefitCard title={detailsfeature.benefit1title} des={detailsfeature.benefit1des} iconBg={detailsfeature.benefit1bg} />
//                     <BenefitCard title={detailsfeature.benefit2title} des={detailsfeature.benefit2des} iconBg={detailsfeature.benefit2bg} />
//                     <BenefitCard title={detailsfeature.benefit3title} des={detailsfeature.benefit3des} iconBg={detailsfeature.benefit3bg} />
//                     <BenefitCard title={detailsfeature.benefit4title} des={detailsfeature.benefit4des} iconBg={detailsfeature.benefit4bg} />
//                 </div>
//             </div>

//             <DownloadApp />
//             <Footer />
//         </>
//     );
// }

// export default FeatureDetails;