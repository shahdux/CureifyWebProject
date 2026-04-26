import React, { useState, useEffect } from 'react';
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
                const [headerRes, benefitsRes, jobsRes, valuesRes] = await Promise.all([
                    supabase.from("Header").select("*").eq("id", 6).single(),
                    supabase.from("Work_Benefits").select("*"),
                    supabase.from("Careers").select("*"),
                    supabase.from("Values").select("*")
                ]);

                setHeader(headerRes.data);
                setBenefits(benefitsRes.data);
                setJobs(jobsRes.data);
                setValues(valuesRes.data);
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
                <div className='titlewdes2 paddingtop'>
                    <p className='grey white fsize'>
                        {isArabic ? header?.title_AR : header?.title_en}{" "}
                        <span className='greentext'>
                            {isArabic ? header?.title2_ar : header?.title2_en}
                        </span>
                    </p>
                    <p className='valuedess white'>
                        {isArabic ? header?.description_AR : header?.description_en}
                    </p>
                </div>

                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} scrollSpeed={2} />
                </div>

                <div className='forbutton'>
                    <FilledButton btext={isArabic ? (header?.button1_AR || "عرض الوظائف") : (header?.button1 || "View Open Roles")} />
                </div>
            </div>

            <div className='featuresSection whitebg padding120'>
                <div className='titlewdes2'>
                    <p className='grey'>{isArabic ? "لماذا تعمل معنا" : "Why Work With Us"}</p>
                    <p className='valuedess'>
                        {isArabic
                            ? "نحن نبني شركة حيث يمكن للناس القيام بأفضل أعمالهم بينما يشعرون بالدعم والإلهام."
                            : "We're building a company where people can do their best work while feeling supported and inspired."}
                    </p>
                </div>

                <div className='forfeatures'>
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.id}
                            className="slideCard"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <FeatureCard
                                height="280px"
                                fimg={benefit.icon}
                                fname={isArabic ? benefit.title_ar : benefit.title_en}
                                fdes={isArabic ? benefit.description_ar : benefit.description_en}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='featuresSection bluebgi'>
                <div className='titlewdes2'>
                    <p className='grey white margin0'>{isArabic ? "الوظائف المتاحة" : "Open Positions"}</p>
                    <p className='valuedess white'>
                        {isArabic ? "انضم إلينا في مهمتنا لجعل الرعاية بسيطة وموثوقة." : "Join us in our mission to make care simple and reliable."}
                    </p>
                </div>

                <div className='forfeatures'>
                    {jobs.map((job) => (
                        <Link to={`/job-application/${job.id}`} style={{ textDecoration: "none" }}>
                      
                            <JobCard
                                title={isArabic ? job.title_ar : job.title_en}
                                department={isArabic ? job.department_ar : job.department_en}
                                location={isArabic ? job.location_ar : job.location_en}
                                type={isArabic ? job.time_ar : job.time_en}
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div className='pgwithimg2 forvaluesbg'>
                <div className='titlewdes2'>
                    <p className='grey'>{isArabic ? "قيمنا" : "Our Values"}</p>
                    <p className='valuedess'>
                        {isArabic
                            ? "إدارة أدويتك بسيطة. ما عليك سوى إضافة وصفاتك الطبية، وضبط التذكيرات، وترك التطبيق يرشدك."
                            : "Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you."}
                    </p>
                </div>

                <div className='htwcards'>
                    {values.map((val) => (
                        <ValueCard
                            key={val.id}
                            bgColor={val.bgcolor}
                            icon={val.icon}
                            title={isArabic ? val.title_AR : val.title_en}
                            des={isArabic ? val.description_AR : val.description_en}
                        />
                    ))}
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </div>
    );
}

export default Careers;