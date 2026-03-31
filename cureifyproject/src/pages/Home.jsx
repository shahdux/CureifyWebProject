import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import phone from "../assets/phone.svg";
import FeatureCard from '../components/FeatureCard';
import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import step1 from "../assets/work1.svg";
import step2 from "../assets/work2.svg";
import step3 from "../assets/work3.svg";
import icon1 from "../assets/step1.svg";
import icon2 from "../assets/step2.svg";
import icon3 from "../assets/step3.svg";
import phonemock from "../assets/phonemock.svg";
import i1 from "../assets/i1.svg";
import i2 from "../assets/i2.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
import i5 from "../assets/i5.svg";
import i6 from "../assets/i6.svg";
import i7 from "../assets/i7.svg";
import i8 from "../assets/i8.svg";
import i9 from "../assets/i9.svg";








import FilledButton from '../components/FilledButton';
import DownloadApp from '../components/DownloadApp';







const Home = () => {
    return ( 
        <>
        <div className='center'>

        <Navbar />
        <Header />
        </div>
        <Header2 sectiontitlename="About Cureify" 
        sectiontitledes="Managing medication shouldn’t feel overwhelming. Between handwritten prescriptions, missed reminders, unavailable medicines, and confusing blood test results — staying consistent becomes harder than it should be. In Egypt, many families still rely on memory, paper notes, or scattered WhatsApp photos to track important treatments. And when life gets busy, health is often the first thing that slips. Keep it emotional. Not feature-heavy." 
        pimage={phone}/>
        <div className='featuresSection'>
            <p className='titles'>It’s the simplicity of staying on track. It’s your health, handled using…</p>
            <div className='forfeatures'>
                
<FeatureCard fimg={f1} fname="AI Prescription Scanner" fdes="Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo,  automatically populating 
your cart and schedule with 100% accuracy."/>
<FeatureCard fimg={f2} fname="Adherence Rewards" fdes="Unlike other platforms that only reward purchases, we reward consistency. Earn points for taking your medicine on time and staying on track with your treatment."/>
<FeatureCard fimg={f3} fname="Real-Time Stock Accuracy" fdes="No more surprise cancellations. Our direct integration with a verified network of pharmacies ensures what you see is actually on the shelf."/>
<FeatureCard fimg={f4} fname="Blood Test Records" fdes="Stop guessing about your health. Easily upload and compare your blood test results over time to visualize trends and track how your body is responding to treatment."/>

            </div>
            <FilledButton btext="Explore all features" />
        </div>

      
        <div className='pgwithimg2'>
    <div className='titlewdes'>
        <p className='grey'>How It works</p>
        <p className='dess'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
    </div>

    <div className='htwcards'>
        {/* Card 1 */}
        <div className='card1'>
            <img src={step1} alt="" />
            <p className='step1'>1. Add & Organize</p>
            <p className='step1des'>Scan your prescription or upload it once. Cureify automatically organizes your medicines, dosages, durations, and color-codes them for easy recognition.</p>
            <div className='floating-icon'><img src={icon1} alt="scan" /></div>
        </div>

        {/* Card 2 */}
        <div className='card1 green'>
            <img src={step2} alt="" />
            <p className='step1'>2. Stay Consistent</p>
            <p className='step1des'>Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place.</p>
            <div className='floating-icon'><img src={icon2} alt="bell" /></div>
        </div>

        {/* Card 3 */}
        <div className='card1 greycard'>
            <img src={step3} alt="" />
            <p className='step1'>3. Find & Understand</p>
            <p className='step1des'>Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place.</p>
            <div className='floating-icon'><img src={icon3} alt="search" /></div>
        </div>
    </div>
</div>
            <div className='whyUsSection'>
                <div className='fortitlewsub'>
                    <p className='whiteTitles'>Why Choose Us</p>
                    <p className='whiteDes'>Managing your health shouldn't feel like scattered pieces. We gather your prescriptions, schedules, and health vitals into one intuitive mobile.</p>
                </div>
                {/* <img src={phonemock} alt="phone mockup" /> */}
               <div className="w-animation-wrapper">
        <img src={phonemock} alt="phone mockup" className="w-phone-img" />

        {/* Scattered Icons - assigned unique classes for their start positions */}
        <div className="w-icon w-icon-1"><img src={i1} /></div>
        <div className="w-icon w-icon-2"><img src={i2} /></div>
        <div className="w-icon w-icon-3"><img src={i3} /></div>
        <div className="w-icon w-icon-4"><img src={i4} /></div>
        <div className="w-icon w-icon-5"><img src={i5} /></div>
        <div className="w-icon w-icon-6"><img src={i6} /></div>
        <div className="w-icon w-icon-7"><img src={i7} /></div>
        <div className="w-icon w-icon-8"><img src={i8} /></div>
        <div className="w-icon w-icon-9"><img src={i9} /></div>
    </div>
              
                </div> 

                <DownloadApp />
                

        </>
     );
}
 
export default Home;