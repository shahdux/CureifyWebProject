import React from 'react';
import { motion } from 'framer-motion';
import "./Download.css"
import Navbar from '../components/Navbar';
import download from "../assets/downphone.svg";
import step1 from "../assets/work1.svg";
import step2 from "../assets/work2.svg";
import step3 from "../assets/work3.svg";
import apple from "../assets/apple.svg";
import play from "../assets/play.svg";
import checkicon from "../assets/checkicon.svg";
import mailicon from "../assets/mailicon.svg";
import Footer from '../components/Footer';
import DownloadButton from '../components/DownloadButton';
import FAQs from '../components/FAQs';
import { useLang } from '../context/LanguageContext';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Download = () => {
    const { isArabic } = useLang();

    return ( 
    <div dir={isArabic ? "rtl" : "ltr"}>
      <div className='center'>
        <Navbar />
      </div>

      <div className='aboutdiv downloadbg'>
        <div className='about-left22'>
            <motion.h1 className='about-title downloadwidthttitle' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.7 }} viewport={vp}>
                {isArabic ? "بسط إدارة أدويتك وحمل التطبيق الآن" : "Simplify Your Medication Management & Download Now"}
            </motion.h1>
            <motion.p className='about-des' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.7, delay: 0.15 }} viewport={vp}>
                {isArabic 
                    ? "يساعدك كيوريفاي على بناء عادات صحية من خلال تنبيهات ذكية، جداول مخصصة، ومتابعة التقدم—كل ذلك في تطبيق واحد بسيط وجميل." 
                    : "Cureify helps you build healthy habits with smart reminders, personalized schedules, and progress tracking—all in one beautifully simple app."}
            </motion.p>
            <motion.div className='for2buttons2 martop20' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.7, delay: 0.3 }} viewport={vp}>
                <DownloadButton softwareimg={apple} downtext={isArabic ? "حمل من" : "Download on the"} store="App Store"/>
                <DownloadButton softwareimg={play} downtext={isArabic ? "احصل عليه من" : "Get it on"} store="Google Play"/>
            </motion.div>
        </div>
        <motion.img  src={download} alt="Cureify app on phone"  className='about-phone2' initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={vp}/>
      </div>

      <div className='pgwithimg2'>
        <div className='titlewdes'>
            <motion.p className='grey' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                {isArabic ? "كيف يعمل التطبيق" : "How It works"}
            </motion.p>
            <motion.p className='dess' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                {isArabic 
                    ? "إدارة أدويتك أصبحت بسيطة. فقط أضف وصفاتك الطبية، اضبط التنبيهات، واترك التطبيق يوجهك بإشعارات في الوقت المناسب وتتبع سهل—لتبقى صحتك منظمة وخالية من التوتر." 
                    : "Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free."}
            </motion.p>
        </div>

        <div className='htwcards'>
            <motion.div className='card1' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                <img src={step1} alt="" />
                <p className='step1'>{isArabic ? "1. أضف ونظم" : "1. Add & Organize"}</p>
                <p className='step1des'>
                    {isArabic 
                        ? "امسح وصفتك الطبية ضوئياً أو ارفعها مرة واحدة. يقوم كيوريفاي تلقائياً بتنظيم الأدوية، الجرعات، والمواعيد، ويميزها بالألوان لسهولة التعرف عليها." 
                        : "Scan your prescription or upload it once. Cureify automatically organizes your medicines, dosages, durations, and color-codes them for easy recognition."}
                </p>
            </motion.div>

            <motion.div className='card1 green' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                <img src={step2} alt="" />
                <p className='step1'>{isArabic ? "2. حافظ على الاستمرارية" : "2. Stay Consistent"}</p>
                <p className='step1des'>
                    {isArabic 
                        ? "تلقَ تنبيهات ذكية مخصصة لجدولك اليومي. تتبع التزامك بمرور الوقت وشارك التقدم مع عائلتك أو طبيبك لضمان أفضل النتائج الصحية." 
                        : "Receive smart reminders tailored to your daily schedule. Track your adherence over time and share progress with family or doctors to ensure better health outcomes."}
                </p>
            </motion.div>

            <motion.div className='card1 greycard' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }} viewport={vp}>
                <img src={step3} alt="" />
                <p className='step1'>{isArabic ? "3. ابحث وافهم" : "3. Find & Understand"}</p>
                <p className='step1des'>
                    {isArabic 
                        ? "ابحث عن توفر الأدوية، واطلع على البدائل الآمنة، وتتبع نتائج فحوصات الدم برؤى ملونة، وراقب مواعيدك — كل ذلك في مكان واحد." 
                        : "Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place."}
                </p>
            </motion.div>
        </div>
      </div>

      <div className='pgwithimg2 forvaluesbg bluebgi'>
        <div className='titlewdes2'>
            <motion.p className='grey white margin0' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                {isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            </motion.p>
            <motion.p className='valuedess white' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                {isArabic ? "اعثر على إجابات للأسئلة الشائعة حول خدماتنا." : "Find answers to common questions about our service."}
            </motion.p>
        </div>
        <div className='faqs-grid2'>
            <div className='faqs-grid'>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <FAQs 
                        question={isArabic ? "كيف يعمل ماسح الوصفات الطبية بالذكاء الاصطناعي؟" : "How does the AI prescription scanner work?"} 
                        answer={isArabic ? "يقوم الذكاء الاصطناعي لدينا بمسح صورة وصفتك الطبية واستخراج تفاصيل الدواء تلقائياً بدقة عالية." : "Our AI scans your prescription photo and automatically extracts medication details with high accuracy."} 
                    />
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                    <FAQs 
                        question={isArabic ? "هل بياناتي الصحية آمنة؟" : "Is my health data secure?"} 
                        answer={isArabic ? "نعم، جميع بياناتك مشفرة ومخزنة بشكل آمن. نحن لا نشارك معلوماتك أبداً مع أطراف ثالثة." : "Yes, all your data is encrypted and stored securely. We never share your information with third parties."} 
                    />
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} viewport={vp}>
                    <FAQs 
                        question={isArabic ? "هل يمكنني ضبط تنبيهات للأدوية؟" : "Can I set medication reminders?"} 
                        answer={isArabic ? "بالتأكيد. يمكنك ضبط تنبيهات مخصصة لكل دواء بناءً على جدولك الخاص." : "Absolutely. You can set custom reminders for each medication based on your schedule."} 
                    />
                </motion.div>
            </div>
            <div className='faqs-grid'>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <FAQs 
                        question={isArabic ? "كيف أجد توافر الدواء بالقرب مني؟" : "How do I find medicine stock near me?"} 
                        answer={isArabic ? "يتصل تطبيقنا بشبكة موثوقة من الصيدليات ويظهر لك توافر المخزون في الوقت الفعلي." : "Our app connects to a verified network of pharmacies and shows you real-time stock availability."} 
                    />
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
                    <FAQs 
                        question={isArabic ? "هل كيوريفاي متاح في مصر؟" : "Is Cureify available in Egypt?"} 
                        answer={isArabic ? "نعم، كيوريفاي متاح حالياً في مصر مع خطط للتوسع في المزيد من المناطق قريباً." : "Yes, Cureify is currently available in Egypt with plans to expand to more regions soon."} 
                    />
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} viewport={vp}>
                    <FAQs 
                        question={isArabic ? "كيف يمكنني رفع نتائج فحص الدم؟" : "How do I upload my blood test results?"} 
                        answer={isArabic ? "بساطة التقط صورة أو ارفع ملف PDF لنتائجك وسيقوم نظامنا بتحليلها وتنظيمها لك." : "Simply take a photo or upload a PDF of your results and our system will analyze and organize them for you."} 
                    />
                </motion.div>
            </div>
        </div>
      </div>

      <div className='policies-container'>
                <motion.div className='policies-card' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6 }} viewport={vp}>
                    <p className='policies-title'>{isArabic ? "لماذا تحمل تطبيقنا؟" : "Why Download Our App?"}</p>
                    <p className='policies-sub'>{isArabic ? "كل ما تحتاجه في تطبيق واحد قوي" : "Everything you need in one powerful application"}</p>
                    <div className='policies-list'>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>{isArabic ? "أداء سريع وخفيف" : "Fast and lightweight performance"}</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>{isArabic ? "تشفير آمن بين الطرفين" : "Secure end-to-end encryption"}</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>{isArabic ? "تحديثات تلقائية" : "Automatic updates"}</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>{isArabic ? "مزامنة عبر الأنظمة" : "Cross-platform sync"}</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>{isArabic ? "دعم وضع العمل بدون إنترنت" : "Offline mode support"}</p>
                        </div>
                        <div className='policies-item'>
                            <img src={checkicon} alt="check" className='policies-check' />
                            <p className='policies-text'>{isArabic ? "دعم عملاء على مدار الساعة" : "24/7 customer support"}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='policies-card' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.15 }} viewport={vp}>
                    <p className='policies-title'>{isArabic ? "متطلبات النظام" : "System Requirements"}</p>
                    <p className='policies-sub'>{isArabic ? "تأكد من توافق جهازك" : "Make sure your device is compatible"}</p>
                    <div className='policies-requirements'>
                        <div className='policies-platform'>
                            <p className='policies-platform-title'>IOS</p>
                            <p className='policies-text'>{isArabic ? "• نظام iOS 15.0 أو أحدث" : "• iOS 15.0 or later"}</p>
                            <p className='policies-text'>{isArabic ? "• مساحة فارغة لا تقل عن 200 ميجابايت" : "• At least 200MB free storage"}</p>
                        </div>
                        <div className='policies-platform'>
                            <p className='policies-platform-title'>Android</p>
                            <p className='policies-text'>{isArabic ? "• نظام Android 8.0 أو أحدث" : "• Android 8.0 or later"}</p>
                            <p className='policies-text'>{isArabic ? "• مساحة فارغة لا تقل عن 200 ميجابايت" : "• At least 200MB free storage"}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className='policies-banner' variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }} viewport={vp}>
                    <img src={mailicon} alt="mail" className='policies-mail-icon' />
                    <p className='policies-banner-title'>
                        {isArabic ? "إذا واجهت أي مشاكل أو كان لديك ملاحظات، يرجى التواصل معنا:" : "If you encounter any issues or have feedback, please contact us:"}
                    </p>
                    <p className='policies-banner-sub'>
                        {isArabic ? "لديك أسئلة أو ملاحظات؟ نود سماعها منك. فريق الدعم لدينا هنا للمساعدة!" : "Have questions or feedback? We'd love to hear from you. Our support team is here to help!"}
                    </p>
                    <div className='policies-email-btn'>
                        <p className='policies-email'>support@cureifyapp.com</p>
                    </div>
                </motion.div>
      </div>

      <Footer />
    </div> );
}

export default Download;