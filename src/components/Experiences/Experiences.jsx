import Experience from "./Experience.jsx"
import { motion } from "framer-motion"
import "./experience.scss"
export default function Experiences() {
    const experienceProps = [
        {
            id: 1,
            imagePath: '/icon 1.png',
            title: 'Admin Portal Development',
            subtitle: 'Developed an efficient admin portal to streamline business operations, enhance user experience, and provide robust management tools',
            action: () => {

            },
            delay: 0.2
        },
        {
            id: 3,
            imagePath: '/icon 2.png',
            title: 'UI/UX designs with Figma',
            subtitle: 'Designed intuitive and user-friendly interfaces, focusing on improving website usability and enhancing the overall user experience.',
            action: () => {

            },
            delay: 0.1
        },
        {
            id: 5,
            imagePath: '/icon 3.png',
            title: 'Travel & Tourism E-commerce Site',
            subtitle: 'Produced a user-friendly travel and tourism booking website with a focus on seamless user experience and interface design.',
            action: () => {

            },
            delay: 0.2
        },
        {
            id: 7,
            imagePath: '/icon 4.png',
            title: 'API for Client-Server Integration',
            subtitle: 'Developed an API that leveraged secure authentication mechanisms to protect data transmission.',
            action: () => {

            },
            delay: 0.1
        }
    ]
    return (
        <div id="Experiences" className="max-w-[1200px] p-8 gap-4 flex flex-col gradient-bg">
            <motion.Element
                name="experience"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                >
                <p className="text-lg size-auto md:text-3xl font-bold">
                    Work Experience
                </p>
            </motion.Element>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                <Experience {...experienceProps[0]} />
                <Experience {...experienceProps[1]} />
                <Experience {...experienceProps[2]} />
                <Experience {...experienceProps[3]} />
            </div>
        </div>
    )
}