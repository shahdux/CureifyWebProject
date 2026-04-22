
import React, { useEffect, useState } from 'react';
import "./About.css"
import Navbar from '../components/Navbar';
import about from "../assets/aboutbg.svg";
import micon from "../assets/micon.svg";
import vision from "../assets/visionimg.svg";
import video from "../assets/video.mp4";
import ValueCard from '../components/ValueCard';
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
import { supabase } from '../supabase';

const About = () => {
    const [headers, setHeaders] = useState([]);
    const [valueCards, setValueCards] = useState([]);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='aboutdiv'>
                <video className='about-video' autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
                <div className='about-overlay' />
                <div className='about-left'>
                    <h1 className='about-title'>{aboutHeader?.title_en}</h1>
                    <p className='about-des'>{aboutHeader?.description_en}</p>
                </div>
                <div className='about-right'>
                    <img src={aboutHeader?.image1} alt="Cureify app on phone" className='about-phone' />
                </div>
            </div>

            <div className='centereddiv missionbgimg'>
                <img src={micon} alt="vision icon" />
                <h2 className='mission-title'>{missionHeader?.title_en}</h2>
                <p className='mission-des'>{missionHeader?.description_en}</p>
            </div>

            <div className='aboutdiv vission'>
                <div className='about-overlay' />
                <div className='about-left ml'>
                    <h1 className='about-title'>{visionHeader?.title_en}</h1>
                    <p className='about-des widthauto'>{visionHeader?.description_en}</p>
                </div>
                <div className='about-right'>
                    <img src={vision} alt="robotic hand" className='about-phone' />
                </div>
            </div>

            <div className='pgwithimg2 forvaluesbg'>
                <div className='titlewdes2'>
                    <p className='grey'>Our Values</p>
                    <p className='valuedess'>Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free.</p>
                </div>
                <div className='htwcards'>
                    {valueCards.map((card) => (
                        <ValueCard
                            key={card.id}
                            title={card.title_en}
                            icon={card.icon}
                            des={card.description_en}
                            bgColor={card.bgcolor}
                        />
                    ))}
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </>
    );
}

export default About;