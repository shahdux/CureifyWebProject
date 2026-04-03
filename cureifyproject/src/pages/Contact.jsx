import React, { Component } from 'react';

import "./Contact.css"
import Navbar from '../components/Navbar';
import FilledButton from '../components/FilledButton';
import locimg from "../assets/locimg.svg";
import mailicon from "../assets/greenmail.svg"
import website from "../assets/website.svg";
import numbericon from "../assets/numbericon.svg";
import FAQs from '../components/FAQs';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
// import FAQs from '../components/FAQs';

// import FAQs from '../components/FAQs';



const Contact = () => {
    

    return ( 
        
        <>
        
          
          <div className='center'>
                <Navbar />
            </div>
        <div className="bigcontcont">

<div className="contactForm">
    <div className="contactDetailsdiv">
        <div className='contholder'>
        <p className="contacttitkle">Let’s Get in Touch</p>
        <p className="contactsub">Fill out the form below and our team will get in touch to schedule a quick demo. We’ll walk you through how it works and help you see if it’s the right fit for your business</p>

        </div>
        <div className="iconswtexts">
            <div className="iconwdes">
                <img src={locimg} alt="location icon"/>
                <p className="info">Cairo, Egypt</p>

            </div>
             <div className="iconwdes">
                <img src={numbericon} alt="phone icon"/>
                <p className="info">+20123748237</p>

            </div>
             <div class="iconwdes">
                <img src={website} alt="behnace icon"/>
                <p class="info"> Cureify.com</p>

            </div>
            
             <div class="iconwdes">
                <img src={mailicon} alt="email icon"/>
                <p class="info"> Info@cureify.com</p>

            </div>
        </div>

    </div>
    <div class="inputDivholder">
        <div class="twoinputs">
            <input class="nameinput" type="text" name="" id="" placeholder="First Name"/>
                        <input class="nameinput" type="text" name="" id="" placeholder="Last Name"/>

        </div>
        <input  class="nameinput longerwidth" type="text" name="" id="" placeholder="Email"/>
        <input class="nameinput p2" type="text" name="" id="" placeholder="Enter your message here.."/>
       <div className='submitButton'>
       
        <p className='subButton'>Submit</p>
       </div>

    </div>
 
</div>



</div>
 <div className='pgwithimg2 forvaluesbg'>
        <div className='titlewdes2'>
            <p className='grey'>Frequently Asked Questions</p>
            <p className='valuedess'>Find answers to common questions about our service.</p>
        </div>
    <div className='faqs-grid2'>

        <div className='faqs-grid'>
        <FAQs question="How does the AI prescription scanner work?" answer="Our AI scans your prescription photo and automatically extracts medication details with high accuracy." />
        <FAQs question="Is my health data secure?" answer="Yes, all your data is encrypted and stored securely. We never share your information with third parties." />
        <FAQs question="Can I set medication reminders?" answer="Absolutely. You can set custom reminders for each medication based on your schedule." />
       
    </div>
    <div className='faqs-grid'>
      
        <FAQs question="How do I find medicine stock near me?" answer="Our app connects to a verified network of pharmacies and shows you real-time stock availability." />
        <FAQs question="Is Cureify available in Egypt?" answer="Yes, Cureify is currently available in Egypt with plans to expand to more regions soon." />
        <FAQs question="How do I upload my blood test results?" answer="Simply take a photo or upload a PDF of your results and our system will analyze and organize them for you." />
    </div>
    </div>
    </div>
         
<DownloadApp />
<Footer />        
        </>
     );
}
 

export default Contact;