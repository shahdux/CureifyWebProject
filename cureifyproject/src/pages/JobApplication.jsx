
// import React, { useEffect, useState } from 'react';
// import "./JobApplication.css";
// import Navbar from '../components/Navbar';
// import backarrow from "../assets/back.svg";
// import upload from "../assets/upload.svg";
// import Footer from '../components/Footer';
// import { Link, useParams } from 'react-router-dom';
// import { supabase } from '../supabase';
// import { useLang } from '../context/LanguageContext';

// const JobApplication = () => {
//     const { id } = useParams();
//     const { isArabic } = useLang();
//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchJob() {
//             const { data } = await supabase
//                 .from('Careers')
//                 .select('*')
//                 .eq('id', id)
//                 .single();
//             setJob(data);
//             setLoading(false);
//         }
//         fetchJob();
//     }, [id]);

//     if (loading) return (
//         <div className="loader-container">
//             <div className="spinner"></div>
//         </div>
//     );

//     if (!job) return null;

//     return (
//         <>
//             <div className='center'>
//                 <Navbar />
//             </div>

//             <div className='jobapp-container'>
//                 <Link to="/careers" style={{ textDecoration: "none" }}>
//                     <p className='jobapp-back'>
//                         <img src={backarrow} alt="back" className='jobapp-back-icon' />
//                         {isArabic ? 'العودة إلى الوظائف' : 'Back to Careers'}
//                     </p>
//                 </Link>

//                 <div className='jobapp-card'>
//                     <div className='jobapp-header'>
//                         <p className='jobapp-title'>
//                             {isArabic ? `التقديم على وظيفة ${job.title_ar}` : `Apply for ${job.title_en}`}
//                         </p>
//                         <div className='jobapp-tags'>
//                             <p className='jobapp-tag'>📍 {isArabic ? job.location_ar : job.location_en}</p>
//                             <p className='jobapp-tag'>💼 {isArabic ? job.department_ar : job.department_en}</p>
//                             <p className='jobapp-tag'>💰 {job.salary}</p>
//                         </div>
//                         <p className='jobapp-des'>
//                             {isArabic ? job.description_ar : job.description_en}
//                         </p>
//                     </div>

//                     <div className='jobapp-form'>
//                         <p className='jobapp-section-title'>
//                             {isArabic ? 'معلوماتك الشخصية' : 'Your Information'}
//                         </p>

//                         <div className='jobapp-row'>
//                             <div className='jobapp-field'>
//                                 <p className='jobapp-label'>{isArabic ? 'الاسم الأول *' : 'First Name *'}</p>
//                                 <input className='jobapp-input' type="text" placeholder='' />
//                             </div>
//                             <div className='jobapp-field'>
//                                 <p className='jobapp-label'>{isArabic ? 'الاسم الأخير *' : 'Last Name *'}</p>
//                                 <input className='jobapp-input' type="text" placeholder='' />
//                             </div>
//                         </div>

//                         <div className='jobapp-row'>
//                             <div className='jobapp-field'>
//                                 <p className='jobapp-label'>{isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}</p>
//                                 <input className='jobapp-input' type="email" placeholder='' />
//                             </div>
//                             <div className='jobapp-field'>
//                                 <p className='jobapp-label'>{isArabic ? 'رقم الهاتف *' : 'Phone Number *'}</p>
//                                 <input className='jobapp-input' type="number" placeholder='' />
//                             </div>
//                         </div>

//                         <div className='jobapp-field full'>
//                             <p className='jobapp-label'>{isArabic ? 'رابط LinkedIn' : 'LinkedIn Profile URL'}</p>
//                             <input className='jobapp-input' type="text" placeholder='' />
//                         </div>

//                         <div className='jobapp-field full'>
//                             <p className='jobapp-label'>{isArabic ? 'السيرة الذاتية *' : 'Resume/CV *'}</p>
//                             <div className='jobapp-upload'>
//                                 <img src={upload} alt="upload icon" />
//                                 <p className='jobapp-upload-text'>{isArabic ? 'ارفع سيرتك الذاتية' : 'Upload your resume'}</p>
//                                 <p className='jobapp-upload-sub'>{isArabic ? 'PDF، DOC، أو DOCX (الحد الأقصى 5MB)' : 'PDF, DOC, or DOCX (Max 5MB)'}</p>
//                             </div>
//                         </div>

//                         <div className='jobapp-field full'>
//                             <p className='jobapp-label'>{isArabic ? 'خطاب التغطية (اختياري)' : 'Cover Letter (Optional)'}</p>
//                             <div className='jobapp-upload'>
//                                 <img src={upload} alt="upload icon" />
//                                 <p className='jobapp-upload-text'>{isArabic ? 'ارفع خطاب التغطية' : 'Upload your cover letter'}</p>
//                                 <p className='jobapp-upload-sub'>{isArabic ? 'PDF، DOC، أو DOCX (الحد الأقصى 5MB)' : 'PDF, DOC, or DOCX (Max 5MB)'}</p>
//                             </div>
//                         </div>

//                         <div className='jobapp-field full'>
//                             <p className='jobapp-label'>{isArabic ? 'لماذا أنت مهتم بهذا المنصب؟ *' : 'Why are you interested in this position? *'}</p>
//                             <textarea className='jobapp-textarea' />
//                         </div>

//                         <div className='jobapp-field full'>
//                             <p className='jobapp-label'>{isArabic ? 'سنوات الخبرة ذات الصلة *' : 'Years of Relevant Experience *'}</p>
//                             <input className='jobapp-input' type="text" placeholder='' />
//                         </div>

//                         <div className='jobapp-field full'>
//                             <p className='jobapp-label'>{isArabic ? 'تاريخ البدء المرغوب' : 'Desired Start Date'}</p>
//                             <input className='jobapp-input' type="date" />
//                         </div>

//                         <div className='jobapp-submit-btn'>
//                             <p className='jobapp-submit-text'>{isArabic ? 'إرسال' : 'Submit'}</p>
//                         </div>

//                         <p className='jobapp-disclaimer'>
//                             {isArabic
//                                 ? 'بتقديم هذا الطلب، فإنك توافق على سياسة الخصوصية وشروط الخدمة.'
//                                 : 'By submitting this application, you agree to our privacy policy and terms of service.'}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default JobApplication;
import React, { useEffect, useState } from 'react';
import "./JobApplication.css";
import Navbar from '../components/Navbar';
import backarrow from "../assets/back.svg";
import upload from "../assets/upload.svg";
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext';

const JobApplication = () => {
    const { id } = useParams();
    const { isArabic } = useLang();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sent, setSent] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [linkedin, setLinkedin] = useState("");

    useEffect(() => {
        async function fetchJob() {
            const { data } = await supabase
                .from('Careers')
                .select('*')
                .eq('id', id)
                .single();
            setJob(data);
            setLoading(false);
        }
        fetchJob();
    }, [id]);

    async function submitApplication() {
        await supabase.from("Applicants").insert({
            first_name: firstName,
            last_name: lastName,
            role: job.title_en,
            number: number,
            linkedin: linkedin,
        });
        setSent(true);
    }

    if (loading) return (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    );

    if (!job) return null;

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='jobapp-container'>
                <Link to="/careers" style={{ textDecoration: "none" }}>
                    <p className='jobapp-back'>
                        <img src={backarrow} alt="back" className='jobapp-back-icon' style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }}/>
                        {isArabic ? 'العودة إلى الوظائف' : 'Back to Careers'}
                    </p>
                </Link>

                <div className='jobapp-card'>
                    <div className='jobapp-header'>
                        <p className='jobapp-title'>
                            {isArabic ? `التقديم على وظيفة ${job.title_ar}` : `Apply for ${job.title_en}`}
                        </p>
                        <div className='jobapp-tags'>
                            <p className='jobapp-tag'>📍 {isArabic ? job.location_ar : job.location_en}</p>
                            <p className='jobapp-tag'>💼 {isArabic ? job.department_ar : job.department_en}</p>
                            <p className='jobapp-tag'>💰 {job.salary}</p>
                        </div>
                        <p className='jobapp-des'>
                            {isArabic ? job.description_ar : job.description_en}
                        </p>
                    </div>

                    <div className='jobapp-form'>
                        <p className='jobapp-section-title'>
                            {isArabic ? 'معلوماتك الشخصية' : 'Your Information'}
                        </p>

                        <div className='jobapp-row'>
                            <div className='jobapp-field'>
                                <p className='jobapp-label'>{isArabic ? 'الاسم الأول *' : 'First Name *'}</p>
                                <input
                                    className='jobapp-input'
                                    type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='jobapp-field'>
                                <p className='jobapp-label'>{isArabic ? 'الاسم الأخير *' : 'Last Name *'}</p>
                                <input
                                    className='jobapp-input'
                                    type="text"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='jobapp-row'>
                            <div className='jobapp-field'>
                                <p className='jobapp-label'>{isArabic ? 'البريد الإلكتروني *' : 'Email Address *'}</p>
                                <input className='jobapp-input' type="email" />
                            </div>
                            <div className='jobapp-field'>
                                <p className='jobapp-label'>{isArabic ? 'رقم الهاتف *' : 'Phone Number *'}</p>
                                <input
                                    className='jobapp-input'
                                    type="number"
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>{isArabic ? 'رابط LinkedIn' : 'LinkedIn Profile URL'}</p>
                            <input
                                className='jobapp-input'
                                type="text"
                                onChange={(e) => setLinkedin(e.target.value)}
                            />
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>{isArabic ? 'السيرة الذاتية *' : 'Resume/CV *'}</p>
                            <div className='jobapp-upload'>
                                <img src={upload} alt="upload icon" />
                                <p className='jobapp-upload-text'>{isArabic ? 'ارفع سيرتك الذاتية' : 'Upload your resume'}</p>
                                <p className='jobapp-upload-sub'>{isArabic ? 'PDF، DOC، أو DOCX (الحد الأقصى 5MB)' : 'PDF, DOC, or DOCX (Max 5MB)'}</p>
                            </div>
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>{isArabic ? 'خطاب التغطية (اختياري)' : 'Cover Letter (Optional)'}</p>
                            <div className='jobapp-upload'>
                                <img src={upload} alt="upload icon" />
                                <p className='jobapp-upload-text'>{isArabic ? 'ارفع خطاب التغطية' : 'Upload your cover letter'}</p>
                                <p className='jobapp-upload-sub'>{isArabic ? 'PDF، DOC، أو DOCX (الحد الأقصى 5MB)' : 'PDF, DOC, or DOCX (Max 5MB)'}</p>
                            </div>
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>{isArabic ? 'لماذا أنت مهتم بهذا المنصب؟ *' : 'Why are you interested in this position? *'}</p>
                            <textarea className='jobapp-textarea' />
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>{isArabic ? 'سنوات الخبرة ذات الصلة *' : 'Years of Relevant Experience *'}</p>
                            <input className='jobapp-input' type="text" />
                        </div>

                        <div className='jobapp-field full'>
                            <p className='jobapp-label'>{isArabic ? 'تاريخ البدء المرغوب' : 'Desired Start Date'}</p>
                            <input className='jobapp-input' type="date" />
                        </div>

                        <div className='jobapp-submit-btn' onClick={submitApplication}>
                            <p className='jobapp-submit-text'>{isArabic ? 'إرسال' : 'Submit'}</p>
                        </div>

                        {sent && (
                            <p className='jobapp-disclaimer' style={{ color: '#00A4AA', fontWeight: '600' }}>
                                {isArabic ? '✓ تم إرسال طلبك بنجاح!' : '✓ Application submitted successfully!'}
                            </p>
                        )}

                        <p className='jobapp-disclaimer'>
                            {isArabic
                                ? 'بتقديم هذا الطلب، فإنك توافق على سياسة الخصوصية وشروط الخدمة.'
                                : 'By submitting this application, you agree to our privacy policy and terms of service.'}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default JobApplication;