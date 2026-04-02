import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import Blogs from './pages/Blogs';
const RoutingApp = () => {
    return ( 
        <>
         <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/features' element={<Features />} />
                      <Route path='/blogs' element={<Blogs />} />

          

      </Routes>
    </BrowserRouter>
        
        
        
        </>
     );
}
 
export default RoutingApp;