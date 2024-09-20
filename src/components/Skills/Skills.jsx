import "./skills.scss"

export default function Skills() {
    return (
        <>

            <div id="Skills" className="flex justify-center mb-2 mt-24 content-start gap-5 flex-wrap-reverse max-w-[350px]">
                {
                    Array.from({ length: 12 }, (_, index) => (
                        <div className="rounded-full skill">
                            <img key={index} src={`/Logos/Rectangle ${index + 1}.png`} className="" alt={`Rectangle ${index + 1}`} />
                        </div>
                    ))
                }
                <p className="text-xl text-center min-w-[625px]">I'm currently looking to join a <span className="text-amber-400">cross-functional</span> team
                    <span className="text-sm">that values improving people's lives through accessible design</span> </p>
            </div>
            <div className="relative pointer-events-none flex justify-center w-[900px] h-[500px]">
                <img src="/Skills/Ellipse 6.png" className="absolute skill-center !top-[44%]" alt="grp" />
                <img src="/Skills/Ellipse 20.png" className="absolute skill-center !top-[44%]" alt="grp" />
                <img src="/Skills/Ellipse 21.png" className="absolute skill-center " alt="grp" />
                <img src="/Skills/Ellipse 22.png" className="absolute skill-center" alt="grp" />
                <img src="/Skills/Ellipse 23.png" className="absolute skill-center" alt="grp" />
                <img src="/Skills/Group 1901.png" className="absolute icon bottom-[44%] right-[8%]" alt="grp" />
                <img src="/Skills/Group 1902.png" className="absolute icon bottom-[50%] right-[17%]" alt="grp" />
                <img src="/Skills/Group 1903.png" className="absolute icon bottom-[40%] left-[40%]" alt="grp" />
                <img src="/Skills/Group 1904.png" className="absolute icon bottom-[45%] left-[19%]" alt="grp" />
                <img src="/Skills/Group 1905.png" className="absolute icon bottom-[55%] right-[5%]" alt="grp" />
                <img src="/Skills/Group 1907.png" className="absolute skill-center !top-[45%]" alt="grp" />
                <img src="/Skills/Group-1.png" className="absolute icon bottom-[37%] left-[22%]" alt="grp" />
                <img src="/Skills/Group.png" className="absolute icon bottom-[35%] right-[25%]" alt="grp" />
                <img src="/Skills/Vector 25.png" className="absolute skill-center !top-[25%] !right-[43%]" alt="grp" />
                <img src="/Skills/Vector 26.png" className="absolute skill-center !top-[25%] !right-[46%]" alt="grp" />
                <img src="/Skills/Vector 27.png" className="absolute skill-center !top-[25%]" alt="grp" />
                <img src="/Skills/Vector 28.png" className="absolute skill-center !top-[25%] !right-[58%]" alt="grp" />
                <img src="/Skills/Vector 29.png" className="absolute skill-center !top-[27%] !right-[54%]" alt="grp" />
                <img src="/Skills/Vector 30.png" className="absolute skill-center !top-[27%] !right-[51%]" alt="grp" />
                <img src="/Skills/Vector-1.png" className="absolute icon bottom-[50%]" alt="grp" />
                <img src="/Skills/Vector-2.png" className="absolute icon bottom-[45%] left-[8%]" alt="grp" />
                <img src="/Skills/Vector.png" className="absolute icon bottom-[55%] left-[14%]" alt="grp" />
                <img src="/logo.png" className="absolute skill-center logo !top-[43%] w-40" alt="grp" />
            </div>
        </>
    )
}