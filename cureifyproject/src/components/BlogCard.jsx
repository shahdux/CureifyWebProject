import React, { Component } from 'react';
import "./BlogCard.css";
import greenarrow from "../assets/greenarrow.svg";

const BlogCard = (props) => {
    return ( <>
    
    <div className='bogcards'>
        <img src={props.blogimg} alt="blog images" className='blogimage'/>
        <div className='blogdesdiv'>
            <p className='blogtitle'>{props.blogtitle}</p>
                        <p className='blogdes'>{props.blogdes}</p>
                         <div className='textButton'>
                                            <p className='learntext greentext'>Read More</p>
                                            <img src={greenarrow} alt="arrow" />
                                        </div>

        </div>
    </div>
    
    
    
    </> );
}
 
export default BlogCard;