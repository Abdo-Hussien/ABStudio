import '../assets/Blogs.scss'


export default function Blogs({ headers }) {
    return (
        <div className="blogs">
            {headers.map((header, index) => {

                return (
                    <a key={index} href={`#${header.title}`} className="blog">
                        <img className="blog-image" src={header.image} alt={index} />
                        <p className="text-xl font-bold">{header.title}</p>
                        <p className="text-gray-500">{header.subtitle}</p>
                    </a>
                )
            }
            )}
        </div >
    )
}