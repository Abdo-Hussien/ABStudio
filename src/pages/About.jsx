
import axios from 'axios'
import '../App.scss'
import { useEffect, useState } from 'react';


function About() {
    const [stories, setStories] = useState({})
    const [error, setError] = useState({})

    const handleCall = async () => {
        try {
            const { data, status } = await axios.get(`https://gateway.marvel.com/v1/public/comics/948?apikey=ffebf262c2bca06808eed12570dc894e`)
            console.log(data.data.results[0])
            console.log(status)
            if (status === 200) {
                setStories(data.data.results[0])
            }
            else {
                setError(error?.message)
                console.log(error)
            }
        } catch (err) {
            console.log(`Error fetching result: ${err}`)
        }
    }
    
    useEffect(() => {
        handleCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 


    return (
        <div className="App">
            <div className="container">
                <div>
                    <button>Load Marvel Characters</button>
                    <span className="text-3xl text-fuchsia-50">
                        {stories?.dates?.map((date, index) => {
                            return (
                                <>
                                    <p key={date.index}>
                                        {date.type} <span>{date.date}</span>
                                    </p>
                                </>
                            )
                        })}
                    </span>
                </div>

            </div>
            <div className="subcontainer">
                <span>me</span>
                <h1 className="antialiased bg-gradient-to-r from-cyan-500 to-amber-400 border-2 rounded-lg border-lime-400 text-9xl p-4 font-bold">
                    dfgdf
                </h1>
            </div>
        </div>
    )
}

export default About