import React, { Component } from 'react';
import "./BlogCard.css";
import greenarrow from "../assets/greenarrow.svg";
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

const BlogCard = (props) => {
    const { isArabic } = useLang();

    return (
        <>
            <div className='bogcards'>
                <div className='blogimgcont'>
                    
                <img src={props.blogimg} alt="blog images" className='blogimage'/>
                </div>
                <div className='blogdesdiv'>
                    <p className='blogtitle'>{props.blogtitle}</p>
                    <p className='blogdes'>{props.blogdes}</p>
                    <Link to="/blog-details" style={{ textDecoration: "none" }}>
                        <div className='textButton'>
                            <p className='learntext greentext'>{isArabic ? 'اقرأ المزيد' : 'Read More'}</p>
                            <img src={greenarrow} alt="arrow" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default BlogCard;