import '../assets/Blogs.scss'


export default function Blogs({ headers }) {
    return (
        <div className="blogs">
            {headers.map((header, index) => {

                return (
                    <div key={index} className="blog">
                        < img className="blog-image" src={header.image} alt={index} />
                        <span>{header.title}</span>
                        <p className="text-gray-500">{header.subtitle}</p>
                    </div>
                )
            }
            )}
        </div >
    )
}