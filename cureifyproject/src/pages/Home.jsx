import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import phone from "../assets/phone.svg";
import FeatureCard from '../components/FeatureCard';
import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
import f4 from "../assets/f4.svg";
import step1 from "../assets/work1.svg";
import step2 from "../assets/work2.svg";
import step3 from "../assets/work3.svg";
import icon1 from "../assets/step1.svg";
import icon2 from "../assets/step2.svg";
import icon3 from "../assets/step3.svg";
import phonemock from "../assets/phonemock.svg";
import i1 from "../assets/i1.svg";
import i2 from "../assets/i2.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
import i5 from "../assets/i5.svg";
import i6 from "../assets/i6.svg";
import i7 from "../assets/i7.svg";
import i8 from "../assets/i8.svg";
import i9 from "../assets/i9.svg";
import FilledButton from '../components/FilledButton';
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 }
};

const vp = { once: true, amount: 0.2 };

const Home = () => {
    const { isArabic } = useLang();

    return (
        <>
        <div className='center'>
            <Navbar />
            <Header />
        </div>

        <Header2
            sectiontitlename={isArabic ? "عن كيورفاي" : "About Cureify"}
            sectiontitledes={isArabic
                ? "إدارة الأدوية لا ينبغي أن تكون أمرًا مرهقًا. بين الوصفات المكتوبة بخط اليد، والتذكيرات الفائتة، والأدوية غير المتوفرة، ونتائج تحاليل الدم المربكة — يصبح الالتزام أصعب مما ينبغي. في مصر، لا تزال كثير من الأسر تعتمد على الذاكرة أو ورق الملاحظات أو صور واتساب المتفرقة لمتابعة علاجاتهم المهمة."
                : "Managing medication shouldn't feel overwhelming. Between handwritten prescriptions, missed reminders, unavailable medicines, and confusing blood test results — staying consistent becomes harder than it should be. In Egypt, many families still rely on memory, paper notes, or scattered WhatsApp photos to track important treatments. And when life gets busy, health is often the first thing that slips."
            }
            pimage={phone}
        />

       <div className='featuresSection'>
    <motion.p
        className='titles w90'
        variants={fadeUp} initial="hidden" whileInView="visible"
        transition={{ duration: 0.6 }} viewport={vp}
    >
        {isArabic
            ? "إنها بساطة البقاء على المسار الصحيح. صحتك، بين يديك…"
            : "It's the simplicity of staying on track. It's your health, handled using…"}
    </motion.p>
    <div className='forfeatures'>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0 }} viewport={vp}>
            <FeatureCard fimg={f1}
                fname={isArabic ? "ماسح الوصفات بالذكاء الاصطناعي" : "AI Prescription Scanner"}
                fdes={isArabic
                    ? "أوقف عناء البحث اليدوي. يستخرج الذكاء الاصطناعي لدينا كل تفاصيل وصفتك الطبية من صورة واحدة فورًا، ويملأ تلقائيًا سلة مشترياتك وجدولك بدقة 100%."
                    : "Stop the manual search struggle. Our AI instantly extracts every detail from your prescription photo, automatically populating your cart and schedule with 100% accuracy."} />
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.1 }} viewport={vp}>
            <FeatureCard fimg={f2}
                fname={isArabic ? "مكافآت الالتزام" : "Adherence Rewards"}
                fdes={isArabic
                    ? "على عكس المنصات الأخرى التي تكافئ المشتريات فقط، نحن نكافئ الاتساق. اكسب نقاطًا مقابل تناول دوائك في الوقت المحدد والالتزام بخطة علاجك."
                    : "Unlike other platforms that only reward purchases, we reward consistency. Earn points for taking your medicine on time and staying on track with your treatment."} />
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }} viewport={vp}>
            <FeatureCard fimg={f3}
                fname={isArabic ? "دقة المخزون في الوقت الفعلي" : "Real-Time Stock Accuracy"}
                fdes={isArabic
                    ? "لا مزيد من الإلغاءات المفاجئة. يضمن تكاملنا المباشر مع شبكة موثّقة من الصيدليات أن ما تراه متوفر فعلًا على الرف."
                    : "No more surprise cancellations. Our direct integration with a verified network of pharmacies ensures what you see is actually on the shelf."} />
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }} viewport={vp}>
            <FeatureCard fimg={f4}
                fname={isArabic ? "سجلات تحاليل الدم" : "Blood Test Records"}
                fdes={isArabic
                    ? "أوقف التخمين بشأن صحتك. ارفع نتائج تحاليلك بسهولة وقارنها عبر الزمن لتتبع الاتجاهات ومعرفة استجابة جسمك للعلاج."
                    : "Stop guessing about your health. Easily upload and compare your blood test results over time to visualize trends and track how your body is responding to treatment."} />
        </motion.div>
    </div>
    <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }} viewport={vp}
    >
        <Link to="/features" style={{ textDecoration: "none" }}>
            <FilledButton btext={isArabic ? "استكشف جميع المميزات" : "Explore all features"} />
        </Link>
    </motion.div>
</div>

        <div className='pgwithimg2'>
            <div className='titlewdes'>
                <p className='grey'>{isArabic ? "كيف يعمل" : "How It works"}</p>
                <p className='dess'>
                    {isArabic
                        ? "إدارة أدويتك أمر بسيط. فقط أضف وصفاتك، واضبط التذكيرات، ودع التطبيق يرشدك بإشعارات في الوقت المناسب وتتبع سهل — للحفاظ على صحتك منظمة وخالية من التوتر."
                        : "Managing your medications is simple. Just add your prescriptions, set reminders, and let the app guide you with timely notifications and easy tracking—keeping your health organized and stress-free."}
                </p>
            </div>

            <div className='htwcards'>
                <div className='card1'>
                    <img src={step1} alt="" />
                    <p className='step1'>{isArabic ? "١. أضف ونظّم" : "1. Add & Organize"}</p>
                    <p className='step1des'>
                        {isArabic
                            ? "امسح وصفتك الطبية أو ارفعها مرة واحدة. تنظّم كيورفاي تلقائيًا أدويتك وجرعاتك ومددها وتُلوّنها لسهولة التعرف عليها."
                            : "Scan your prescription or upload it once. Cureify automatically organizes your medicines, dosages, durations, and color-codes them for easy recognition."}
                    </p>
                    <div className='floating-icon'><img src={icon1} alt="scan" /></div>
                </div>

                <div className='card1 green'>
                    <img src={step2} alt="" />
                    <p className='step1'>{isArabic ? "٢. ابقَ متسقًا" : "2. Stay Consistent"}</p>
                    <p className='step1des'>
                        {isArabic
                            ? "ابحث عن توفر الدواء، واطّلع على البدائل الآمنة، وتابع تقدم تحاليل دمك برؤى ملوّنة، وراقب مواعيدك — كل ذلك في مكان واحد."
                            : "Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place."}
                    </p>
                    <div className='floating-icon'><img src={icon2} alt="bell" /></div>
                </div>

                <div className='card1 greycard'>
                    <img src={step3} alt="" />
                    <p className='step1'>{isArabic ? "٣. ابحث وافهم" : "3. Find & Understand"}</p>
                    <p className='step1des'>
                        {isArabic
                            ? "ابحث عن توفر الدواء، واطّلع على البدائل الآمنة، وتابع تقدم تحاليل دمك برؤى ملوّنة، وراقب مواعيدك — كل ذلك في مكان واحد."
                            : "Search medicine availability, view safe alternatives, track blood test progress with color-coded insights, and monitor appointments — all in one place."}
                    </p>
                    <div className='floating-icon'><img src={icon3} alt="search" /></div>
                </div>
            </div>
        </div>

        <div className='whyUsSection'>
            <div className='fortitlewsub'>
                <p className='whiteTitles'>{isArabic ? "لماذا تختارنا" : "Why Choose Us"}</p>
                <p className='whiteDes'>
                    {isArabic
                        ? "لا ينبغي أن تشعر بأن صحتك قطع متناثرة. نجمع وصفاتك وجداولك ومؤشراتك الصحية في تطبيق موبايل واحد سهل الاستخدام."
                        : "Managing your health shouldn't feel like scattered pieces. We gather your prescriptions, schedules, and health vitals into one intuitive mobile."}
                </p>
            </div>
            <div className="w-animation-wrapper">
                <img src={phonemock} alt="phone mockup" className="w-phone-img" />
                <div className="w-icon w-icon-1"><img src={i1} /></div>
                <div className="w-icon w-icon-2"><img src={i2} /></div>
                <div className="w-icon w-icon-3"><img src={i3} /></div>
                <div className="w-icon w-icon-4"><img src={i4} /></div>
                <div className="w-icon w-icon-5"><img src={i5} /></div>
                <div className="w-icon w-icon-6"><img src={i6} /></div>
                <div className="w-icon w-icon-7"><img src={i7} /></div>
                <div className="w-icon w-icon-8"><img src={i8} /></div>
                <div className="w-icon w-icon-9"><img src={i9} /></div>
            </div>
        </div>

        <DownloadApp />
        <Footer />
        </>
    );
}

export default Home;