import React from 'react';
import { Link } from 'react-scroll';

export default function SideBar({ closeSidebar }) {
    return (
        <div className={`fixed md:hidden inset-0 bg-black bg-opacity-50 z-40`} onClick={closeSidebar}>
            {/* Sidebar Content */}
            <div
                className="bg-red-500 text-white w-64 h-full p-4 absolute right-0 top-0 z-50"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Menu</h2>
                    <svg onClick={closeSidebar} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ececec" fill="none">
                        <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                {/* Sidebar Links */}
                <nav className="flex flex-col space-y-4">
                    <Link className="cursor-pointer bg-red-400 p-4 rounded-lg" to="about" smooth={true} duration={500} onClick={closeSidebar}>About</Link>
                    <Link className="cursor-pointer bg-red-400 p-4 rounded-lg" to="skills" smooth={true} duration={500} onClick={closeSidebar}>Skills</Link>
                    <Link className="cursor-pointer bg-red-400 p-4 rounded-lg" to="experience" smooth={true} duration={500} onClick={closeSidebar}>Experience</Link>
                </nav>
            </div>
        </div>
    );
}
