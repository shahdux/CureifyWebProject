import React, { Component } from 'react';
import "./Blogs.css";
import Navbar from '../components/Navbar';
import blogone from "../assets/blogone.svg";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.svg";

import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';





const Blogs = () => {
    return (<>
      <div className='center'>

        <Navbar />
        </div>
    <div className='blogs-container'>
               
                
                <div className='blogs-grid'>
                    <BlogCard
                    blogimg={blogone}
                        blogtitle="How to Stay Consistent with Your Medication"
                        blogdes="Building habits is easier than you think. Small, consistent actions fit naturally into your routine—making medication simple and stress-free."
                    />
                   <BlogCard
    blogimg={blog6}
    blogtitle="The Role of Technology in Modern Healthcare"
    blogdes="From AI diagnostics to smart medication reminders, technology is transforming the way we manage our health — making personalized, proactive care more accessible than ever before."
/>
 </div>

               
                <div className='blogs-grid'>
                    <BlogCard
                        blogimg={blog2}
                        blogtitle="Why Medication Adherence Matters"
                        blogdes="Skipping a dose might seem small, but the cumulative impact on recovery and chronic condition management is significant."
                    />
                    <BlogCard
                        blogimg={blog3}
                        blogtitle="Understanding Your Blood Test Results"
                        blogdes="Decode the numbers. We break down the most common lab markers and what they actually mean for your personalized health plan."
                    />
 </div>
<div className='blogs-grid'>

                    <BlogCard
                        blogimg={blog4}
                        blogtitle="Tips for Managing Prescriptions Stress-Free"
                        blogdes="Tired of pharmacy runs and refill anxiety? Learn how to automate your health routine with modern tools and smart delivery systems."
                    />
                    <BlogCard
                        blogimg={blog5}
                        blogtitle="The Link Between Adherence and Anxiety"
                        blogdes="Skipping a dose might seem small, but the cumulative impact on recovery and chronic condition management is significant."
                    />
</div>
               
            </div>
     <DownloadApp />
                
                <Footer />
    
    
    
    
    </>  );
}
 
export default Blogs;