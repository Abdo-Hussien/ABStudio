import { Link } from 'react-scroll';

export default function NavBar() {
    return (
        <div className="navigation-content">
            <img src="/logo.png" className="max-w-20 m-2" alt="logo" />
            {/* <Redirections /> */}
            <div className="redirections">
                <Link to="about" smooth={true} duration={500}>About</Link>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                <Link to="experience" smooth={true} duration={500}>Experience</Link>
            </div>
        </div>
    )
}