import whitea from "../assets/whitearrow.svg";
import "./HorizontalFeatureCard.css";
import circle from "../assets/circle.svg";
import { Link } from "react-router-dom";
import { useLang } from '../context/LanguageContext'; // Added

const HorizontalFeatureCard = (props) => {
    const { isArabic } = useLang(); // Added

    return ( 
        <div className='fcard2' style={{ 
            background: props.bgColor, 
            top: props.stickyTop,
            direction: isArabic ? 'rtl' : 'ltr', // Ensure text flows correctly
            ...props.style 
        }}>
            <img src={props.feat1img} alt="feature" className='fimages' />
            <img src={circle} alt="circle" className='circle'/>
            <div className='featpg'>
                <div className='feattitle'>{props.feattitle}</div>           
                <div className='featDes'>{props.featdes}</div>

                <Link to="/feature-details" style={{ textDecoration: "none" }}>
                    <div className='textButton'>
                        <p className='learntext'>{isArabic ? "تعرف على المزيد" : "Learn More"}</p>
                        <img 
                            src={whitea} 
                            alt="arrow" 
                            style={{ transform: isArabic ? 'rotate(180deg)' : 'none' }} // Flip arrow for Arabic
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default HorizontalFeatureCard;