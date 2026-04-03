import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Download from './pages/Download';
import Error from './pages/Error';
import JobApplication from './pages/JobApplication';
import BlogDetails from './pages/BlogDetails';
import FeatureDetails from './pages/FeatureDetails';


const RoutingApp = () => {
    return ( 
        <>
         <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/features' element={<Features />} />
                      <Route path='/blogs' element={<Blogs />} />
                                            <Route path='/careers' element={<Careers />} />
                      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
     <Route path='/download' element={<Download />} />
     <Route path="*" element={<Error />} />
          <Route path="job-applications" element={<JobApplication />} />
                    <Route path="blog-details" element={<BlogDetails />} />
                                        <Route path="feature-details" element={<FeatureDetails />} />

                              







          

      </Routes>
    </BrowserRouter>
        
        
        
        </>
     );
}
 
export default RoutingApp;