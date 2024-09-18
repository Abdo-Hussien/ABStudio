// import Redirections from "./redirections";

export default function NavBar() {
    return (
        <div className="navigation-content">
            <img src="/logo.png" className="max-w-20 m-2" alt="logo" />
            {/* <Redirections /> */}
            <div className="redirections">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
            </div>
        </div>
    )
}