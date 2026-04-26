
// import React, { useEffect, useState } from 'react';
// import "./Features.css";
// import Navbar from '../components/Navbar';
// import HorizontalFeatureCard from '../components/HorizontalFeatureCard';
// import DownloadApp from '../components/DownloadApp';
// import Footer from '../components/Footer';
// import { supabase } from './../supabase';
// import { Link } from 'react-router-dom';

// const Features = () => {

//     const [loading, setLoading] = useState(true);
//     const [features, setFeatures] = useState("");

//     useEffect(() => {
//         async function callGetAPI() {
//             const res = await supabase.from("Features").select("*");
//             setFeatures(res.data);
//             setLoading(false);
//         }
//         callGetAPI();
//     }, []);

//    if (loading) return (
//     <div className="loader-container">
//         <div className="spinner"></div>
//     </div>
// );

//     return (
//         <>
//             <div className='center'>
//                 <Navbar />
//             </div>

//             <div className="featuresHero">
//                 <p className="fsubtitle">Your All In One</p>
//                 <h1 className="ftitle">
//                     <div className="ticker-wrapper">
//                         <div className="ticker-items">
//                             <span>Medicine Tracker</span>
//                             <span>Medicine Stock Finder</span>
//                             <span>Blood Test Analyzer</span>
//                             <span>Medicine Tracker</span>
//                         </div>
//                     </div>
//                 </h1>
//                 <p className="fdescription">
//                     Smart reminders, organized schedules, and peace of mind — right in your pocket.
//                 </p>

//                 <div className="circular-container">
//                     <svg viewBox="0 0 200 200" className="circular-text">
//                         <defs>
//                             <path
//                                 id="featurePath"
//                                 d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
//                                 fill="transparent"
//                             />
//                         </defs>
//                         <text>
//                             <textPath
//                                 href="#featurePath"
//                                 className="text-content"
//                                 textLength="440"
//                             >
//                                 EXPLORE ALL FEATURES • EXPLORE ALL FEATURES •
//                             </textPath>
//                         </text>
//                     </svg>
//                     <div className="arrow">↓</div>
//                 </div>
//             </div>

//             <div className='for fcards'>
//                 <p className='titles grey w400px'>Cureify simplifies medication management, health tracking, and more — all in one seamless, intuitive and reliable experience.</p>
//                 <div className='forcardsd'>
//                     {features.map((feature) => (
//                       // <Link to={`/features/feature${feature.id}`} style={{ textDecoration: "none", display: "block" }}>

//                         <HorizontalFeatureCard
//                             key={feature.id}
//                             feat1img={feature.image}
//                             bgColor={feature.bg_color}
//                             feattitle={feature.name_en}
//                             featdes={feature.description_en}
//                             stickyTop={feature.sticky_top}
//                             style={{ transform: feature.scale }}
//                         />
                        
//                     ))}
//                 </div>
//             </div>

//             <DownloadApp />
//             <Footer />
//         </>
//     );
// }

// export default Features;
import React, { useEffect, useState } from 'react';
import "./Features.css";
import Navbar from '../components/Navbar';
import HorizontalFeatureCard from '../components/HorizontalFeatureCard';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import { supabase } from './../supabase';
import { useLang } from '../context/LanguageContext'; // Added
import { Link } from 'react-router-dom';

const Features = () => {
    const [loading, setLoading] = useState(true);
    const [features, setFeatures] = useState([]);
    const { isArabic } = useLang(); // Added

    useEffect(() => {
        async function callGetAPI() {
            const res = await supabase.from("Features").select("*");
            setFeatures(res.data || []);
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
        <div style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
            <div className='center'>
                <Navbar />
            </div>

            <div className="featuresHero">
                <p className="fsubtitle">
                    {isArabic ? "كل ما تحتاجه في مكان واحد" : "Your All In One"}
                </p>
                <h1 className="ftitle">
                    <div className="ticker-wrapper">
                        <div className="ticker-items">
                            <span>{isArabic ? "تتبع الأدوية" : "Medicine Tracker"}</span>
                            <span>{isArabic ? "البحث عن النواقص" : "Medicine Stock Finder"}</span>
                            <span>{isArabic ? "تحليل تحاليل الدم" : "Blood Test Analyzer"}</span>
                            <span>{isArabic ? "تتبع الأدوية" : "Medicine Tracker"}</span>
                        </div>
                    </div>
                </h1>
                <p className="fdescription">
                    {isArabic 
                        ? "تذكيرات ذكية، جداول منظمة، وراحة بال — مباشرة في جيبك." 
                        : "Smart reminders, organized schedules, and peace of mind — right in your pocket."}
                </p>

                <div className="circular-container">
                    <svg viewBox="0 0 200 200" className="circular-text">
                        <defs>
                            <path id="featurePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                        </defs>
                        <text>
                            <textPath href="#featurePath" className="text-content" textLength="440">
                                {isArabic 
                                    ? "اكتشف جميع المميزات • اكتشف جميع المميزات •" 
                                    : "EXPLORE ALL FEATURES • EXPLORE ALL FEATURES •"}
                            </textPath>
                        </text>
                    </svg>
                    <div className="arrow">↓</div>
                </div>
            </div>

            <div className='for fcards'>
                <p className='titles grey w400px'>
                    {isArabic 
                        ? "Cureify يبسط إدارة الأدوية وتتبع الصحة والمزيد — كل ذلك في تجربة واحدة سلسة وبديهية وموثوقة." 
                        : "Cureify simplifies medication management, health tracking, and more — all in one seamless, intuitive and reliable experience."}
                </p>
                <div className='forcardsd'>
                
                    {features.map((feature) => (
    <HorizontalFeatureCard
        key={feature.id}
        featureId={feature.id}
        feat1img={feature.image}
        bgColor={feature.bg_color}
        feattitle={isArabic ? feature.name_ar : feature.name_en}
        featdes={isArabic ? feature.description_ar : feature.description_en}
        stickyTop={feature.sticky_top}
        style={{ transform: feature.scale }}
    />
))}
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </div>
    );
}

export default Features;
