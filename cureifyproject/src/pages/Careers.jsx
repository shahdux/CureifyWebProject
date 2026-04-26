
// import React, { useState, useEffect } from 'react';
// import "./Careers.css";
// import Navbar from '../components/Navbar';
// import ii1 from "../assets/heart.svg";
// import ii2 from "../assets/rocket.svg";
// import ii3 from "../assets/people.svg";
// import ii4 from "../assets/flex.svg";
// import FilledButton from '../components/FilledButton';
// import CircularGallery from '../components/CircularGallery';
// import FeatureCard from '../components/FeatureCard';
// import JobCard from '../components/JobCard';
// import ValueCard from '../components/ValueCard';
// import wclock from "../assets/wclock.svg";
// import health from "../assets/health.svg";
// import gift2 from "../assets/gift.svg";
// import DownloadApp from '../components/DownloadApp';
// import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { supabase } from '../supabase';

// const Careers = () => {
//     const [loading, setLoading] = useState(true);
//     const [jobs, setJobs] = useState("");

//     useEffect(() => {
//         async function callGetAPI() {
//             const res = await supabase.from("Careers").select("*");
//             setJobs(res.data);
//             setLoading(false);
//         }
//         callGetAPI();
//     }, []);

//    if (loading) return (
//     <div className="loader-container">
//         <div className="spinner"></div>
//     </div>
// );

//     return (
//         <>
//             <div className='center'>
//                 <Navbar />
//             </div>

//             <div className='careersbg'>
//                 <div className='titlewdes2 paddingtop'>
//                     <p className='grey white fsize'>Build Technology <span className='greentext'>That Simplifies Healing.</span></p>
//                     <p className='valuedess white'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
//                 </div>
//                 <div style={{ height: '600px', position: 'relative' }}>
//                     <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} scrollSpeed={2} />
//                 </div>
//                 <div className='forbutton'>
//                     <FilledButton btext="View Open Roles" />
//                 </div>
//             </div>

//             <div className='featuresSection whitebg padding120'>
//                 <div className='titlewdes2'>
//                     <p className='grey'>Why Work With Us</p>
//                     <p className='valuedess'>We're building a company where people can do their best work while feeling supported and inspired.</p>
//                 </div>
//                 <div className='forfeatures'>
//                     <FeatureCard fimg={ii1} fname="Meaningful Impact" fdes="Everything we build improves real lives. You'll see the direct result of your work in the health of our users." />
//                     <FeatureCard fimg={ii2} fname="Growth & Learning" fdes="We believe in mentorship, curiosity, and ownership. We provide annual learning budgets and internal workshops." />
//                     <FeatureCard fimg={ii3} fname="Collaborative Culture" fdes="Kindness, transparency, and shared success. We work as a unified team where every voice matters." />
//                     <FeatureCard fimg={ii4} fname="Flexibility" fdes="Remote-friendly environment with flexible hours. We value output and well-being over hours at a desk." />
//                 </div>
//             </div>

//             <div className='featuresSection bluebgi'>
//                 <div className='titlewdes2'>
//                     <p className='grey white margin0'>Open Positions</p>
//                     <p className='valuedess white'>Join us in our mission to make care simple and reliable.</p>
//                 </div>
//                 <div className='forfeatures'>
//                     {jobs.map((job) => (
//                         <Link to="/job-applications" style={{ textDecoration: "none" }}>
//                             <JobCard
//                                 title={job.title_en}
//                                 department={job.department_en}
//                                 location={job.location_en}
//                                 type={job.time_en}
//                             />
//                         </Link>
//                     ))}
//                 </div>
//             </div>

//             <div className='pgwithimg2 forvaluesbg'>
//                 <div className='titlewdes2'>
//                     <p className='grey'>Our Values</p>
//                     <p className='valuedess'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
//                 </div>
//                 <div className='htwcards'>
//                     <ValueCard bgColor="linear-gradient(135deg, #0aafa0 0%, #077a6e 100%)" icon={wclock} title="Never Miss a Dose" des="Get started in minutes with your existing system." />
//                     <ValueCard bgColor="linear-gradient(135deg, #4a5568 0%, #2d3748 100%)" icon={health} title="Save Time & Effort" des="No more manual searches or calls to pharmacies. Everything you need is organized and ready with a single tap." />
//                     <ValueCard bgColor="linear-gradient(135deg, #1a3a6e 0%, #0d2347 100%)" icon={gift2} title="Reward Your Commitment" des="Your consistency matters. Earn points and perks simply by staying on track with your health." />
//                 </div>
//             </div>

//             <DownloadApp />
//             <Footer />
//         </>
//     );
// }

// export default Careers;
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
    const [header, setHeader] = useState(null);
    const [benefits, setBenefits] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [values, setValues] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const headerRes = await supabase.from("Header").select("*").eq("id", 6).single();
                
                const benefitsRes = await supabase.from("Work_Benefits").select("*");
                
                const jobsRes = await supabase.from("Careers").select("*");
                
                const valuesRes = await supabase.from("Values").select("*");

                setHeader(headerRes.data);
                setBenefits(benefitsRes.data || []);
                setJobs(jobsRes.data || []);
                setValues(valuesRes.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
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