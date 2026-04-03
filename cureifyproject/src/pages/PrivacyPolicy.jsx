import React from 'react';
import "./PrivacyPolicy.css";
import Navbar from '../components/Navbar';
import mailicon from "../assets/mailicon.svg";
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';



const PrivacyPolicy = () => {
    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='privacy-hero'>
                <div className='privacy-overlay' />
                <div className='privacy-hero-content'>
                    <h1 className='privacy-hero-title'>Cureify User Privacy & Health Safety Policy</h1>
                    <p className='privacy-hero-des'>Your health and data security are our top priorities. Learn how we protect your information and ensure a safe experience.</p>
                </div>
            </div>

            <div className='privacy-container'>

                <div className='privacy-card'>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>1.Data Privacy</p>
                    </div>
                    <p className='privacy-p'>Cureify respects your privacy.</p>
                    <p className='privacy-p'>We only collect information that is necessary to help you manage your medications and health routine. This may include:</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• Medicine names and schedules</p>
                            <p className='privacy-bullet'>• Reminder preferences</p>
                            <p className='privacy-bullet'>• Uploaded prescriptions</p>
                            <p className='privacy-bullet'>• Pharmacy search activity</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• Blood test results and health records</p>
                        </div>
                    </div>
                    <p className='privacy-p'>Your data is used only to:</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• Send reminders</p>
                            <p className='privacy-bullet'>• Show health progress</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• Organize your medications</p>
                            <p className='privacy-bullet'>• Help you find medicine availability</p>
                        </div>
                    </div>
                    <div className='privacy-highlight red'>
                        <p className='privacy-highlight-text'>Cureify does not sell or share personal health data with third parties.</p>
                    </div>
                </div>

                <div className='privacy-card'>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>2.Medical Disclaimer</p>
                    </div>
                    <p className='privacy-p'>Cureify is a medicine management and health support tool, not a medical diagnosis or treatment service.</p>
                    <p className='privacy-bullet'>• The app does not replace doctors, pharmacists, or medical professionals.</p>
                    <p className='privacy-bullet'>• Blood test explanations are simplified for understanding and should not be used for self-diagnosis.</p>
                    <p className='privacy-bullet'>• Users must always consult a doctor before changing or stopping medication.</p>
                    <div className='privacy-highlight green'>
                        <p className='privacy-highlight-text'>Users must always consult a doctor before changing or stopping medication.</p>
                    </div>
                </div>

                <div className='privacy-card'>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>3.Blood Test & Health Information Use</p>
                    </div>
                    <p className='privacy-p'>Blood test analysis in Cureify is designed to:</p>
                    <p className='privacy-bullet'>• Help users understand results visually</p>
                    <p className='privacy-bullet'>• Track progress over time</p>
                    <div className='privacy-highlight blue'>
                        <p className='privacy-highlight-text'>The app provides educational insights only, not medical decisions.</p>
                    </div>
                </div>

                <div className='privacy-card'>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>4.Medication Information</p>
                    </div>
                    <p className='privacy-p'>Cureify helps users:</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• Track medication schedules</p>
                            <p className='privacy-bullet'>• Receive reminders</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• Find available medicines</p>
                        </div>
                    </div>
                    <p className='privacy-label'>However:</p>
                    <p className='privacy-bullet'>• Medicine availability depends on pharmacies and may change.</p>
                    <p className='privacy-bullet'>• Alternative medicine suggestions are informational and must be confirmed with a pharmacist or doctor.</p>
                </div>

                <div className='privacy-card'>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>5.Reminder Responsibility</p>
                    </div>
                    <p className='privacy-p'>Cureify provides smart reminders, but:</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-label'>User Responsibility</p>
                            <p className='privacy-p'>Users are responsible for enabling notifications and ensuring their device settings allow for app alerts.</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-label'>Limitation of Liability</p>
                            <p className='privacy-p'>Missed reminders due to phone settings or device issues are not the app's liability.</p>
                        </div>
                    </div>
                    <div className='privacy-highlight blue'>
                        <p className='privacy-highlight-text'>The app supports adherence but does not guarantee medical outcomes.</p>
                    </div>
                </div>

                <div className='privacy-card'>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>6.User Safety</p>
                    </div>
                    <p className='privacy-p'>To protect users, we've implemented several features:</p>
                    <div className='privacy-safety-grid'>
                        <div className='privacy-safety-item'>
                            <p className='privacy-label'>Clear visual indicators</p>
                            <p className='privacy-p'>Used for test results to ensure findings are easy to interpret at a glance.</p>
                        </div>
                        <div className='privacy-safety-item'>
                            <p className='privacy-label'>Simple explanations</p>
                            <p className='privacy-p'>Designed to avoid medical confusion and provide clarity for non-professionals.</p>
                        </div>
                        <div className='privacy-safety-item'>
                            <p className='privacy-label'>Voice reminders</p>
                            <p className='privacy-p'>Specifically designed to support elderly users and those with accessibility needs.</p>
                        </div>
                    </div>
                    <div className='privacy-highlight teal'>
                        <p className='privacy-highlight-text'>Cureify is designed to reduce medication mistakes, not replace professional care.</p>
                    </div>
                </div>

                <div className='privacy-card'>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>7.Age Use</p>
                    </div>
                    <p className='privacy-p'>The app is intended for:</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-label'>👤 Teenagers</p>
                            <p className='privacy-p'>Managing their own medication and health routines.</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-label'>👤 Adults</p>
                            <p className='privacy-p'>Managing their own medication and health routines.</p>
                        </div>
                    </div>
                    <p className='privacy-bullet'>• Children should use the app only with parental or guardian supervision.</p>
                </div>

             <div className='policies-banner'>
                                 <img src={mailicon} alt="mail" className='policies-mail-icon' />
                                 <p className='policies-banner-title'>If you encounter any issues or have feedback, please contact us:</p>
                                 <p className='policies-banner-sub'>Have questions or feedback? We'd love to hear from you. Our support team is here to help!</p>
                                 <div className='policies-email-btn'>
                                     <p className='policies-email'>support@cureifyapp.com</p>
                                 </div>
                             </div>

            </div>
            <DownloadApp />
            <Footer />
        </>
    );
}

export default PrivacyPolicy;