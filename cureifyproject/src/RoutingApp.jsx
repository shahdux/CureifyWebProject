import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
const RoutingApp = () => {
    return ( 
        <>
         <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          

      </Routes>
    </BrowserRouter>
        
        
        
        </>
     );
}
 
export default RoutingApp;