import React, { useEffect, useState } from 'react';
import "./Hiw.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import phone from "../assets/phone.svg";
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import HowCard from '../components/HowCard';
import { supabase } from '../supabase';

const Hiw = () => {
    const [howItWorks, setHowItWorks] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function callGetAPI() {
            const res = await supabase.from('How_It_Works').select('*');
            setHowItWorks(res.data);
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
 <div className='pgwithimg2'>
                <div className='titlewdes2'>
                    <p className='grey'>How It Works</p>
                    <p className='valuedess'>Three simple steps to better medication management</p>
                </div>
                <div className='forhitcomp'>
                   {howItWorks.map((card, index) => (
    <HowCard
        key={card.id}
        number={String(index + 1).padStart(2, '0')}
        title={card.title_en}
        description={card.description_en}
        img={card.img2}
        reverse={index === 1}
    />
))}
                 





                </div>
            </div>
           


            <DownloadApp />
            <Footer />
        </>
    );
}

export default Hiw;