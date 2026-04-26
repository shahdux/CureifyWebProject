import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./Blogs.css";
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import DownloadApp from '../components/DownloadApp';
import { supabase } from './../supabase';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Blogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState("");
    const { isArabic } = useLang();

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
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={blog.id}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={vp}
                        >
                            <Link to={`/blogs/blog${blog.id}`} style={{ textDecoration: "none" }}>
                                <BlogCard
                                    blogimg={blog.image}
                                    blogtitle={isArabic ? blog.name_ar : blog.name_en}
                                    blogdes={isArabic ? blog.description_ar : blog.description_en}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <DownloadApp />
            <Footer />
        </>
    );
}

export default Blogs;