import React, { useEffect, useState, useRef } from 'react';
import "./Testimonials.css";
import Navbar from '../components/Navbar';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import TestimonialCard from "../components/TestimonialCard";
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext'; // Added

const ScrollReveal = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setVisible(true);
            });
        });
        observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {children}
        </div>
    );
};

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isArabic } = useLang(); // Added

    useEffect(() => {
        async function callGetAPI() {
            const res = await supabase.from('Testimonials').select('*');
            setTestimonials(res.data || []);
            setLoading(false);
        }
        callGetAPI();
    }, []);

    if (loading) return (
        <div dir={isArabic ? "rtl" : "ltr"}>
            <div className='center'><Navbar /></div>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        </div>
    );

    return (
        <div dir={isArabic ? "rtl" : "ltr"}>
            <div className='center'>
                <Navbar />
            </div>

            <div className='careersbg forvaluesbgtest'>
                <ScrollReveal>
                    <div className='titlewdes2 paddingtop'>
                        <p className='grey white fsize'>
                            {isArabic ? "موثوق من قبل " : "Trusted by "}
                            <span className='greentext'>{isArabic ? "الآلاف." : "Thousands."}</span>
                        </p>
                        <p className='valuedess white'>
                            {isArabic ? "قصص حقيقية من مستخدمين حقيقيين" : "Real stories from real users"}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="fortest">
                    {testimonials.map((item) => (
                        <ScrollReveal key={item.id}>
                            <TestimonialCard
                                stars={5}
                                review={isArabic ? item.review_ar : item.review_en}
                                name={isArabic ? item.name_ar : item.name_en}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </div>
    );
}

export default Testimonials;