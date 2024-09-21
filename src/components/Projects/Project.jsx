import './projects.scss'
import { motion } from 'framer-motion'

export default function Project({ title, imagePath, header, description, reverse = false }) {
    return (
        <div id="Projects" className={`project-container py-8 flex lg:flex-row flex-col ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : ''}`}>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    type: 'tween',
                    duration: 1.2,
                    delay: 0.2
                }}
             className={`flex flex-col ${reverse ? 'lg:!-ml-11' : 'lg:!-mr-11'}`}>
                <p className="text-red-500 font-extrabold text-base">{header}</p>
                <p className="font-extrabold text-2xl">{title}</p>
                <div className={`glass-container`}>
                    <p>{description}</p>
                </div>
                <div className="icon"></div>
            </motion.div>
            <motion.img
                initial={{ opacity: 0, x: -50, zIndex: -1, scale: 0 }}
                whileInView={{ opacity: 1, x: 0, zIndex: -1, scale: 1 }}
                transition={{
                    type: 'spring',
                    duration: 0.4,
                    delay: 0.2
                }}
                src={imagePath} className="image rounded-xl max-w-[350px] md:max-w-[500px]" alt="cart-preview" />
        </div>
    )
}