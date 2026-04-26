import { motion } from "framer-motion";
import "./DownloadApp.css";
import bigphone from "../assets/phone3.svg";
import apple from "../assets/apple.svg";
import play from "../assets/play.svg";
import DownloadButton from './DownloadButton';
import { useLang } from '../context/LanguageContext';

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 }
};

const DownloadApp = () => {
    const { isArabic } = useLang();

    return ( 
        <div className='downloadSection'>
            <motion.img
                src={bigphone}
                alt="phone mockup"
                className='imgpa'
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            />
            <div className='downloadsecpg' style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
                <motion.p
                    className='downloadTitle'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {isArabic 
                        ? "بسط إدارة أدويتك وحمل التطبيق الآن" 
                        : "Simplify Your Medication Management & Download Now"}
                </motion.p>
                <motion.p
                    className='downloadDes'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.25 }}
                    viewport={{ once: true }}
                >
                    {isArabic 
                        ? "ابقَ على اطلاع بمواعيد دوائك. أدر صحتك في أي وقت وفي أي مكان." 
                        : "Stay on top of your medicine. Manage your health anytime, anywhere."}
                </motion.p>
                <motion.div
                    className='for2buttons2'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <DownloadButton 
                        softwareimg={apple} 
                        downtext={isArabic ? "حمل من" : "Download on the"} 
                        store={isArabic ? "متجر التطبيقات" : "App Store"}
                    />
                    <DownloadButton 
                        softwareimg={play} 
                        downtext={isArabic ? "احصل عليه من" : "Get it on"} 
                        store={isArabic ? "جوجل بلاي" : "Google Play"}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default DownloadApp;