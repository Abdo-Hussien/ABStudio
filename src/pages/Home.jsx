/* eslint-disable jsx-a11y/alt-text */
import '../App.scss'
import ProfilePicture from '../components/ProfilePicture'
import Experiences from '../components/Experiences/Experiences'
import Blogs from '../components/Blogs'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


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
            setTimeout(type, 100); // Adjust typing speed (100ms per letter)
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
        { title: 'Projects', image: '/projects.jpg', subtitle: 'Innovative ideas brought to life' },
        { title: 'Courses', image: '/courses.jpg', subtitle: 'Expanding knowledge and skills' },
        { title: 'Education', image: '/education.jpg', subtitle: 'Building a brighter future through learning' }
    ]
    const currentRoute = useLocation()
    console.log(currentRoute.pathname)

    return (
        <div className="App">
            <div className="main-content gap-24">
                <ProfilePicture />
                <div className="information-content">
                    <div className="flex-1 justify-center xl:justify-start">
                        <span>Who am I? &nbsp;</span>
                        <span className="text-red-600 transition-colors text-5xl hover:text-red-500 duration-500">Abdelrahman</span>
                    </div>
                    <p className="text-base">A developer who</p>
                    <p className="text-lg font-bold">
                        Turns code into &nbsp;
                        <span className="font-extrabold text-lime-500 relative">
                            <img src="/Ellipse 5.png" alt="Ellipse" className="absolute top-0 -right-1 scale-150" />
                            magic
                        </span>
                        &nbsp; ...
                    </p>
                    <p className="text-xs">Crafting solutions with the elegance of logic</p>
                </div>
            </div>
            <div className="max-w-2xl">
                <p className="font-bold text-2xl relative after:content-['|'] after:ml-1 after:animate-blink-cursor">{typeWriter}</p>
                <p className="text-xl inline-flex">Currently, I'm a Software Engineer at&nbsp;<img src="/ITExperts.png" alt="IT" className="picture h-7" />&nbsp;ITExperts </p>
                <p className="text-sm mt-5">As a dedicated professional with a strong background in e-commerce and CRM systems, I have successfully contributed to the development of a dynamic website that integrates book sales with local trip bookings. My work on this innovative platform involved designing and implementing features that enhance user experience and streamline operations. Passionate about leveraging technology to solve real-world problems, I am committed to driving business growth and delivering exceptional value through strategic solutions.</p>
                <Link to="/about">
                    <button className="my-3 !border-none bg-gradient-to-br from-red-600 to-red-700">
                        Explore more
                    </button>
                </Link>
            </div>
            <Experiences />
            {/* <Blogs headers={headers} /> */}
        </div>
    );
}