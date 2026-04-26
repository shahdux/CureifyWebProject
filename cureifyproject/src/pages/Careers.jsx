
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Careers.css";
import Navbar from '../components/Navbar';
import FilledButton from '../components/FilledButton';
import CircularGallery from '../components/CircularGallery';
import FeatureCard from '../components/FeatureCard';
import JobCard from '../components/JobCard';
import ValueCard from '../components/ValueCard';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const Careers = () => {
    const { isArabic } = useLang();
    const [loading, setLoading] = useState(true);
    const [header, setHeader] = useState("");
    const [benefits, setBenefits] = useState("");
    const [jobs, setJobs] = useState("");
    const [values, setValues] = useState("");

  
    useEffect(() => {
    async function fetchData() {
        const headerRes = await supabase.from("Header").select("*").eq("id", 6).single();
        const benefitsRes = await supabase.from("Work_Benefits").select("*");
        const jobsRes = await supabase.from("Careers").select("*");
        const valuesRes = await supabase.from("Values").select("*");

        setHeader(headerRes.data);
        setBenefits(benefitsRes.data);
        setJobs(jobsRes.data);
        setValues(valuesRes.data);
        setLoading(false);
    }

    fetchData();
}, []);

    if (loading) return (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    );

    return (
        <div dir={isArabic ? "rtl" : "ltr"}>
            <div className='center'>
                <Navbar />
            </div>

            <div className='careersbg'>
                <motion.div 
                    className='titlewdes2 paddingtop'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className='grey white fsize'>
                        {isArabic ? header?.title_AR : header?.title_en}{" "}
                        <span className='greentext'>
                            {isArabic ? header?.title2_ar : header?.title2_en}
                        </span>
                    </p>
                    <p className='valuedess white'>
                        {isArabic ? header?.description_AR : header?.description_en}
                    </p>
                </motion.div>
                
                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} scrollSpeed={2} />
                </div>
                
                <motion.div 
                    className='forbutton'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <FilledButton btext={isArabic ? (header?.button1_AR || "عرض الوظائف") : (header?.button1 || "View Open Roles")} />
                </motion.div>
            </div>

            <div className='featuresSection whitebg padding120'>
                <motion.div 
                    className='titlewdes2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className='grey'>{isArabic ? "لماذا تعمل معنا" : "Why Work With Us"}</p>
                    <p className='valuedess'>
                        {isArabic 
                            ? "نحن نبني شركة حيث يمكن للناس القيام بأفضل أعمالهم بينما يشعرون بالدعم والإلهام." 
                            : "We're building a company where people can do their best work while feeling supported and inspired."}
                    </p>
                </motion.div>
                
                <motion.div 
                    className='forfeatures'
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {benefits.map((benefit) => (
                        <motion.div key={benefit.id} variants={fadeUp}>
                            <FeatureCard 
                            height="280px"
                                fimg={benefit.icon} 
                                fname={isArabic ? benefit.title_ar : benefit.title_en} 
                                fdes={isArabic ? benefit.description_ar : benefit.description_en} 
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className='featuresSection bluebgi'>
                <motion.div 
                    className='titlewdes2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className='grey white margin0'>{isArabic ? "الوظائف المتاحة" : "Open Positions"}</p>
                    <p className='valuedess white'>{isArabic ? "انضم إلينا في مهمتنا لجعل الرعاية بسيطة وموثوقة." : "Join us in our mission to make care simple and reliable."}</p>
                </motion.div>
                
                <motion.div 
                    className='forfeatures'
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {jobs.map((job) => (
                        <motion.div key={job.id} variants={fadeUp}>
                            <Link to="/job-applications" style={{ textDecoration: "none" }}>
                                <JobCard
                                    title={isArabic ? job.title_ar : job.title_en}
                                    department={isArabic ? job.department_ar : job.department_en}
                                    location={isArabic ? job.location_ar : job.location_en}
                                    type={isArabic ? job.time_ar : job.time_en}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className='pgwithimg2 forvaluesbg'>
                <motion.div 
                    className='titlewdes2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className='grey'>{isArabic ? "قيمنا" : "Our Values"}</p>
                    <p className='valuedess'>
                        {isArabic 
                            ? "إدارة أدويتك بسيطة. ما عليك سوى إضافة وصفاتك الطبية، وضبط التذكيرات، وترك التطبيق يرشدك." 
                            : "Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you."}
                    </p>
                </motion.div>
                
                <motion.div 
                    className='htwcards'
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {values.map((val) => (
                        <motion.div key={val.id} variants={fadeUp}>
                            <ValueCard 
                                bgColor={val.bgcolor} 
                                icon={val.icon} 
                                title={isArabic ? val.title_AR : val.title_en} 
                                des={isArabic ? val.description_AR : val.description_en} 
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <DownloadApp />
            <Footer />
        </div>
    );
}

export default Careers;