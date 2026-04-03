import React from 'react';
import "./Error.css";
import { Link } from 'react-router-dom';
import FilledButton from '../components/FilledButton';

const Error = () => {
   
    return (
        <div className='error'>
            <div className='error-content'>
                <p className='error-404'>404</p>
                <p className='error-title'>Page Not Found</p>
                <p className='error-des'>The page you requested could not be found. Please check the link or return to the homepage.</p>
                <Link to ="/" style={{ textDecoration: "none" }}>
                
                <FilledButton btext="Back To Home" />
                </Link>
            </div>
        </div>
    );
}

export default Error;