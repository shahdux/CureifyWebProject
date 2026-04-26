
import React, { useEffect, useState } from 'react';
import "./Blogs.css";
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
import { supabase } from './../supabase';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState("");

    useEffect(() => {
        async function callGetAPI() {
            const res = await supabase.from("Blogs").select("*");
            setBlogs(res.data);
            setLoading(false);
        }
        callGetAPI();
    }, []);

   if (loading) return (
    <div className="loader-container">
        <div className="spinner"></div>
    </div>
);

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='blogs-container'>
                <div className='blogs-grid'>
                    
                    {blogs.map((blog) => (
<Link to={`/blogs/blog${blog.id}`} style={{ textDecoration: "none" }}>
                        <BlogCard
                            blogimg={blog.image}
                            blogtitle={blog.name_en}
                            blogdes={blog.description_en}
                        />
                        </Link>
                    ))}
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </>
    );
}

export default Blogs;