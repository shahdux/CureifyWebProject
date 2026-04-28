import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./Hiw.css";
import Navbar from '../components/Navbar';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import HowCard from '../components/HowCard';
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext'; // Added

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Hiw = () => {
    const [howItWorks, setHowItWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isArabic } = useLang(); // Added

    useEffect(() => {
        async function callGetAPI() {
            const res = await supabase.from('How_It_Works').select('*');
            setHowItWorks(res.data || []);
            setLoading(false);
        }
        callGetAPI();
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
            
            <div className='pgwithimg2'>
                <motion.div 
                    className='titlewdes2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className='grey'>
                        {isArabic ? "طريقة العمل" : "How It Works"}
                    </p>
                    <p className='valuedess removemb'>
                        {isArabic 
                            ? "ثلاث خطوات بسيطة لإدارة أفضل للأدوية" 
                            : "Three simple steps to better medication management"}
                    </p>
                </motion.div>

                <div className='forhitcomp'>
                    {howItWorks.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, x: isArabic ? (index === 1 ? -50 : 50) : (index === 1 ? 50 : -50) }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <HowCard
                                number={String(index + 1).padStart(2, '0')}
                                title={isArabic ? card.title_ar : card.title_en}
                                description={isArabic ? card.description_ar : card.description_en}
                                img={card.img2}
                                reverse={index === 1}
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

export default Hiw;