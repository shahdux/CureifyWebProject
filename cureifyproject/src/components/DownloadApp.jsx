
import { motion } from "framer-motion";
import "./DownloadApp.css";
import bigphone from "../assets/phone3.svg";
import apple from "../assets/apple.svg";
import play from "../assets/play.svg";
import DownloadButton from './DownloadButton';

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 }
};

const DownloadApp = () => {
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
            <div className='downloadsecpg'>
                <motion.p
                    className='downloadTitle'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Simplify Your Medication Management & Download Now
                </motion.p>
                <motion.p
                    className='downloadDes'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.25 }}
                    viewport={{ once: true }}
                >
                    Stay on top of your medicine. Manage your health anytime, anywhere.
                </motion.p>
                <motion.div
                    className='for2buttons2'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <DownloadButton softwareimg={apple} downtext="Download on the" store="App Store"/>
                    <DownloadButton softwareimg={play} downtext="Get it on" store="Google Play"/>
                </motion.div>
            </div>
        </div>
    );
}

export default DownloadApp;