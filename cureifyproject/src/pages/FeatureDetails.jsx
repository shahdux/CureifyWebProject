// import React, { Component } from 'react';
// import "./FeatureDetails.css"
// import Navbar from '../components/Navbar';

// import f1d from "../assets/details1.svg";

// import Footer from '../components/Footer';
// import DownloadApp from '../components/DownloadApp';
// import FilledButton from '../components/FilledButton';
// import StepCard from '../components/StepCard';
// import cameraicon from "../assets/camicon.svg";
// import aiicon from "../assets/fast.svg";
// import verifyicon from "../assets/check.svg";
// import organizeicon from "../assets/organize.svg";

// import greenclock from "../assets/greenclock.svg";
// import fast2 from "../assets/yellow.svg";
// import cameraicon2 from "../assets/orangecam.svg";
// import shieldicon from "../assets/shield.svg";
// import BenefitCard from '../components/BenefitCard';
// const FeatureDetails = () => {
//     return ( <>
//       <div className='center'>

//         <Navbar />
//         </div>


    
    
  
                
    
    
//       <div className='aboutdiv vission'>
              
              

               
//                 <div className='about-overlay' />

//                 <div className='about-left ml'>
//                     <h1 className='about-title w610'>AI-Powered
// Prescription Scanner</h1>
//                     <p className='about-des '>
// Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically organizing your medicine with 100% accuracy.                    </p>
// <div className='martop30'>

// <FilledButton btext="See how it works " />
// </div>
//                 </div>

//                 <div className='about-right'>
//                     <img src={f1d} alt="robotic hand" className='about-phone' />
//                 </div>
//                                 <div className='blur blur2'></div>

//     </div>
//     <div className='featuresSection whitebg padding120'>
//  <div className='titlewdes2'>
//             <p className='grey'>Why Work With Us</p>
//             <p className='valuedess'>We’re building a company where people can do their best work while feeling supported and inspired.</p>
//         </div>
                  
// <div className='steps-section'>
//     <StepCard
//         icon={cameraicon}
//         title="Scan a Photo"
//         des="Simply take a photo of your prescription using your smartphone camera."
//     />
//     <div className='steps-line' />
//     <StepCard
//         icon={aiicon}
//         title="AI Processing"
//         des="Advanced AI analyzes and extracts all information in seconds."
//     />
//     <div className='steps-line' />
//     <StepCard
//         icon={verifyicon}
//         title="Verify"
//         des="Review extracted data with smart validation and error checking."
//     />
//     <div className='steps-line' />
//     <StepCard
//         icon={organizeicon}
//         title="Organize"
//         des="Your medications are automatically added to your personal library."
//     />
// </div>
//         </div>
//         <div className='featuresSection bluebgi padding180'>
// <div className='titlewdes2'>
//             <p className='grey white margin0'>Key Benefits</p>
//             <p className='valuedess white'>Turning your prescription into a structured, ready-to-follow plan.</p>
//         </div>          
//         <div className='benefits-grid'>
//     <BenefitCard
//         icon={greenclock}
//         iconBg="linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)"
//         title="Saves time"
//         des="What used to take minutes of manual entry now takes a single photo. Quick, effortless, and efficient — so you can focus on your health instead of administrative tasks."
//     />
//     <BenefitCard
//         icon={fast2}
//         iconBg="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
//         title="Instant Accuracy"
//         des="No more typing medication names manually or worrying about spelling mistakes. Every detail is captured clearly and correctly within seconds."
//     />
//     <BenefitCard
//         icon={cameraicon2}
//         iconBg="linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
//         title="Smart Recognition"
//         des="Works with handwritten and printed prescriptions. Even recognizes complex medical terminology."
//     />
//     <BenefitCard
//         icon={shieldicon}
//         iconBg="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
//         title="Secure & Private"
//         des="Your prescription data is encrypted and processed securely. We never store your personal health information."
//     />
// </div>
//         </div>
//       <DownloadApp />
                
//                 <Footer />
    
    
    
    
    
    
//     </> );
// }
 
// export default FeatureDetails;

// import React, { useEffect, useState } from 'react';
// import "./FeatureDetails.css"
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import DownloadApp from '../components/DownloadApp';
// import FilledButton from '../components/FilledButton';
// import StepCard from '../components/StepCard';
// import BenefitCard from '../components/BenefitCard';
// import { useParams } from 'react-router-dom';
// import { supabase } from '../supabase';
// import { useLang } from '../context/LanguageContext';

// const FeatureDetails = () => {
//     const { id } = useParams();
//     const { isArabic } = useLang();
//     const [feature, setFeature] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchFeature() {
//             const { data } = await supabase
//                 .from('Features')
//                 .select('*')
//                 .eq('id', id)
//                 .single();
//             setFeature(data);
//             setLoading(false);
//         }
//         fetchFeature();
//     }, [id]);

//     if (loading) return (
//         <div className="loader-container">
//             <div className="spinner"></div>
//         </div>
//     );

//     if (!feature) return null;

//     const benefits = feature.benefits_en
//         ? (typeof feature.benefits_en === 'string' ? JSON.parse(feature.benefits_en) : feature.benefits_en)
//         : [];

//     const steps = feature.howitworks_en
//         ? (typeof feature.howitworks_en === 'string' ? JSON.parse(feature.howitworks_en) : feature.howitworks_en)
//         : [];

//     return (
//         <>
//             <div className='center'>
//                 <Navbar />
//             </div>

//             <div className='featureHero' style={{ backgroundImage: `url(${feature.bgimg})` }}>
//                 <div className='featureHero-text'>
//                     <h1 className='about-title w610'>
//                         {isArabic ? feature.name_ar : feature.name_en}
//                     </h1>
//                     <p className='about-des'>
//                         {isArabic ? feature.description_ar : feature.description_en}
//                     </p>
//                     <div className='martop30'>
//                         <FilledButton btext={isArabic ? "شاهد كيف يعمل" : "See how it works"} />
//                     </div>
//                 </div>
//             </div>

//             {steps.length > 0 && (
//                 <div className='featuresSection whitebg padding120'>
//                     <div className='titlewdes2'>
//                         <p className='grey'>{isArabic ? "كيف يعمل" : "How It Works"}</p>
//                         <p className='valuedess'>
//                             {isArabic ? feature.description_ar : feature.description_en}
//                         </p>
//                     </div>
//                     <div className='steps-section'>
//                         {steps.map((step, i) => (
//                             <React.Fragment key={i}>
//                                 <StepCard
//                                     title={step.name}
//                                     des={step.description}
//                                 />
//                                 {i < steps.length - 1 && <div className='steps-line' />}
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {benefits.length > 0 && (
//                 <div className='featuresSection bluebgi padding180'>
//                     <div className='titlewdes2'>
//                         <p className='grey white margin0'>{isArabic ? "الفوائد الرئيسية" : "Key Benefits"}</p>
//                         <p className='valuedess white'>
//                             {isArabic
//                                 ? "تحويل وصفتك الطبية إلى خطة منظمة جاهزة للتطبيق."
//                                 : "Turning your prescription into a structured, ready-to-follow plan."}
//                         </p>
//                     </div>
//                     <div className='benefits-grid'>
//                         {benefits.map((benefit, i) => (
//                             <BenefitCard
//                                 key={i}
//                                 title={benefit.name}
//                                 des={benefit.description}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}

//             <DownloadApp />
//             <Footer />
//         </>
//     );
// }

// export default FeatureDetails;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./FeatureDetails.css"
import Navbar from '../components/Navbar';
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
import { useParams } from 'react-router-dom';
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext';

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const FeatureDetails = () => {
    const { id } = useParams();
    const { isArabic } = useLang();
    const [feature, setFeature] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFeature() {
            const { data } = await supabase
                .from('Features')
                .select('*')
                .eq('id', id)
                .single();
            setFeature(data);
            setLoading(false);
        }
        fetchFeature();
    }, [id]);

    if (loading) return (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    );

    if (!feature) return null;

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            {/* Hero — from Supabase */}
            <div className='featureHero' style={{ backgroundImage: `url(${feature.bgimg})` }}>
                <div className='featureHero-text'>
                    <motion.h1
                        className='about-title w610'
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        transition={{ duration: 0.7 }} viewport={vp}
                    >
                        {isArabic ? feature.name_ar : feature.name_en}
                    </motion.h1>
                    <motion.p
                        className='about-des'
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        transition={{ duration: 0.7, delay: 0.15 }} viewport={vp}
                    >
                        {isArabic ? feature.description_ar : feature.description_en}
                    </motion.p>
                    <motion.div
                        className='martop30'
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        transition={{ duration: 0.7, delay: 0.3 }} viewport={vp}
                    >
                        <FilledButton btext={isArabic ? "شاهد كيف يعمل" : "See how it works"} />
                    </motion.div>
                </div>
            </div>

            {/* How It Works — hardcoded */}
            <div className='featuresSection whitebg padding120'>
                <div className='titlewdes2'>
                    <motion.p
                        className='grey'
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        transition={{ duration: 0.6 }} viewport={vp}
                    >
                        {isArabic ? "كيف يعمل" : "How It Works"}
                    </motion.p>
                    <motion.p
                        className='valuedess'
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}
                    >
                        {isArabic
                            ? "نحوّل وصفتك الطبية إلى خطة منظمة جاهزة للتطبيق."
                            : "We're building a company where people can do their best work while feeling supported and inspired."}
                    </motion.p>
                </div>

                <div className='steps-section'>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                        <StepCard icon={cameraicon} title={isArabic ? "التقط صورة" : "Scan a Photo"} des={isArabic ? "التقط صورة للوصفة الطبية باستخدام كاميرا هاتفك الذكي." : "Simply take a photo of your prescription using your smartphone camera."} />
                    </motion.div>
                    <div className='steps-line' />
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                        <StepCard icon={aiicon} title={isArabic ? "معالجة الذكاء الاصطناعي" : "AI Processing"} des={isArabic ? "يحلل الذكاء الاصطناعي المتقدم المعلومات ويستخرجها في ثوانٍ." : "Advanced AI analyzes and extracts all information in seconds."} />
                    </motion.div>
                    <div className='steps-line' />
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} viewport={vp}>
                        <StepCard icon={verifyicon} title={isArabic ? "التحقق" : "Verify"} des={isArabic ? "راجع البيانات المستخرجة مع التحقق الذكي وفحص الأخطاء." : "Review extracted data with smart validation and error checking."} />
                    </motion.div>
                    <div className='steps-line' />
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }} viewport={vp}>
                        <StepCard icon={organizeicon} title={isArabic ? "التنظيم" : "Organize"} des={isArabic ? "تُضاف أدويتك تلقائيًا إلى مكتبتك الشخصية." : "Your medications are automatically added to your personal library."} />
                    </motion.div>
                </div>
            </div>

            {/* Key Benefits — hardcoded */}
            <div className='featuresSection bluebgi padding180'>
                <div className='titlewdes2'>
                    <motion.p
                        className='grey white margin0'
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        transition={{ duration: 0.6 }} viewport={vp}
                    >
                        {isArabic ? "الفوائد الرئيسية" : "Key Benefits"}
                    </motion.p>
                    <motion.p
                        className='valuedess white'
                        variants={fadeUp} initial="hidden" whileInView="visible"
                        transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}
                    >
                        {isArabic
                            ? "تحويل وصفتك الطبية إلى خطة منظمة جاهزة للتطبيق."
                            : "Turning your prescription into a structured, ready-to-follow plan."}
                    </motion.p>
                </div>
                <div className='benefits-grid'>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                        <BenefitCard icon={greenclock} iconBg="linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)" title={isArabic ? "يوفر الوقت" : "Saves time"} des={isArabic ? "ما كان يستغرق دقائق من الإدخال اليدوي أصبح يتطلب صورة واحدة فقط." : "What used to take minutes of manual entry now takes a single photo. Quick, effortless, and efficient."} />
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                        <BenefitCard icon={fast2} iconBg="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" title={isArabic ? "دقة فورية" : "Instant Accuracy"} des={isArabic ? "لا مزيد من كتابة أسماء الأدوية يدويًا أو القلق بشأن الأخطاء الإملائية." : "No more typing medication names manually or worrying about spelling mistakes."} />
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} viewport={vp}>
                        <BenefitCard icon={cameraicon2} iconBg="linear-gradient(135deg, #f97316 0%, #ea580c 100%)" title={isArabic ? "تعرف ذكي" : "Smart Recognition"} des={isArabic ? "يعمل مع الوصفات المكتوبة بخط اليد والمطبوعة، ويتعرف حتى على المصطلحات الطبية المعقدة." : "Works with handwritten and printed prescriptions. Even recognizes complex medical terminology."} />
                    </motion.div>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }} viewport={vp}>
                        <BenefitCard icon={shieldicon} iconBg="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" title={isArabic ? "آمن وخاص" : "Secure & Private"} des={isArabic ? "بيانات وصفتك مشفرة ومعالجة بأمان. نحن لا نخزن معلوماتك الصحية الشخصية أبدًا." : "Your prescription data is encrypted and processed securely. We never store your personal health information."} />
                    </motion.div>
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </>
    );
}

export default FeatureDetails;