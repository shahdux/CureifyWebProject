import React from 'react';
import "./Footer.css";
import tel from "../assets/phoneicon.svg";
import mail from "../assets/email.svg";
import loc from "../assets/oc.svg";
import socials from "../assets/socials.svg";
import flogo from "../assets/footerlogo.svg";
import { useLang } from '../context/LanguageContext'; // Added

const Footer = () => {
    const { isArabic } = useLang(); // Added

    return ( 
        <>
        <div className='footerholder' style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            <div className='footer'>
                <div className='firstsection'>
                    <img src={flogo} alt="footer logo" />
                    <p className='footerdes'>
                        {isArabic 
                            ? "Cureify يبسط إدارة الأدوية باستخدام أدوات ذكية وآمنة مصممة لمساعدتك على البقاء متسقًا ومسيطرًا." 
                            : "Cureify simplifies medication management with smart, secure tools designed to help you stay consistent and in control."}
                    </p>
                    <img src={socials} alt="socials" />
                </div>

                <div className='firstsection w200'>
                    <p className='footertitle'>{isArabic ? "روابط سريعة" : "Quick Links"}</p>
                    <div className='forconswtext'>
                        <p className='footerlink'>{isArabic ? "الرئيسية" : "Home"}</p>
                        <p className='footerlink'>{isArabic ? "المميزات" : "Features"}</p>
                        <p className='footerlink'>{isArabic ? "عن الشركة" : "About"}</p>
                        <p className='footerlink'>{isArabic ? "وظائف" : "Careers"}</p>
                        <p className='footerlink'>{isArabic ? "السياسات" : "Policies"}</p>
                        <p className='footerlink'>{isArabic ? "اتصل بنا" : "Contact"}</p>
                    </div>
                </div>

                <div className='firstsection w200'>
                    <p className='footertitle'>{isArabic ? "الدعم" : "Support"}</p>
                    <p className='footerlink'>{isArabic ? "الأسئلة الشائعة" : "FAQs"}</p>
                </div>

                <div className='firstsection w200'>
                    <p className='footertitle'>{isArabic ? "اتصل بنا" : "Contact Us"}</p>
                    <div className='forconswtext'>
                        <div className='textwicon'>
                            <img src={tel} alt="phone icon" />
                            <p className='phonetext'>0127378334</p>
                        </div>
                        <div className='textwicon'>
                            <img src={mail} alt="email icon" />
                            <p className='phonetext'>support@cureify.com</p>
                        </div>
                        <div className='textwicon'>
                            <img src={loc} alt="location icon" />
                            <p className='phonetext'>{isArabic ? "القاهرة، مصر" : "Cairo, Egypt"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Footer;