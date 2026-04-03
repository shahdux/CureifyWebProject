import React from 'react';
import "./BlogDetails.css";
import Navbar from '../components/Navbar';
import blogone from "../assets/blogone.svg";
import calendaricon from "../assets/calendaricon.svg";
import clockicon from "../assets/clockicon.svg";
import authoricon from "../assets/authoricon.svg";
import backarrow from "../assets/back.svg";

import { Link } from 'react-router-dom';

const BlogDetails = () => {

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='blogdetails-container'>
                  <Link to ="/blogs" style={{ textDecoration: "none" }}>
                 <p className='jobapp-back' ><img src={backarrow} alt="back" className='jobapp-back-icon' />Back to Blogs</p>
                </Link>
                                
                <div className='blogdetails-card'>
                    {/* Hero Image */}
                    <img src={blogone} alt="blog" className='blogdetails-img' />

                    {/* Content */}
                    <div className='blogdetails-content'>
                        <h1 className='blogdetails-title'>How to Stay Consistent with Your Medication</h1>

                        <div className='blogdetails-meta'>
                            <div className='blogdetails-meta-item'>
                                <img src={calendaricon} alt="date" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>March 1, 2025</p>
                            </div>
                            <div className='blogdetails-meta-item'>
                                <img src={clockicon} alt="read time" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>5 min read</p>
                            </div>
                            <div className='blogdetails-meta-item'>
                                <img src={authoricon} alt="author" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>Dr. Sarah Mitchell</p>
                            </div>
                        </div>

                        <p className='blogdetails-intro'>
                            Building habits is easier than you think. Consistency comes from small, repeatable actions that fit naturally into your daily routine — turning medication into a simple, stress-free part of your day instead of something you have to constantly remember. Over time, these small actions build confidence, reduce missed doses, and help you feel more in control of your health without adding pressure to your life.
                        </p>

                        <h2 className='blogdetails-h2'>Why Consistency Matters</h2>
                        <p className='blogdetails-p'>
                            Taking medication consistently is crucial for managing chronic conditions and maintaining your health. When medications are taken irregularly, their effectiveness can be significantly reduced, potentially leading to complications or the need for more intensive treatments.
                        </p>

                        <h2 className='blogdetails-h2'>5 Proven Strategies for Medication Consistency</h2>

                        <h3 className='blogdetails-h3'>1. Link It to an Existing Habit</h3>
                        <p className='blogdetails-p'>
                            The most effective way to remember your medication is to attach it to something you already do every day. This could be brushing your teeth, having your morning coffee, or eating breakfast. By creating this association, you're leveraging an existing habit to build a new one.
                        </p>
                        <p className='blogdetails-p'>
                            For example, if you take medication with breakfast, keep your pills next to your coffee maker or cereal. The visual cue will remind you before you even sit down to eat.
                        </p>

                        <h3 className='blogdetails-h3'>2. Use Technology to Your Advantage</h3>
                        <p className='blogdetails-p'>
                            Set daily alarms on your phone at the exact time you need to take your medication. Many smartphones also have medication reminder apps that can track when you've taken your dose and send you notifications if you miss one.
                        </p>
                        <p className='blogdetails-p'>
                            Smart pill bottles and dispensers are another option — they can alert you when it's time to take your medication and even notify a family member if you forget.
                        </p>

                        <h3 className='blogdetails-h3'>3. Prepare Your Medications in Advance</h3>
                        <p className='blogdetails-p'>
                            Weekly pill organizers are invaluable tools. Spend 10 minutes each Sunday sorting your medications for the week ahead. This not only makes it easier to remember your daily doses but also helps you quickly see if you've forgotten to take them.
                        </p>
                        <p className='blogdetails-p'>
                            If you take medications at different times of day, consider using an organizer with multiple compartments for morning, afternoon, and evening doses.
                        </p>

                        <h3 className='blogdetails-h3'>4. Keep Medications Visible</h3>
                        <p className='blogdetails-p'>
                            Out of sight, out of mind. Store your medications somewhere you'll see them regularly — on your nightstand, by your toothbrush, or next to your keys. The key is to make them impossible to overlook as part of your normal routine.
                        </p>
                        <p className='blogdetails-p'>
                            Just be sure to keep them away from moisture and heat, and always out of reach of children and pets.
                        </p>

                        <h3 className='blogdetails-h3'>5. Create a Medication Log</h3>
                        <p className='blogdetails-p'>
                            Whether it's a simple paper chart on your refrigerator or a digital tracker on your phone, logging when you take your medication creates accountability and helps you identify patterns. You'll quickly see if you consistently forget your evening dose or tend to skip medications on weekends.
                        </p>

                        <h2 className='blogdetails-h2'>What to Do When You Miss a Dose</h2>
                        <p className='blogdetails-p'>
                            Everyone misses a dose occasionally. When it happens, don't panic. Check the instructions that came with your medication or call your pharmacist for guidance. In most cases, you can take the missed dose as soon as you remember, unless it's almost time for your next dose.
                        </p>

                        <h2 className='blogdetails-h2'>Building Your Personal System</h2>
                        <p className='blogdetails-p'>
                            The best medication routine is one that works specifically for your lifestyle. Experiment with different strategies and combinations until you find what feels natural and sustainable. Remember, the goal isn't perfection — it's progress.
                        </p>
                        <p className='blogdetails-p'>
                            Start with just one or two strategies from this list. Once these become automatic, you can add more layers to your system. Over time, taking your medication will become as natural as brushing your teeth — something you do without even thinking about it.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogDetails;