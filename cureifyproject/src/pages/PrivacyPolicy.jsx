import React from 'react';
import { motion } from 'framer-motion';
import "./PrivacyPolicy.css";
import Navbar from '../components/Navbar';
import mailicon from "../assets/mailicon.svg";
import DownloadApp from '../components/DownloadApp';
import Footer from '../components/Footer';
import { useLang } from '../context/LanguageContext';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const PrivacyPolicy = () => {
    const { isArabic } = useLang();

    return (
        <div dir={isArabic ? "rtl" : "ltr"}>
            <div className='center'>
                <Navbar />
            </div>

            <div className='privacy-hero'>
                <div className='privacy-overlay' />
                <motion.div 
                    className='privacy-hero-content'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='privacy-hero-title'>
                        {isArabic ? "سياسة خصوصية المستخدم وسلامة الصحة في كيوريفاي" : "Cureify User Privacy & Health Safety Policy"}
                    </h1>
                    <p className='privacy-hero-des'>
                        {isArabic 
                            ? "صحتك وأمن بياناتك هما أهم أولوياتنا. تعرف على كيفية حماية معلوماتك وضمان تجربة آمنة." 
                            : "Your health and data security are our top priorities. Learn how we protect your information and ensure a safe experience."}
                    </p>
                </motion.div>
            </div>

            <div className='privacy-container'>

                {/* Section 1 */}
                <motion.div className='privacy-card' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>{isArabic ? "1. خصوصية البيانات" : "1. Data Privacy"}</p>
                    </div>
                    <p className='privacy-p'>{isArabic ? "كيوريفاي يحترم خصوصيتك." : "Cureify respects your privacy."}</p>
                    <p className='privacy-p'>
                        {isArabic 
                            ? "نحن نجمع فقط المعلومات الضرورية لمساعدتك في إدارة أدويتك وروتينك الصحي. قد يشمل ذلك:" 
                            : "We only collect information that is necessary to help you manage your medications and health routine. This may include:"}
                    </p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• {isArabic ? "أسماء الأدوية وجداولها" : "Medicine names and schedules"}</p>
                            <p className='privacy-bullet'>• {isArabic ? "تفضيلات التذكير" : "Reminder preferences"}</p>
                            <p className='privacy-bullet'>• {isArabic ? "الوصفات الطبية المرفوعة" : "Uploaded prescriptions"}</p>
                            <p className='privacy-bullet'>• {isArabic ? "نشاط البحث عن الصيدليات" : "Pharmacy search activity"}</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• {isArabic ? "نتائج فحوصات الدم والسجلات الصحية" : "Blood test results and health records"}</p>
                        </div>
                    </div>
                    <p className='privacy-p'>{isArabic ? "تُستخدم بياناتك فقط من أجل:" : "Your data is used only to:"}</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• {isArabic ? "إرسال التذكيرات" : "Send reminders"}</p>
                            <p className='privacy-bullet'>• {isArabic ? "عرض التقدم الصحي" : "Show health progress"}</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• {isArabic ? "تنظيم أدويتك" : "Organize your medications"}</p>
                            <p className='privacy-bullet'>• {isArabic ? "مساعدتك في العثور على توافر الأدوية" : "Help you find medicine availability"}</p>
                        </div>
                    </div>
                    <div className='privacy-highlight red'>
                        <p className='privacy-highlight-text'>
                            {isArabic ? "كيوريفاي لا يبيع أو يشارك البيانات الصحية الشخصية مع أطراف ثالثة." : "Cureify does not sell or share personal health data with third parties."}
                        </p>
                    </div>
                </motion.div>

                {/* Section 2 */}
                <motion.div className='privacy-card' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>{isArabic ? "2. إخلاء مسؤولية طبي" : "2. Medical Disclaimer"}</p>
                    </div>
                    <p className='privacy-p'>
                        {isArabic 
                            ? "كيوريفاي هو أداة لإدارة الأدوية ودعم الصحة، وليس خدمة تشخيص طبي أو علاج." 
                            : "Cureify is a medicine management and health support tool, not a medical diagnosis or treatment service."}
                    </p>
                    <p className='privacy-bullet'>• {isArabic ? "التطبيق لا يحل محل الأطباء أو الصيادلة أو المهنيين الطبيين." : "The app does not replace doctors, pharmacists, or medical professionals."}</p>
                    <p className='privacy-bullet'>• {isArabic ? "شروحات فحوصات الدم مبسطة للفهم ولا ينبغي استخدامها للتشخيص الذاتي." : "Blood test explanations are simplified for understanding and should not be used for self-diagnosis."}</p>
                    <p className='privacy-bullet'>• {isArabic ? "يجب على المستخدمين دائماً استشارة الطبيب قبل تغيير أو إيقاف الدواء." : "Users must always consult a doctor before changing or stopping medication."}</p>
                    <div className='privacy-highlight green'>
                        <p className='privacy-highlight-text'>
                            {isArabic ? "يجب على المستخدمين دائماً استشارة الطبيب قبل تغيير أو إيقاف الدواء." : "Users must always consult a doctor before changing or stopping medication."}
                        </p>
                    </div>
                </motion.div>

                {/* Section 3 */}
                <motion.div className='privacy-card' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>{isArabic ? "3. استخدام معلومات فحوصات الدم والمعلومات الصحية" : "3. Blood Test & Health Information Use"}</p>
                    </div>
                    <p className='privacy-p'>{isArabic ? "تم تصميم تحليل فحوصات الدم في كيوريفاي من أجل:" : "Blood test analysis in Cureify is designed to:"}</p>
                    <p className='privacy-bullet'>• {isArabic ? "مساعدة المستخدمين على فهم النتائج بصرياً" : "Help users understand results visually"}</p>
                    <p className='privacy-bullet'>• {isArabic ? "تتبع التقدم بمرور الوقت" : "Track progress over time"}</p>
                    <div className='privacy-highlight blue'>
                        <p className='privacy-highlight-text'>
                            {isArabic ? "يوفر التطبيق رؤى تعليمية فقط، وليس قرارات طبية." : "The app provides educational insights only, not medical decisions."}
                        </p>
                    </div>
                </motion.div>

                {/* Section 4 */}
                <motion.div className='privacy-card' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>{isArabic ? "4. معلومات الأدوية" : "4. Medication Information"}</p>
                    </div>
                    <p className='privacy-p'>{isArabic ? "يساعد كيوريفاي المستخدمين على:" : "Cureify helps users:"}</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• {isArabic ? "تتبع جداول الأدوية" : "Track medication schedules"}</p>
                            <p className='privacy-bullet'>• {isArabic ? "تلقي التذكيرات" : "Receive reminders"}</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-bullet'>• {isArabic ? "العثور على الأدوية المتوفرة" : "Find available medicines"}</p>
                        </div>
                    </div>
                    <p className='privacy-label'>{isArabic ? "ومع ذلك:" : "However:"}</p>
                    <p className='privacy-bullet'>• {isArabic ? "يعتمد توفر الأدوية على الصيدليات وقد يتغير." : "Medicine availability depends on pharmacies and may change."}</p>
                    <p className='privacy-bullet'>• {isArabic ? "اقتراحات الأدوية البديلة هي معلوماتية فقط ويجب تأكيدها مع صيدلي أو طبيب." : "Alternative medicine suggestions are informational and must be confirmed with a pharmacist or doctor."}</p>
                </motion.div>

                {/* Section 5 */}
                <motion.div className='privacy-card' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>{isArabic ? "5. مسؤولية التذكير" : "5. Reminder Responsibility"}</p>
                    </div>
                    <p className='privacy-p'>{isArabic ? "يوفر كيوريفاي تذكيرات ذكية، ولكن:" : "Cureify provides smart reminders, but:"}</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-label'>{isArabic ? "مسؤولية المستخدم" : "User Responsibility"}</p>
                            <p className='privacy-p'>
                                {isArabic ? "المستخدمون مسؤولون عن تفعيل الإشعارات والتأكد من أن إعدادات أجهزتهم تسمح بتنبيهات التطبيق." : "Users are responsible for enabling notifications and ensuring their device settings allow for app alerts."}
                            </p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-label'>{isArabic ? "تحديد المسؤولية" : "Limitation of Liability"}</p>
                            <p className='privacy-p'>
                                {isArabic ? "التذكيرات الفائتة بسبب إعدادات الهاتف أو مشاكل الجهاز ليست من مسؤولية التطبيق." : "Missed reminders due to phone settings or device issues are not the app's liability."}
                            </p>
                        </div>
                    </div>
                    <div className='privacy-highlight blue'>
                        <p className='privacy-highlight-text'>
                            {isArabic ? "التطبيق يدعم الالتزام ولكنه لا يضمن النتائج الطبية." : "The app supports adherence but does not guarantee medical outcomes."}
                        </p>
                    </div>
                </motion.div>

                {/* Section 6 */}
                <motion.div className='privacy-card' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>{isArabic ? "6. سلامة المستخدم" : "6. User Safety"}</p>
                    </div>
                    <p className='privacy-p'>{isArabic ? "لحماية المستخدمين، قمنا بتنفيذ العديد من الميزات:" : "To protect users, we've implemented several features:"}</p>
                    <div className='privacy-safety-grid'>
                        <div className='privacy-safety-item'>
                            <p className='privacy-label'>{isArabic ? "مؤشرات بصرية واضحة" : "Clear visual indicators"}</p>
                            <p className='privacy-p'>{isArabic ? "تُستخدم لنتائج الفحوصات لضمان سهولة تفسير النتائج بلمحة سريعة." : "Used for test results to ensure findings are easy to interpret at a glance."}</p>
                        </div>
                        <div className='privacy-safety-item'>
                            <p className='privacy-label'>{isArabic ? "تفسيرات بسيطة" : "Simple explanations"}</p>
                            <p className='privacy-p'>{isArabic ? "مصممة لتجنب الارتباك الطبي وتوفير الوضوح لغير المتخصصين." : "Designed to avoid medical confusion and provide clarity for non-professionals."}</p>
                        </div>
                        <div className='privacy-safety-item'>
                            <p className='privacy-label'>{isArabic ? "تذكيرات صوتية" : "Voice reminders"}</p>
                            <p className='privacy-p'>{isArabic ? "مصممة خصيصاً لدعم المستخدمين المسنين وذوي احتياجات الوصول." : "Specifically designed to support elderly users and those with accessibility needs."}</p>
                        </div>
                    </div>
                    <div className='privacy-highlight teal'>
                        <p className='privacy-highlight-text'>
                            {isArabic ? "تم تصميم كيوريفاي لتقليل الأخطاء الدوائية، وليس ليحل محل الرعاية المهنية." : "Cureify is designed to reduce medication mistakes, not replace professional care."}
                        </p>
                    </div>
                </motion.div>

                {/* Section 7 */}
                <motion.div className='privacy-card' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <div className='privacy-card-header'>
                        <p className='privacy-card-title'>{isArabic ? "7. الفئة العمرية للاستخدام" : "7. Age Use"}</p>
                    </div>
                    <p className='privacy-p'>{isArabic ? "التطبيق مخصص لـ:" : "The app is intended for:"}</p>
                    <div className='privacy-two-col'>
                        <div className='privacy-col'>
                            <p className='privacy-label'>{isArabic ? "👤 المراهقين" : "👤 Teenagers"}</p>
                            <p className='privacy-p'>{isArabic ? "لإدارة أدويتهم وروتينهم الصحي بأنفسهم." : "Managing their own medication and health routines."}</p>
                        </div>
                        <div className='privacy-col'>
                            <p className='privacy-label'>{isArabic ? "👤 البالغين" : "👤 Adults"}</p>
                            <p className='privacy-p'>{isArabic ? "لإدارة أدويتهم وروتينهم الصحي بأنفسهم." : "Managing their own medication and health routines."}</p>
                        </div>
                    </div>
                    <p className='privacy-bullet'>• {isArabic ? "يجب على الأطفال استخدام التطبيق فقط تحت إشراف الوالدين أو الأوصياء." : "Children should use the app only with parental or guardian supervision."}</p>
                </motion.div>

                <motion.div className='policies-banner' initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <img src={mailicon} alt="mail" className='policies-mail-icon' />
                    <p className='policies-banner-title'>{isArabic ? "إذا واجهت أي مشاكل أو كان لديك ملاحظات، يرجى الاتصال بنا:" : "If you encounter any issues or have feedback, please contact us:"}</p>
                    <p className='policies-banner-sub'>{isArabic ? "هل لديك أسئلة أو ملاحظات؟ نود أن نسمع منك. فريق الدعم لدينا هنا للمساعدة!" : "Have questions or feedback? We'd love to hear from you. Our support team is here to help!"}</p>
                    <div className='policies-email-btn'>
                        <p className='policies-email'>support@cureifyapp.com</p>
                    </div>
                </motion.div>

            </div>
            <DownloadApp />
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;