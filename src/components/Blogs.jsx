import '../assets/Blogs.scss'


export default function Blogs({ headers }) {
    return (
        <div className="blogs">
            {headers.map((header, index) => (
                <div key={index} className="blog">
                    <img className="blog-image" src={header.image} alt={index} />
                    <p>{header.title}</p>
                    <span>{index + 1}</span>
                </div>
            ))}
        </div>
    )
}