

import whitea from "../assets/whitearrow.svg";
import "./HorizontalFeatureCard.css";
import circle from "../assets/circle.svg";
import { Link } from "react-router-dom";
const HorizontalFeatureCard = (props) => {
    return ( 


        <div className='fcard2' style={{ 
            background: props.bgColor, 
            top: props.stickyTop,
            ...props.style // This spreads the transform and zIndex
        }}>
            <img src={props.feat1img} alt="feature" className='fimages' />
            <img src={circle} alt="circle" className='circle'/>
            <div className='featpg'>
                <div className='feattitle'>{props.feattitle}</div>           
                <div className='featDes'>{props.featdes}</div>
                                                                        <Link  to="/feature-details" style={{ textDecoration: "none" }} >

                <div className='textButton'>
                    <p className='learntext'>Learn More</p>
                    <img src={whitea} alt="arrow" />
                </div></Link>
            </div>
        </div>
    );
}
export default HorizontalFeatureCard;