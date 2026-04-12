import React, { useEffect, useState } from 'react';
import "./Testimonials.css";
import Navbar from '../components/Navbar';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import TestimonialCard from "../components/TestimonialCard";
import { supabase } from '../supabase';

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

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='careersbg forvaluesbgtest'>
                <div className='titlewdes2 paddingtop'>
                    <p className='grey white fsize'>Trusted by <span className='greentext'>Thousands.</span></p>
                    <p className='valuedess white'>Real stories from real users</p>
                </div>
                <div className="fortest">
                    {testimonials.map((item) => (
                        <TestimonialCard
                            key={item.id}
                            stars={5}
                            review={item.review_en}
                            name={item.name_en}
                        />
                    ))}
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </>
    );
}

export default Testimonials;