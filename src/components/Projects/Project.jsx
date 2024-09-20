import './projects.scss'

export default function Project({ title, imagePath, header, description, reverse = false }) {
    return (
        <div id="Projects" className={`project-container py-8 flex ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className={`card-info ${reverse ? 'flex flex-col items-end' : ''}`}>
                <p className="text-red-500 font-extrabold text-base">{header}</p>
                <p className="font-extrabold text-2xl">{title}</p>
                <div className={`glass-container ${reverse ? '!-ml-11' : '!-mr-11'}`}>
                    <p className="">{description}</p>
                </div>
                <div className="icon"></div>
            </div>
            <img src={imagePath} className="image rounded-xl max-w-[500px]" alt="cart-preview" />
        </div>
    )
}