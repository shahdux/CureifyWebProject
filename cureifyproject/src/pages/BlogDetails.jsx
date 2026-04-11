// import React from 'react';
// import "./BlogDetails.css";
// import Navbar from '../components/Navbar';
// import blogone from "../assets/blogone.svg";
// import calendaricon from "../assets/calendaricon.svg";
// import clockicon from "../assets/clockicon.svg";
// import authoricon from "../assets/authoricon.svg";
// import backarrow from "../assets/back.svg";

// import { Link } from 'react-router-dom';

// const BlogDetails = () => {

//     return (
//         <>
//             <div className='center'>
//                 <Navbar />
//             </div>

//             <div className='blogdetails-container'>
//                   <Link to ="/blogs" style={{ textDecoration: "none" }}>
//                  <p className='jobapp-back' ><img src={backarrow} alt="back" className='jobapp-back-icon' />Back to Blogs</p>
//                 </Link>
                                
//                 <div className='blogdetails-card'>
//                     <img src={blogone} alt="blog" className='blogdetails-img' />

//                     <div className='blogdetails-content'>
//                         <h1 className='blogdetails-title'>How to Stay Consistent with Your Medication</h1>

//                         <div className='blogdetails-meta'>
//                             <div className='blogdetails-meta-item'>
//                                 <img src={calendaricon} alt="date" className='blogdetails-meta-icon' />
//                                 <p className='blogdetails-meta-text'>March 1, 2025</p>
//                             </div>
//                             <div className='blogdetails-meta-item'>
//                                 <img src={clockicon} alt="read time" className='blogdetails-meta-icon' />
//                                 <p className='blogdetails-meta-text'>5 min read</p>
//                             </div>
//                             <div className='blogdetails-meta-item'>
//                                 <img src={authoricon} alt="author" className='blogdetails-meta-icon' />
//                                 <p className='blogdetails-meta-text'>Dr. Sarah Mitchell</p>
//                             </div>
//                         </div>

//                         <p className='blogdetails-intro'>
//                             Building habits is easier than you think. Consistency comes from small, repeatable actions that fit naturally into your daily routine — turning medication into a simple, stress-free part of your day instead of something you have to constantly remember. Over time, these small actions build confidence, reduce missed doses, and help you feel more in control of your health without adding pressure to your life.
//                         </p>

//                         <h2 className='blogdetails-h2'>Why Consistency Matters</h2>
//                         <p className='blogdetails-p'>
//                             Taking medication consistently is crucial for managing chronic conditions and maintaining your health. When medications are taken irregularly, their effectiveness can be significantly reduced, potentially leading to complications or the need for more intensive treatments.
//                         </p>

//                         <h2 className='blogdetails-h2'>5 Proven Strategies for Medication Consistency</h2>

//                         <h3 className='blogdetails-h3'>1. Link It to an Existing Habit</h3>
//                         <p className='blogdetails-p'>
//                             The most effective way to remember your medication is to attach it to something you already do every day. This could be brushing your teeth, having your morning coffee, or eating breakfast. By creating this association, you're leveraging an existing habit to build a new one.
//                         </p>
//                         <p className='blogdetails-p'>
//                             For example, if you take medication with breakfast, keep your pills next to your coffee maker or cereal. The visual cue will remind you before you even sit down to eat.
//                         </p>

//                         <h3 className='blogdetails-h3'>2. Use Technology to Your Advantage</h3>
//                         <p className='blogdetails-p'>
//                             Set daily alarms on your phone at the exact time you need to take your medication. Many smartphones also have medication reminder apps that can track when you've taken your dose and send you notifications if you miss one.
//                         </p>
//                         <p className='blogdetails-p'>
//                             Smart pill bottles and dispensers are another option — they can alert you when it's time to take your medication and even notify a family member if you forget.
//                         </p>

//                         <h3 className='blogdetails-h3'>3. Prepare Your Medications in Advance</h3>
//                         <p className='blogdetails-p'>
//                             Weekly pill organizers are invaluable tools. Spend 10 minutes each Sunday sorting your medications for the week ahead. This not only makes it easier to remember your daily doses but also helps you quickly see if you've forgotten to take them.
//                         </p>
//                         <p className='blogdetails-p'>
//                             If you take medications at different times of day, consider using an organizer with multiple compartments for morning, afternoon, and evening doses.
//                         </p>

//                         <h3 className='blogdetails-h3'>4. Keep Medications Visible</h3>
//                         <p className='blogdetails-p'>
//                             Out of sight, out of mind. Store your medications somewhere you'll see them regularly — on your nightstand, by your toothbrush, or next to your keys. The key is to make them impossible to overlook as part of your normal routine.
//                         </p>
//                         <p className='blogdetails-p'>
//                             Just be sure to keep them away from moisture and heat, and always out of reach of children and pets.
//                         </p>

//                         <h3 className='blogdetails-h3'>5. Create a Medication Log</h3>
//                         <p className='blogdetails-p'>
//                             Whether it's a simple paper chart on your refrigerator or a digital tracker on your phone, logging when you take your medication creates accountability and helps you identify patterns. You'll quickly see if you consistently forget your evening dose or tend to skip medications on weekends.
//                         </p>

//                         <h2 className='blogdetails-h2'>What to Do When You Miss a Dose</h2>
//                         <p className='blogdetails-p'>
//                             Everyone misses a dose occasionally. When it happens, don't panic. Check the instructions that came with your medication or call your pharmacist for guidance. In most cases, you can take the missed dose as soon as you remember, unless it's almost time for your next dose.
//                         </p>

//                         <h2 className='blogdetails-h2'>Building Your Personal System</h2>
//                         <p className='blogdetails-p'>
//                             The best medication routine is one that works specifically for your lifestyle. Experiment with different strategies and combinations until you find what feels natural and sustainable. Remember, the goal isn't perfection — it's progress.
//                         </p>
//                         <p className='blogdetails-p'>
//                             Start with just one or two strategies from this list. Once these become automatic, you can add more layers to your system. Over time, taking your medication will become as natural as brushing your teeth — something you do without even thinking about it.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default BlogDetails;

import React from 'react';
import "./BlogDetails.css";
import Navbar from '../components/Navbar';
import calendaricon from "../assets/calendaricon.svg";
import clockicon from "../assets/clockicon.svg";
import authoricon from "../assets/authoricon.svg";
import backarrow from "../assets/back.svg";
import blogone from "../assets/blogone.svg";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.svg";
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const BlogDetails = () => {
    // const { id } = useParams();

    const allblogs = {
        blog1: {
            name: "How to Stay Consistent with Your Medication",
            image: blogone,
            date: "March 1, 2025",
            read_time: "5 min read",
            author: "Dr. Sarah Mitchell",
            intro: "Building habits is easier than you think. Consistency comes from small, repeatable actions that fit naturally into your daily routine — turning medication into a simple, stress-free part of your day.",
            heading1: "Why Consistency Matters",
            body1: "Taking medication consistently is crucial for managing chronic conditions. When medications are taken irregularly, their effectiveness can be significantly reduced.",
            heading2: "Link It to an Existing Habit",
            body2: "The most effective way to remember your medication is to attach it to something you already do every day. This could be brushing your teeth, having your morning coffee, or eating breakfast. By creating this association, you're leveraging an existing habit to build a new one.",
            heading3: "Use Technology to Your Advantage",
            body3: "Set daily alarms on your phone at the exact time you need to take your medication. Many smartphones also have medication reminder apps that can track your doses.",
        },
        blog2: {
            name: "Why Medication Adherence Matters",
            image: blog3,
            date: "March 15, 2025",
            read_time: "6 min read",
            author: "Dr. Lena Hassan",
            intro: "Skipping a dose might seem small, but the cumulative impact on recovery and chronic condition management is significant.",
            heading1: "The Cost of Non-Adherence",
            body1: "Non-adherence to medication is one of the leading causes of preventable hospitalizations worldwide, costing both patients and healthcare systems enormously.",
            heading2: "How to Improve Adherence",
            body2: "Simple tools like pill organizers, reminder apps, and regular check-ins with your doctor can dramatically improve how consistently you take your medication.",
            heading3: "",
            body3: "",
        },
        blog3: {
            name: "Understanding Your Blood Test Results",
            image: blog2,
            date: "March 20, 2025",
            read_time: "7 min read",
            author: "Dr. Omar Fathy",
            intro: "Decode the numbers. We break down the most common lab markers and what they actually mean for your personalized health plan.",
            heading1: "CBC — Complete Blood Count",
            body1: "A CBC measures different components of your blood including red cells, white cells, and platelets — giving a broad overview of your general health.",
            heading2: "Cholesterol & Lipid Panel",
            body2: "Your lipid panel shows your HDL, LDL, and triglyceride levels — key indicators of cardiovascular risk that guide diet and medication decisions.",
            heading3: "",
            body3: "",
        },
        blog4: {
            name: "Tips for Managing Prescriptions Stress-Free",
            image: blog4,
            date: "April 1, 2025",
            read_time: "4 min read",
            author: "Dr. Mona Samir",
            intro: "Tired of pharmacy runs and refill anxiety? Learn how to automate your health routine with modern tools and smart delivery systems.",
            heading1: "Auto-Refill Services",
            body1: "Many pharmacies offer automatic refill programs that send your prescription before you run out — eliminating last-minute stress entirely.",
            heading2: "Organizing Multiple Prescriptions",
            body2: "Using a single pharmacy for all your medications makes it easier to track interactions, manage pickups, and maintain a consistent history.",
            heading3: "",
            body3: "",
        },
        blog5: {
            name: "The Link Between Adherence and Anxiety",
            image: blog5,
            date: "April 5, 2025",
            read_time: "5 min read",
            author: "Dr. Yara Nabil",
            intro: "Skipping a dose might seem small, but the cumulative impact on recovery and chronic condition management is significant.",
            heading1: "How Anxiety Affects Adherence",
            body1: "Anxiety can cause patients to avoid taking medication out of fear of side effects, creating a cycle that worsens both the anxiety and the underlying condition.",
            heading2: "Breaking the Cycle",
            body2: "Working with a doctor or therapist to address medication-related anxiety is key. Small steps, like starting with a low dose, can help build confidence gradually.",
            heading3: "",
            body3: "",
        },
        blog6: {
            name: "The Role of Technology in Modern Healthcare",
            image: blog6,
            date: "March 10, 2025",
            read_time: "4 min read",
            author: "Dr. Ahmed Khalil",
            intro: "From AI diagnostics to smart medication reminders, technology is transforming the way we manage our health — making personalized, proactive care more accessible than ever before.",
            heading1: "AI in Diagnostics",
            body1: "Artificial intelligence is helping doctors detect diseases earlier and more accurately, improving patient outcomes across many fields of medicine.",
            heading2: "Smart Reminders & Wearables",
            body2: "Wearable devices and smart apps now track vitals, activity, and medication schedules in real time — putting health management in the patient's hands.",
            heading3: "",
            body3: "",
        }
    };
const { key } = useParams();
  const detailsblog = allblogs[key];
    // const detailsblog = allBlogs[id];

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='blogdetails-container'>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                    <p className='jobapp-back'>
                        <img src={backarrow} alt="back" className='jobapp-back-icon' />
                        Back to Blogs
                    </p>
                </Link>

                <div className='blogdetails-card'>
                    <img src={detailsblog.image} alt="blog" className='blogdetails-img' />

                    <div className='blogdetails-content'>
                        <h1 className='blogdetails-title'>{detailsblog.name}</h1>

                        <div className='blogdetails-meta'>
                            <div className='blogdetails-meta-item'>
                                <img src={calendaricon} alt="date" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>{detailsblog.date}</p>
                            </div>
                            <div className='blogdetails-meta-item'>
                                <img src={clockicon} alt="read time" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>{detailsblog.read_time}</p>
                            </div>
                            <div className='blogdetails-meta-item'>
                                <img src={authoricon} alt="author" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>{detailsblog.author}</p>
                            </div>
                        </div>

                        <p className='blogdetails-intro'>{detailsblog.intro}</p>

                        <h2 className='blogdetails-h2'>{detailsblog.heading1}</h2>
                        <p className='blogdetails-p'>{detailsblog.body1}</p>

                        <h2 className='blogdetails-h2'>{detailsblog.heading2}</h2>
                        <p className='blogdetails-p'>{detailsblog.body2}</p>

                        <h2 className='blogdetails-h2'>{detailsblog.heading3}</h2>
                        <p className='blogdetails-p'>{detailsblog.body3}</p>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default BlogDetails;