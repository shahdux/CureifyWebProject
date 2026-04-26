import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./Contact.css"
import Navbar from '../components/Navbar';
import locimg from "../assets/locimg.svg";
import mailicon from "../assets/greenmail.svg"
import website from "../assets/website.svg";
import numbericon from "../assets/numbericon.svg";
import FAQs from '../components/FAQs';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import { supabase } from '../supabase';
import { useLang } from '../context/LanguageContext';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 
        }
    }
};

const Contact = () => {
    const { isArabic } = useLang();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    async function saveMessage() {
        const res = await supabase.from("Messages").insert({
            "name": firstName,
            "email": lastName,
            "subject": email,
            "message": message,
        });
        setSent(true);
    }

    return (
        <div dir={isArabic ? "rtl" : "ltr"}>
            <div className='center'>
                <Navbar />
            </div>
            
            <div className="bigcontcont">
                <motion.div 
                    className="contactForm"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="contactDetailsdiv">
                        <div className='contholder'>
                            <p className="contacttitkle">
                                {isArabic ? "لنكن على تواصل" : "Let's Get in Touch"}
                            </p>
                            <p className="contactsub">
                                {isArabic 
                                    ? "املأ النموذج أدناه وسيتواصل معك فريقنا لتحديد موعد عرض تجريبي سريع. سنشرح لك كيفية العمل ونساعدك في معرفة ما إذا كان التطبيق مناسباً لك."
                                    : "Fill out the form below and our team will get in touch to schedule a quick demo. We'll walk you through how it works and help you see if it's the right fit for your business"}
                            </p>
                        </div>
                        <div className="iconswtexts">
                            <div className="iconwdes">
                                <img src={locimg} alt="location"/>
                                <p className="info">{isArabic ? "القاهرة، مصر" : "Cairo, Egypt"}</p>
                            </div>
                            <div className="iconwdes">
                                <img src={numbericon} alt="phone"/>
                                <p className="info" dir="ltr">+20123748237</p>
                            </div>
                            <div className="iconwdes">
                                <img src={website} alt="website"/>
                                <p className="info">Cureify.com</p>
                            </div>
                            <div className="iconwdes">
                                <img src={mailicon} alt="email"/>
                                <p className="info">Info@cureify.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="inputDivholder">
                        <div className="twoinputs">
                            <input onChange={(e) => setFirstName(e.target.value)} className="nameinput" type="text" placeholder={isArabic ? "الاسم" : "Name"}/>
                            <input onChange={(e) => setLastName(e.target.value)} className="nameinput" type="text" placeholder={isArabic ? "البريد الإلكتروني" : "Email"}/>
                        </div>
                        <input onChange={(e) => setEmail(e.target.value)} className="nameinput longerwidth" type="text" placeholder={isArabic ? "الموضوع" : "Subject"}/>
                        <textarea onChange={(e) => setMessage(e.target.value)} className="nameinput p2" placeholder={isArabic ? "أدخل رسالتك هنا..." : "Enter your message here.."} style={{height: '150px', paddingTop: '15px'}}/>
                        <div onClick={saveMessage} className='submitButton'>
                            <p className='subButton'>{isArabic ? "إرسال" : "Submit"}</p>
                        </div>
                        {sent && <p className='subButton sentm'>{isArabic ? "✓ تم إرسال الرسالة بنجاح!" : "✓ Message sent successfully!"}</p>}
                    </div>
                </motion.div>
            </div>

            <div className='pgwithimg2 forvaluesbg'>
                <motion.div 
                    className='titlewdes2'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className='grey'>{isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</p>
                    <p className='valuedess'>{isArabic ? "اعثر على إجابات للأسئلة الشائعة حول خدماتنا." : "Find answers to common questions about our service."}</p>
                </motion.div>

                <motion.div 
                    className='faqs-grid2'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className='faqs-grid'>
                        <motion.div variants={fadeUp}>
                            <FAQs 
                                question={isArabic ? "كيف يعمل ماسح الوصفات الطبية بالذكاء الاصطناعي؟" : "How does the AI prescription scanner work?"} 
                                answer={isArabic ? "يقوم الذكاء الاصطناعي الخاص بنا بمسح صورة وصفتك الطبية واستخراج تفاصيل الدواء تلقائياً بدقة عالية." : "Our AI scans your prescription photo and automatically extracts medication details with high accuracy."} 
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <FAQs 
                                question={isArabic ? "هل بياناتي الصحية آمنة؟" : "Is my health data secure?"} 
                                answer={isArabic ? "نعم، جميع بياناتك مشفرة ومخزنة بشكل آمن. نحن لا نشارك معلوماتك أبداً مع أطراف ثالثة." : "Yes, all your data is encrypted and stored securely. We never share your information with third parties."} 
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <FAQs 
                                question={isArabic ? "هل يمكنني ضبط تذكيرات الأدوية؟" : "Can I set medication reminders?"} 
                                answer={isArabic ? "بالتأكيد. يمكنك ضبط تذكيرات مخصصة لكل دواء بناءً على جدولك الزمني." : "Absolutely. You can set custom reminders for each medication based on your schedule."} 
                            />
                        </motion.div>
                    </div>
                    <div className='faqs-grid'>
                        <motion.div variants={fadeUp}>
                            <FAQs 
                                question={isArabic ? "كيف أجد توافر الدواء بالقرب مني؟" : "How do I find medicine stock near me?"} 
                                answer={isArabic ? "يتصل تطبيقنا بشبكة معتمدة من الصيدليات ويعرض لك توافر المخزون في الوقت الفعلي." : "Our app connects to a verified network of pharmacies and shows you real-time stock availability."} 
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <FAQs 
                                question={isArabic ? "هل كيوريفاي متاح في مصر؟" : "Is Cureify available in Egypt?"} 
                                answer={isArabic ? "نعم، كيوريفاي متاح حالياً في مصر مع خطط للتوسع في المزيد من المناطق قريباً." : "Yes, Cureify is currently available in Egypt with plans to expand to more regions soon."} 
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <FAQs 
                                question={isArabic ? "كيف أرفع نتائج فحوصات الدم الخاصة بي؟" : "How do I upload my blood test results?"} 
                                answer={isArabic ? "ببساطة التقط صورة أو ارفع ملف PDF لنتائجك وسيقوم نظامنا بتحليلها وتنظيمها لك." : "Simply take a photo or upload a PDF of your results and our system will analyze and organize them for you."} 
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <DownloadApp />
            <Footer />
        </div>
    );
}

export default Contact;