/* eslint-disable jsx-a11y/alt-text */
import '../App.scss'
import ProfilePicture from '../components/ProfilePicture'
import Experiences from '../components/Experiences/Experiences'
import Skills from '../components/Skills/Skills'
import Project from '../components/Projects/Project'
import Blogs from '../components/Blogs'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll';


export default function Home() {
    let [typeWriter, setTypeWriter] = useState('')
    let index = 0
    let textIndex = 0;
    const text = [
        "I'm a Software Engineer.",
        "I specialize in building web applications.",
        "I enjoy solving complex problems.",
        "I love learning new programming languages.",
        "I have experience with JavaScript and Python.",
        "I love writing clean code.",
        "I enjoy collaborating with others.",
        "I strive to keep up with the latest tech trends.",
        "I believe in continuous learning.",
        "Building user-friendly interfaces is my goal."
    ];
    function type() {
        if (index < text[textIndex].length) {
            setTypeWriter(typeWriter += text[textIndex].charAt(index))
            index++;
            setTimeout(type, 100);
        }
        else {

            setTimeout(() => {
                index = 0
                setTypeWriter(typeWriter = "")
                textIndex = (textIndex + 1) % text.length;
                type()
            }, 2000);
        }
    }
    useEffect(() => { type() }, [])
    const headers = [
        { title: 'Experiences', image: '/courses.jpg', subtitle: 'Build brighter future through work experiences' },
        { title: 'Skills', image: '/education.jpg', subtitle: 'Expanding knowledge and skills' },
        { title: 'Projects', image: '/projects.jpg', subtitle: 'Innovative ideas brought to life' },
    ]
    const projects = [
        {
            imagePath: "/Cart.PNG",
            header: "Featured Project",
            title: "Example Project",
            description: `A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists and more.`,
        },
        {
            imagePath: "/courses.jpg",
            reverse: true,
            header: "Featured Project",
            title: "Example Project",
            description: `A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists and more.`,
        },
    ];

    return (
        <Element name="about" className="App overflow-hidden">
            <div className="main-content flex-wrap md:flex-nowrap gap-20">
                <ProfilePicture />
                <div className="information-content">
                    <div className="flex justify-center items-end md:justify-start">
                        <motion.span
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'tween',
                                duration: 1.2,
                                delay: 0.2
                            }}
                        >
                            Who am I? &nbsp;
                        </motion.span>
                        <span className="text-red-600 transition-colors text-5xl hover:text-red-500 duration-500">Abdelrahman</span>
                    </div>
                    <p>A developer who</p>
                    <p className="text-lg font-bold">
                        Turns code into &nbsp;
                        <span className="font-extrabold text-lime-500 relative">
                            <img src="/Ellipse 5.png" alt="Ellipse" className="absolute top-0 -right-1 scale-150" />
                            <motion.span
                                style={{paddingBottom: 20, paddingTop: 20}}
                                initial={{ background: 'radial-gradient(circle, #ff7eb322, transparent)' }}
                                animate={{
                                    background: [
                                        'radial-gradient(circle, #ff7eb333, transparent 70%)',
                                        'radial-gradient(circle, #85ffbd33, transparent 70%)',
                                        'radial-gradient(circle, #f6d36533, transparent 70%)',
                                        'radial-gradient(circle, #ff9a9e33, transparent 70%)',
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut',
                                    times: [0, 0.2, 0.4, 0.6],
                                    repeat: Infinity,
                                }}>
                                magic
                            </motion.span>
                        </span>
                        &nbsp; ...
                    </p>
                    <p className="text-xs">Crafting solutions with the elegance of logic</p>
                </div>
            </div>
            <div className="max-w-2xl px-8">
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'tween',
                        duration: 1.2,
                        delay: 0.2
                    }}
                    className="font-bold text-nowrap text-lg md:text-2xl relative after:content-['|'] after:ml-1 after:animate-blink-cursor">{typeWriter}</motion.p>
                <p className="text-sm md:text-xl inline-flex">Currently, I'm a Software Engineer at&nbsp;<img src="/ITExperts.png" alt="IT" className="h-4 w-4 md:h-7 md:w-7 rounded-full" />&nbsp;ITExperts </p>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'tween',
                        duration: 1.2,
                        delay: 0.2
                    }}
                    className="text-xs md:text-sm mt-5">As a dedicated professional with a strong background in e-commerce and CRM systems, I have successfully contributed to the development of a dynamic website that integrates book sales with local trip bookings. My work on this innovative platform involved designing and implementing features that enhance user experience and streamline operations. Passionate about leveraging technology to solve real-world problems, I am committed to driving business growth and delivering exceptional value through strategic solutions.</motion.p>
                <Link to="/about">
                    <motion.button
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'tween',
                            duration: 1.2,
                            delay: 0.1
                        }}
                        className="my-3 !-none bg-gradient-to-br from-red-600 to-red-700">
                        Explore more
                    </motion.button>
                </Link>
            </div>
            {/* <Blogs headers={headers} /> */}

            <Experiences />
            <Skills />
            <div className="flex flex-col gap-24">
                {projects.map((project, index) => {
                    return <Project key={index} {...project} />
                })}
            </div>
        </Element>
    );
}