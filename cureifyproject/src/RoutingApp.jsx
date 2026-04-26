import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import Hiw from './pages/Hiw';
import Testimonials from './pages/Testimonials';
import './App.css';
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const RoutingApp = () => {
    return ( 
        <>
         <BrowserRouter>
           <ScrollToTop />
      <Routes>
        
          <Route path='/' element={<Home />} />
           <Route path='/features' element={<Features />} />
                      <Route path='/blogs' element={<Blogs />} />
                                            <Route path='/careers' element={<Careers />} />
                      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
     <Route path='/download' element={<Download />} />
     <Route path="*" element={<Error />} />
          {/* <Route path="/job-applications" element={<JobApplication />} /> */}
                    {/* <Route path="/blog-details" element={<BlogDetails />} /> */}
                                        {/* <Route path="/feature-details" element={<FeatureDetails />} /> */}
                                        
                                                                                <Route path="/policies" element={<PrivacyPolicy />} />


      <Route path='/blogs/:key' element={<BlogDetails />} />   
            {/* <Route path='/features/:key' element={<FeatureDetails />} />      */}
                 <Route path='/how-it-works' element={<Hiw />} />
                                  <Route path='/testimonials' element={<Testimonials />} />


  <Route path="/job-application/:id" element={<JobApplication />} />
                   
<Route path="/feature-details/:id" element={<FeatureDetails />} />






          

      </Routes>
    </BrowserRouter>
        
        
        
        </>
     );
}
 
export default RoutingApp;