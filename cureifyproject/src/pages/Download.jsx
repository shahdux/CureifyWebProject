// import React, { Component } from 'react';
// import "./Download.css"
// import Navbar from '../components/Navbar';
// import download from "../assets/downphone.svg";
// import step1 from "../assets/work1.svg";
// import step2 from "../assets/work2.svg";
// import step3 from "../assets/work3.svg";
// import apple from "../assets/apple.svg";
// import play from "../assets/play.svg";

// import checkicon from "../assets/checkicon.svg";
// import mailicon from "../assets/mailicon.svg";
// import Footer from '../components/Footer';
// import DownloadApp from '../components/DownloadApp';
// import DownloadButton from '../components/DownloadButton';
// import FAQs from '../components/FAQs';
// const Download = () => {
//     return ( <>
//       <div className='center'>

//         <Navbar />
//         </div>


    
    
//      <div className='aboutdiv downloadbg'>
              
               

               
               

//                 <div className='about-left22'>
//                     <h1 className='about-title downloadwidthttitle'>Simplify Your Medication Management & Download Now</h1>
//                     <p className='about-des'>
//                        Cureify helps you build healthy habits with smart reminders, personalized schedules, and progress tracking—all in one beautifully simple app.
//                     </p>
  
//      <div className='for2buttons2 martop20'>
//         <DownloadButton softwareimg={apple} downtext="Download on the" store="App Store"/>
//                 <DownloadButton softwareimg={play} downtext="Get it on" store="Google Play"/>

        
//      </div>

//                 </div>

//                     <img src={download} alt="Cureify app on phone" className='about-phone2' />
                
//     </div>
//       <div className='pgwithimg2'>
//         <div className='titlewdes'>
//             <p className='grey'>How It works</p>
//             <p className='dess'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
//         </div>
    
//         <div className='htwcards'>
//             <div className='card1'>
//                 <img src={step1} alt="" />
//                 <p className='step1'>1. Add & Organize</p>
//                 <p className='step1des'>Scan your prescription or upload it once. Cureify automatically organizes your medicines, dosages, durations, and color-codes them for easy recognition.</p>
//             </div>
    
//             <div className='card1 green'>
//                 <img src={step2} alt="" />
//                 <p className='step1'>2. Stay Consistent</p>
//                 <p className='step1des'>Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place.</p>
//             </div>
    
//             <div className='card1 greycard'>
//                 <img src={step3} alt="" />
//                 <p className='step1'>3. Find & Understand</p>
//                 <p className='step1des'>Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place.</p>
//             </div>
//         </div>
//     </div>
 
//      <div className='pgwithimg2 forvaluesbg bluebgi'>
//         <div className='titlewdes2'>
//             <p className='grey white margin0'>Frequently Asked Questions</p>
//             <p className='valuedess white'>Find answers to common questions about our service.</p>
//         </div>
//     <div className='faqs-grid2'>

//         <div className='faqs-grid'>
//         <FAQs question="How does the AI prescription scanner work?" answer="Our AI scans your prescription photo and automatically extracts medication details with high accuracy." />
//         <FAQs question="Is my health data secure?" answer="Yes, all your data is encrypted and stored securely. We never share your information with third parties." />
//         <FAQs question="Can I set medication reminders?" answer="Absolutely. You can set custom reminders for each medication based on your schedule." />
       
//     </div>
//     <div className='faqs-grid'>
      
//         <FAQs question="How do I find medicine stock near me?" answer="Our app connects to a verified network of pharmacies and shows you real-time stock availability." />
//         <FAQs question="Is Cureify available in Egypt?" answer="Yes, Cureify is currently available in Egypt with plans to expand to more regions soon." />
//         <FAQs question="How do I upload my blood test results?" answer="Simply take a photo or upload a PDF of your results and our system will analyze and organize them for you." />
//     </div>
//     </div>
//     </div>
    
//       <div className='policies-container'>

//                 <div className='policies-card'>
//                     <p className='policies-title'>Why Download Our App?</p>
//                     <p className='policies-sub'>Everything you need in one powerful application</p>
//                     <div className='policies-list'>
//                         <div className='policies-item'>
//                             <img src={checkicon} alt="check" className='policies-check' />
//                             <p className='policies-text'>Fast and lightweight performance</p>
//                         </div>
//                         <div className='policies-item'>
//                             <img src={checkicon} alt="check" className='policies-check' />
//                             <p className='policies-text'>Secure end-to-end encryption</p>
//                         </div>
//                         <div className='policies-item'>
//                             <img src={checkicon} alt="check" className='policies-check' />
//                             <p className='policies-text'>Automatic updates</p>
//                         </div>
//                         <div className='policies-item'>
//                             <img src={checkicon} alt="check" className='policies-check' />
//                             <p className='policies-text'>Cross-platform sync</p>
//                         </div>
//                         <div className='policies-item'>
//                             <img src={checkicon} alt="check" className='policies-check' />
//                             <p className='policies-text'>Offline mode support</p>
//                         </div>
//                         <div className='policies-item'>
//                             <img src={checkicon} alt="check" className='policies-check' />
//                             <p className='policies-text'>24/7 customer support</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='policies-card'>
//                     <p className='policies-title'>System Requirements</p>
//                     <p className='policies-sub'>Make sure your device is compatible</p>

//                     <div className='policies-requirements'>
//                         <div className='policies-platform'>
//                             <p className='policies-platform-title'>IOS</p>
//                             <p className='policies-text'>• iOS 15.0 or later</p>
//                             <p className='policies-text'>• At least 200MB free storage</p>
//                         </div>
//                         <div className='policies-platform'>
//                             <p className='policies-platform-title'>Android</p>
//                             <p className='policies-text'>• Android 8.0 or later</p>
//                             <p className='policies-text'>• At least 200MB free storage</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='policies-banner'>
//                     <img src={mailicon} alt="mail" className='policies-mail-icon' />
//                     <p className='policies-banner-title'>If you encounter any issues or have feedback, please contact us:</p>
//                     <p className='policies-banner-sub'>Have questions or feedback? We'd love to hear from you. Our support team is here to help!</p>
//                     <div className='policies-email-btn'>
//                         <p className='policies-email'>support@cureifyapp.com</p>
//                     </div>
//                 </div>

//             </div>
   
    
                
//                 <Footer />
    
    
    
    
    
    
//     </> );
// }
 
// export default Download;
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import "./Download.css"
import Navbar from '../components/Navbar';
import download from "../assets/downphone.svg";
import step1 from "../assets/work1.svg";
import step2 from "../assets/work2.svg";
import step3 from "../assets/work3.svg";
import apple from "../assets/apple.svg";
import play from "../assets/play.svg";
import checkicon from "../assets/checkicon.svg";
import mailicon from "../assets/mailicon.svg";
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
import DownloadButton from '../components/DownloadButton';
import FAQs from '../components/FAQs';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Download = () => {
    return ( <>
      <div className='center'>
        <Navbar />
      </div>

      <div className='aboutdiv downloadbg'>
        <div className='about-left22'>
            <motion.h1 className='about-title downloadwidthttitle' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.7 }} viewport={vp}>
                Simplify Your Medication Management & Download Now
            </motion.h1>
            <motion.p className='about-des' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.7, delay: 0.15 }} viewport={vp}>
                Cureify helps you build healthy habits with smart reminders, personalized schedules, and progress tracking—all in one beautifully simple app.
            </motion.p>
            <motion.div className='for2buttons2 martop20' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.7, delay: 0.3 }} viewport={vp}>
                <DownloadButton softwareimg={apple} downtext="Download on the" store="App Store"/>
                <DownloadButton softwareimg={play} downtext="Get it on" store="Google Play"/>
            </motion.div>
        </div>
        <motion.img src={download} alt="Cureify app on phone" className='about-phone2' initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={vp}/>
      </div>

      <div className='pgwithimg2'>
        <div className='titlewdes'>
            <motion.p className='grey' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>How It works</motion.p>
            <motion.p className='dess' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.
            </motion.p>
        </div>

        <div className='htwcards'>
            <motion.div className='card1' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                <img src={step1} alt="" />
                <p className='step1'>1. Add & Organize</p>
                <p className='step1des'>Scan your prescription or upload it once. Cureify automatically organizes your medicines, dosages, durations, and color-codes them for easy recognition.</p>
            </motion.div>

            <motion.div className='card1 green' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                <img src={step2} alt="" />
                <p className='step1'>2. Stay Consistent</p>
                <p className='step1des'>Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place.</p>
            </motion.div>

            <motion.div className='card1 greycard' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }} viewport={vp}>
                <img src={step3} alt="" />
                <p className='step1'>3. Find & Understand</p>
                <p className='step1des'>Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place.</p>
            </motion.div>
        </div>
      </div>

      <div className='pgwithimg2 forvaluesbg bluebgi'>
        <div className='titlewdes2'>
            <motion.p className='grey white margin0' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>Frequently Asked Questions</motion.p>
            <motion.p className='valuedess white' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>Find answers to common questions about our service.</motion.p>
        </div>
        <div className='faqs-grid2'>
            <div className='faqs-grid'>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <FAQs question="How does the AI prescription scanner work?" answer="Our AI scans your prescription photo and automatically extracts medication details with high accuracy." />
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                    <FAQs question="Is my health data secure?" answer="Yes, all your data is encrypted and stored securely. We never share your information with third parties." />
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} viewport={vp}>
                    <FAQs question="Can I set medication reminders?" answer="Absolutely. You can set custom reminders for each medication based on your schedule." />
                </motion.div>
            </div>
            <div className='faqs-grid'>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <FAQs question="How do I find medicine stock near me?" answer="Our app connects to a verified network of pharmacies and shows you real-time stock availability." />
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                    <FAQs question="Is Cureify available in Egypt?" answer="Yes, Cureify is currently available in Egypt with plans to expand to more regions soon." />
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} viewport={vp}>
                    <FAQs question="How do I upload my blood test results?" answer="Simply take a photo or upload a PDF of your results and our system will analyze and organize them for you." />
                </motion.div>
            </div>
        </div>
      </div>

      <div className='policies-container'>
                <motion.div className='policies-card' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <p className='policies-title'>Why Download Our App?</p>
                    <p className='policies-sub'>Everything you need in one powerful application</p>
                    <div className='policies-list'>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>Fast and lightweight performance</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>Secure end-to-end encryption</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>Automatic updates</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>Cross-platform sync</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>Offline mode support</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>24/7 customer support</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='policies-card' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                    <p className='policies-title'>System Requirements</p>
                    <p className='policies-sub'>Make sure your device is compatible</p>
                    <div className='policies-requirements'>
                        <div className='policies-platform'>
                            <p className='policies-platform-title'>IOS</p>
                            <p className='policies-text'>• iOS 15.0 or later</p>
                            <p className='policies-text'>• At least 200MB free storage</p>
                        </div>
                        <div className='policies-platform'>
                            <p className='policies-platform-title'>Android</p>
                            <p className='policies-text'>• Android 8.0 or later</p>
                            <p className='policies-text'>• At least 200MB free storage</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='policies-banner' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }} viewport={vp}>
                    <img src={mailicon} alt="mail" className='policies-mail-icon' />
                    <p className='policies-banner-title'>If you encounter any issues or have feedback, please contact us:</p>
                    <p className='policies-banner-sub'>Have questions or feedback? We'd love to hear from you. Our support team is here to help!</p>
                    <div className='policies-email-btn'>
                        <p className='policies-email'>support@cureifyapp.com</p>
                    </div>
                </motion.div>
      </div>

      <Footer />
    </> );
}

export default Download;