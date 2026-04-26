
import React, { useEffect, useState } from 'react';
import "./Header.css";
import cureifytext from "../assets/CUREIFY.svg";
import FilledButton from './FilledButton';
import StrokeButton from './StrokeButton';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase'; 
import { useLang } from '../context/LanguageContext'; 

const Header = () => {
    const [headerData, setHeaderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isArabic } = useLang();

    useEffect(() => {
        async function getHeader() {
            const res = await supabase
                .from("Header")
                .select("*")
                .eq("id", 1)
                .single();

            if (res.data) {
                setHeaderData(res.data);
            }
            setLoading(false);
        }
        getHeader();
    }, []);

    if (loading) return (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    );

    return (
        <>
            <div className='header'>
              
                
                <img src={cureifytext} alt="cureify text" className='textc' />
                
                <div className='forpg'>
                    <div className='forimages'>
                        <img src={headerData?.image3} alt="left" className='pa pleft' />
                        
                        <img src={headerData?.image1} alt="center" className='centerimg' />
                        
                        <img src={headerData?.imag2} alt="right" className='pa pright' />
                    </div>

                    <div className='blur'></div>
                    
                    <div className='forherotexts'>
                        <p className='heroText'>
                            {isArabic ? headerData?.title_AR : headerData?.title_en}
                        </p>
                        
                        <p className='heroSubtext'>
                            {isArabic ? headerData?.description_AR : headerData?.description_en}
                        </p>

                        <div className='for2buttons'>
                            <Link to="/features" style={{ textDecoration: "none" }}>
                                <FilledButton 
                                    btext={isArabic ? headerData?.button1_AR : headerData?.button1} 
                                />
                            </Link>
                            
                            <Link to="/download" style={{ textDecoration: "none" }}>
                                <StrokeButton 
                                    stroketext={isArabic ? headerData?.button2_AR : headerData?.button2} 
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;