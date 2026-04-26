import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Navlink from './Navlink';
import smalllogo from "../assets/smalllogo.svg";
import menuicon from "../assets/menuicon.svg";
import greenarrow from "../assets/greenarrow.svg";
import { useLang } from '../context/LanguageContext';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const { toggleLang, isArabic } = useLang();

    const getActiveColor = (path) => location.pathname === path ? "#00A4AA" : "";

    return (
        <>
        <div className='nav'>
            <Link to="/" style={{ textDecoration: "none" }}>
                <img src={smalllogo} alt="logo" />
            </Link>

            <div className='forlinks'>
                <Link to="/features" style={{ textDecoration: "none" }}>
                    <Navlink linkname={isArabic ? "المميزات" : "Features"} color={getActiveColor("/features")} />
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                    <Navlink linkname={isArabic ? "المدونة" : "Blogs"} color={getActiveColor("/blogs")} />
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                    <Navlink linkname={isArabic ? "من نحن" : "About"} color={getActiveColor("/about")} />
                </Link>
                <Link to="/careers" style={{ textDecoration: "none" }}>
                    <Navlink linkname={isArabic ? "الوظائف" : "Careers"} color={getActiveColor("/careers")} />
                </Link>
                <Link to="/how-it-works" style={{ textDecoration: "none" }}>
                    <Navlink linkname={isArabic ? "كيف يعمل" : "How it works"} color={getActiveColor("/how-it-works")} />
                </Link>
                <Link to="/testimonials" style={{ textDecoration: "none" }}>
                    <Navlink linkname={isArabic ? "آراء العملاء" : "Testimonials"} color={getActiveColor("/testimonials")} />
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    <Navlink linkname={isArabic ? "تواصل معنا" : "Contact"} color={getActiveColor("/contact")} />
                </Link>
                <Link to="/policies" style={{ textDecoration: "none" }}>
                    <Navlink linkname={isArabic ? "السياسات" : "Policies"} color={getActiveColor("/policies")} />
                </Link>
                <Link to="/download" style={{ textDecoration: "none" }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Navlink linkname={isArabic ? "حمّل الآن" : "Download Now"} color="#00A4AA" fontWeight="600" />
                        <img
                            src={greenarrow}
                            alt="green arrow"
                            style={{ transform: isArabic ? 'scaleX(-1)' : 'none' }}
                        />
                    </div>
                </Link>
            </div>

            <div className='for2actionss'>
                <div onClick={toggleLang} className='langbutton'>
                    <p className='langb'>{isArabic ? 'EN' : 'AR'}</p>
                </div>
                <div className='nav-hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuicon} alt="menu" className='nav-menu-icon' />
                </div>
            </div>
        </div>

        {menuOpen && (
            <div className='nav-mobile-menu'>
                <Link to="/features" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "المميزات" : "Features"} color={getActiveColor("/features")} />
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "المدونة" : "Blogs"} color={getActiveColor("/blogs")} />
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "من نحن" : "About"} color={getActiveColor("/about")} />
                </Link>
                <Link to="/careers" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "الوظائف" : "Careers"} color={getActiveColor("/careers")} />
                </Link>
                <Link to="/how-it-works" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "كيف يعمل" : "How it works"} color={getActiveColor("/how-it-works")} />
                </Link>
                <Link to="/testimonials" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "آراء العملاء" : "Testimonials"} color={getActiveColor("/testimonials")} />
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "تواصل معنا" : "Contact"} color={getActiveColor("/contact")} />
                </Link>
                <Link to="/policies" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "السياسات" : "Policies"} color={getActiveColor("/policies")} />
                </Link>
                <Link to="/download" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                    <Navlink linkname={isArabic ? "حمّل الآن" : "Download Now"} color="#00A4AA" fontWeight="600" />
                </Link>
            </div>
        )}
        </>
    );
}

export default Navbar;