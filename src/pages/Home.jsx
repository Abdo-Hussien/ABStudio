/* eslint-disable jsx-a11y/alt-text */
import '../App.scss'
import ProfilePicture from '../components/ProfilePicture'
import Blogs from '../components/Blogs'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Home() {
    let [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(counter => counter + 1)
        console.log(counter)
    }
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
                {/* {counter !== 0 ? <span>{counter.toFixed(2)}</span> : null} */}
            </div>
            <div className="max-w-2xl">
                <p className="font-bold text-3xl">I'm a Software Engineer.|</p>
                <p className="text-xl inline-flex">Currently, I'm a Software Engineer at&nbsp;<img src="/ITExperts.png" alt="IT" className="picture h-7" />&nbsp;ITExperts </p>
                <p className="text-sm">As a dedicated professional with a strong background in e-commerce and CRM systems, I have successfully contributed to the development of a dynamic website that integrates book sales with local trip bookings. My work on this innovative platform involved designing and implementing features that enhance user experience and streamline operations. Passionate about leveraging technology to solve real-world problems, I am committed to driving business growth and delivering exceptional value through strategic solutions.</p>
                <Link to="/about">
                    <button className="my-3 !border-none bg-gradient-to-br from-red-600 to-red-700" onClick={handleClick}>
                        Explore more
                    </button>
                </Link>
            </div>
            <Blogs headers={headers} />
        </div>
    );
}