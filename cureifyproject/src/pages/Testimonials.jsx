import React, { useEffect, useState, useRef } from 'react';
import "./Testimonials.css";
import Navbar from '../components/Navbar';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import TestimonialCard from "../components/TestimonialCard";
import { supabase } from '../supabase';


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

    useEffect(() => {
        async function callGetAPI() {
            const res = await supabase.from('Testimonials').select('*');
            setTestimonials(res.data);
            setLoading(false);
        }
        callGetAPI();
    }, []);

    if (loading) return (
        <>
            <div className='center'><Navbar /></div>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        </>
    );

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='careersbg forvaluesbgtest'>
                <ScrollReveal>
                    <div className='titlewdes2 paddingtop'>
                        <p className='grey white fsize'>Trusted by <span className='greentext'>Thousands.</span></p>
                        <p className='valuedess white'>Real stories from real users</p>
                    </div>
                </ScrollReveal>

                <div className="fortest">
                    {testimonials.map((item) => (
                        <ScrollReveal key={item.id}>
                            <TestimonialCard
                                stars={5}
                                review={item.review_en}
                                name={item.name_en}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </div>

          
                <DownloadApp />
          

          
                <Footer />
           
        </>
    );
}

export default Testimonials;