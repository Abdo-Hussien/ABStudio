import React, { useState } from 'react';
import { Link } from 'react-scroll';
import SideBar from './SideBar';  // Import the SideBar component

export default function NavBar() {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle function to open/close sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="navigation-content px-3 md:px-[15vmax]">
                <img src="/logo.png" className="max-w-20 m-2" alt="logo" />

                {/* Desktop Links */}
                <div className="redirections hidden md:flex">
                    <Link to="about" smooth={true} duration={500}>About</Link>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                    <Link to="experience" smooth={true} duration={500}>Experience</Link>
                </div>

                {/* Sidebar Toggle Button (Visible on mobile) */}
                <div
                    className="flex p-3 rounded-lg bg-red-950 hover:bg-red-900 hover:bg-opacity-65 hover:scale-110 duration-300 ease-in-out md:hidden cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ececec"} fill={"none"}>
                        <path d="M20 12L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 5L4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M20 19L4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Render SideBar when sidebar is open */}
            </div>
            {isSidebarOpen && <SideBar closeSidebar={toggleSidebar} />}
        </>
    );
}
