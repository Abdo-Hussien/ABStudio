import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import SideBar from '../components/SideBar.jsx'
import Footer from '../components/Footer.jsx'
import { useRef } from 'react'

export default function DefaultLayout() {
    const sideBar = useRef(false);
    const openSideBar = () => {
        sideBar.current = true
    }
    return (
        <>
            <SideBar />
            <NavBar openSideBar={openSideBar} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}