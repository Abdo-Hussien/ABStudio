import Experience from "./Experience.jsx"
import "./experience.scss"
export default function Experiences() {
    const experienceProps = [
        {
            imagePath: '/icon 1.png',
            title: 'Admin Portal Development',
            subtitle: 'Developed an efficient admin portal to streamline business operations, enhance user experience, and provide robust management tools',
            action: () => {

            },
        },
        {
            imagePath: '/icon 2.png',
            title: 'UI/UX designs with Figma',
            subtitle: 'Designed intuitive and user-friendly interfaces, focusing on improving website usability and enhancing the overall user experience.',
            action: () => {

            },
        },
        {
            imagePath: '/icon 3.png',
            title: 'Travel & Tourism E-commerce Site',
            subtitle: 'Produced a user-friendly travel and tourism booking website with a focus on seamless user experience and interface design.',
            action: () => {

            },
        },
        {
            imagePath: '/icon 4.png',
            title: 'API for Client-Server Integration',
            subtitle: 'Developed an API that leveraged secure authentication mechanisms to protect data transmission.',
            action: () => {

            },
        }
    ]
    return (
        <div id="Experiences" className="max-w-[1200px] m-4 p-0 mt-10 gap-5 flex flex-col gradient-bg">
            <p className="m-2 ml-24 text-3xl font-bold">Work Experience</p>
            <div className="flex flex-wrap gap-4 justify-center">
                <Experience {...experienceProps[0]} />
                <Experience {...experienceProps[1]} />
                <Experience {...experienceProps[2]} />
                <Experience {...experienceProps[3]} />
            </div>
        </div>
    )
}