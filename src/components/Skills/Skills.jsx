import "./skills.scss"
import { motion } from 'framer-motion'

export default function Skills() {
    return (
        <>

            <motion.Element
                name="skills"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'tween',
                    duration: 1.9,
                    delay: 0.2
                }}
                >
                <p className="text-xl text-center py-12">
                    I'm currently looking to join a&nbsp;
                    <span className="text-amber-400">cross-functional</span>
                    &nbsp;team
                    <p className="text-sm">&nbsp;that values improving people's lives through accessible design</p>
                </p>

            </motion.Element>
            <div id="Skills" className="flex justify-center mb-2 content-start gap-5 flex-wrap-reverse max-w-[350px]">
                {
                    Array.from({ length: 12 }, (_, index) => (
                        <div key={index} className="rounded-full skill">
                            <img src={`/Logos/Rectangle ${index + 1}.png`} alt={`Rectangle ${index + 1}`} />
                        </div>
                    ))
                }
            </div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'tween',
                    duration: 1.9,
                    delay: 0.2
                }}
                className="relative pointer-events-none flex justify-center w-[340px] md:w-[660px] lg:w-[900px] h-[500px]">
                <img
                    src="/Skills/Ellipse 6.png" className="absolute skill-center !top-[44%]" alt="grp" />
                <img src="/Skills/Ellipse 20.png" className="absolute skill-center !top-[44%]" alt="grp" />
                <img src="/Skills/Ellipse 21.png" className="absolute skill-center " alt="grp" />
                <img src="/Skills/Ellipse 22.png" className="absolute skill-center" alt="grp" />
                <img src="/Skills/Ellipse 23.png" className="absolute skill-center" alt="grp" />
                <motion.img
                    animate={{
                        y: [0, -5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    src="/Skills/Group 1901.png" className="absolute icon bottom-[44%] right-[8%]" alt="grp" />
                <img src="/Skills/Group 1902.png" className="absolute icon bottom-[50%] right-[17%]" alt="grp" />
                <img src="/Skills/Group 1903.png" className="absolute icon bottom-[40%] left-[40%]" alt="grp" />
                <motion.img
                    animate={{
                        y: [0, -7, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 3,
                        ease: "easeInOut",
                    }}
                    src="/Skills/Group 1904.png" className="absolute icon bottom-[45%] left-[19%]" alt="grp" />
                <motion.img
                    animate={{
                        y: [0, -7, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 3,
                        ease: "easeInOut",
                    }}
                    src="/Skills/Group 1905.png" className="absolute icon bottom-[55%] right-[5%]" alt="grp" />
                <img src="/Skills/Group 1907.png" className="absolute skill-center !top-[45%]" alt="grp" />
                <motion.img
                    animate={{
                        y: [0, 7, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    src="/Skills/Group-1.png" className="absolute icon bottom-[37%] left-[22%]" alt="grp" />
                <img src="/Skills/Group.png" className="absolute icon bottom-[35%] right-[25%]" alt="grp" />
                <img src="/Skills/Vector 25.png" className="absolute skill-center !top-[25%] md:!right-[43%] !right-[33%]" alt="grp" />
                <img src="/Skills/Vector 26.png" className="absolute skill-center !top-[25%] md:!right-[46%] !right-[38%]" alt="grp" />
                <img src="/Skills/Vector 27.png" className="absolute skill-center !top-[25%]" alt="grp" />
                <img src="/Skills/Vector 28.png" className="absolute skill-center !top-[25%] md:!right-[58%] !right-[75%]" alt="grp" />
                <img src="/Skills/Vector 29.png" className="absolute skill-center !top-[27%] md:!right-[54%] !right-[65%]" alt="grp" />
                <img src="/Skills/Vector 30.png" className="absolute skill-center !top-[27%] md:!right-[51%] !right-[54%]" alt="grp" />
                <img src="/Skills/Vector-1.png" className="absolute icon bottom-[30%] right-[40%]" alt="grp" />
                <img src="/Skills/Vector-2.png" className="absolute icon bottom-[45%] left-[8%]" alt="grp" />
                <img src="/Skills/Vector.png" className="absolute icon bottom-[55%] left-[14%]" alt="grp" />
                <img src="/logo.png" className="absolute skill-center logo mix-blend-multiply opacity-50 !top-[43%] w-40" alt="grp" />
            </motion.div>
        </>
    )
}