import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Added
import "./About.css"
import Navbar from '../components/Navbar';
import micon from "../assets/micon.svg";
import vision from "../assets/visionimg.svg";
import video from "../assets/video.mp4";
import ValueCard from '../components/ValueCard';
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext';

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const About = () => {
    const [headers, setHeaders] = useState([]);
    const [valueCards, setValueCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isArabic } = useLang();

    useEffect(() => {
        const fetchData = async () => {
            const [headersRes, valuesRes] = await Promise.all([
                supabase.from('Header').select('*').in('id', [3, 4, 5]),
                supabase.from('Values').select('*')
            ]);

            if (headersRes.data) setHeaders(headersRes.data);
            if (valuesRes.data) setValueCards(valuesRes.data);
            setLoading(false);
        };

        fetchData();
    }, []);

    const aboutHeader   = headers.find(row => row.id === 3);
    const missionHeader = headers.find(row => row.id === 4);
    const visionHeader  = headers.find(row => row.id === 5);

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

            <div className='aboutdiv'>
                <video className='about-video' autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
                <div className='about-overlay' />
                <motion.div 
                    className='about-left'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h1 className='about-title'>{isArabic ? aboutHeader?.title_AR : aboutHeader?.title_en}</h1>
                    <p className='about-des'>{isArabic ? aboutHeader?.description_AR : aboutHeader?.description_en}</p>
                </motion.div>
                <motion.div 
                    className='about-right'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img src={aboutHeader?.image1} alt="Cureify phone" className='about-phone' />
                </motion.div>
            </div>

            <motion.div 
                className='centereddiv missionbgimg'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
                <img src={micon} alt="vision icon" />
                <h2 className='mission-title'>{isArabic ? missionHeader?.title_AR : missionHeader?.title_en}</h2>
                <p className='mission-des'>{isArabic ? missionHeader?.description_AR : missionHeader?.description_en}</p>
            </motion.div>

            <div className='aboutdiv vission'>
                <div className='about-overlay' />
                <motion.div 
                    className='about-left ml'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h1 className='about-title'>{isArabic ? visionHeader?.title_AR : visionHeader?.title_en}</h1>
                    <p className='about-des widthauto'>{isArabic ? visionHeader?.description_AR : visionHeader?.description_en}</p>
                </motion.div>
                <div className='about-right'  style={{ order: 1 }} >
                    <img 
                        src={vision} 
                        alt="robotic hand" 
                        className='about-phone' 
                       
                    />
                </div>
            </div>

            {/* Values Section */}
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
                            ? "إدارة أدويتك بسيطة للغاية. ما عليك سوى إضافة وصفاتك الطبية، وضبط التذكيرات، وترك التطبيق يرشدك..."
                            : "Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you..."}
                    </p>
                </motion.div>
                <div className='htwcards'>
                    {valueCards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ValueCard
                                title={isArabic ? card.title_AR : card.title_en}
                                icon={card.icon}
                                des={isArabic ? card.description_AR : card.description_en}
                                bgColor={card.bgcolor}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </div>
    );
}

export default About;