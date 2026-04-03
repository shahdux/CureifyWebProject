import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
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




          

      </Routes>
    </BrowserRouter>
        
        
        
        </>
     );
}
 
export default RoutingApp;