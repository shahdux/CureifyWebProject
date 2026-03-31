import React, { Component } from 'react';
import "./Footer.css";
import tel from "../assets/phoneicon.svg";
import mail from "../assets/email.svg";
import loc from "../assets/oc.svg";
import socials from "../assets/socials.svg";
import flogo from "../assets/footerlogo.svg";




const Footer = () => {
    return ( 
        <>
        <div className='footerholder'>

        <div className='footer'>
            <div className='firstsection'>
                <img src={flogo} alt="footer logo" />
                <p className='footerdes'>Cureify simplifies medication management with smart, secure tools designed to help you stay consistent and in control.</p>
                <img src={socials} alt="socials" />
            </div>
             <div className='firstsection w200'>
                                <p className='footertitle'>Quick Links</p>
<div className='forconswtext'>
                <p className='footerlink'>Home</p>
                                <p className='footerlink'>Features</p>
                <p className='footerlink'>About</p>
                <p className='footerlink'>Careers</p>
                                <p className='footerlink'>Policies</p>
                <p className='footerlink'>Contact</p>
</div>


            </div>
               <div className='firstsection w200'>
                                <p className='footertitle'>Support</p>

                <p className='footerlink'>FAQs</p>
                  


            </div>
             <div className='firstsection w200'>
                                <p className='footertitle'>Contact Us</p>
<div className='forconswtext'>

               <div className='textwicon'>
<img src={tel} alt="phone icon" />
<p className='phonetext'>0127378334</p>
               </div>
               <div className='textwicon'>
<img src={mail} alt="phone icon" />
<p className='phonetext'>support@cureify.com</p>
               </div><div className='textwicon'>
<img src={loc} alt="phone icon" />
<p className='phonetext'>Cairo, Egypt</p>
               </div>
</div>
                  


            </div>
        </div>
        </div>
        
        
        </>
     );
}
 
export default Footer;