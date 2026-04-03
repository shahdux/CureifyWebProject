import React, { Component } from 'react';
import "./BlogCard.css";
import greenarrow from "../assets/greenarrow.svg";
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    return ( <>
    
    <div className='bogcards'>
        <img src={props.blogimg} alt="blog images" className='blogimage'/>
        <div className='blogdesdiv'>
            <p className='blogtitle'>{props.blogtitle}</p>
                        <p className='blogdes'>{props.blogdes}</p>
                                                                                <Link  to="/blog-details" style={{ textDecoration: "none" }} >

                         <div className='textButton'>
                                            <p className='learntext greentext'>Read More</p>
                                            <img src={greenarrow} alt="arrow" />
                                        </div></Link>

        </div>
    </div>
    
    
    
    </> );
}
 
export default BlogCard;