import './experience.scss'
import { motion } from 'framer-motion'
export default function Experience({ id, delay, imagePath, title, subtitle, action }) {
    return (
        <motion.div
            key={id}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="experience-container !bg-red-950 rounded-lg p-8 border-t-2 border-t-red-600">
            <img src={imagePath} className="image-icon" alt="icon" />
            <div className="flex flex-col">
                <span>{title}</span>
                <p className="exp-subtitle">{subtitle}</p>
                <button className="rounded-ee-lg max-w-40 border-red-500 text-sm mt-2 bg-gradient-to-br from-red-600 to-red-700" onClick={action}>Learn More</button>
            </div>
        </motion.div>
    )
}