import React, { Component } from 'react';

import "./Contact.css"
import Navbar from '../components/Navbar';
import FilledButton from '../components/FilledButton';
import locimg from "../assets/locimg.svg";
import mailicon from "../assets/greenmail.svg"
import website from "../assets/website.svg";
import numbericon from "../assets/numbericon.svg";

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
 {/* <div className='imagewdiv padding200'>
    <SectionTitle  sectiontitlename="Frequently Asked Questions"/>
{
           faqs.map((faq)=>{
             return   <div className='forvalueCards alignstart'>
                   <FAQs question={faq.question_EN}
                   answer={faq.answer_EN}/>
                             
                </div>



            })
          }
          </div> */}
         

        
        </>
     );
}
 

export default Contact;