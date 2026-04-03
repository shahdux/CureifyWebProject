import React from 'react';
import "./JobApplication.css";
import Navbar from '../components/Navbar';
import backarrow from "../assets/back.svg";
import upload from "../assets/upload.svg";
import Footer from '../components/Footer';



const JobApplication = () => {
  

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='jobapp-container'>
                <p className='jobapp-back' ><img src={backarrow} alt="back" className='jobapp-back-icon' />Back to Careers</p>
                 

                <div className='jobapp-card'>
                    <div className='jobapp-header'>
                        <p className='jobapp-title'>Apply for Senior Product Designer</p>
                        <div className='jobapp-tags'>
                            <p className='jobapp-tag'>📍 Cairo, Egypt</p>
                            <p className='jobapp-tag'>💼  Design</p>
                            <p className='jobapp-tag'>💰 20,000£ - 40,000£</p>
                        </div>
                        <p className='jobapp-des'>Shape the future of healthcare by designing intuitive, user-centered experiences that help millions of patients manage their medications effectively.</p>
                    </div>

                    {/* Form */}
                    <div className='jobapp-form'>
                        <p className='jobapp-section-title'>Your Information</p>

                        <div className='jobapp-row'>
                            <div className='jobapp-field'>
                                <p className='jobapp-label'>First Name *</p>
                                <input className='jobapp-input' type="text" placeholder='' />
                            </div>
                            <div className='jobapp-field'>
                                <p className='jobapp-label'>Last Name *</p>
                                <input className='jobapp-input' type="text" placeholder='' />
                            </div>
                        </div>

                        <div className='jobapp-row'>
                            <div className='jobapp-field'>
                                <p className='jobapp-label'>Email Address *</p>
                                <input className='jobapp-input' type="email" placeholder='' />
                            </div>
                            <div className='jobapp-field'>
                                <p className='jobapp-label'>Phone Number *</p>
                                <input className='jobapp-input' type="tel" placeholder='' />
                            </div>
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>LinkedIn Profile URL</p>
                            <input className='jobapp-input' type="text" placeholder='' />
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>Resume/CV *</p>
                            <div className='jobapp-upload'>
                                <img src={upload} alt="upload icon" />
                                <p className='jobapp-upload-text'>Upload your resume</p>
                                <p className='jobapp-upload-sub'>PDF, DOC, or DOCX (Max 5MB)</p>
                            </div>
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>Cover Letter (Optional)</p>
                            <div className='jobapp-upload'>
                                <img src={upload} alt="upload icon" />
                                <p className='jobapp-upload-text'>Upload your cover letter</p>
                                <p className='jobapp-upload-sub'>PDF, DOC, or DOCX (Max 5MB)</p>
                            </div>
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>Why are you interested in this position? *</p>
                            <textarea className='jobapp-textarea' />
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>Years of Relevant Experience *</p>
                            <input className='jobapp-input' type="text" placeholder='' />
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>Desired Start Date</p>
                            <input className='jobapp-input' type="date" />
                        </div>

                        <div className='jobapp-submit-btn'>
                            <p className='jobapp-submit-text'>Submit</p>
                        </div>

                        <p className='jobapp-disclaimer'>By submitting this application, you agree to our privacy policy and terms of service.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default JobApplication;