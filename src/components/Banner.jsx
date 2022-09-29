import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../baza/axios'
import sorov from '../baza/sorov'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fatchMovie = async () => {
            const responsesData = await axios.get(sorov.fetchNetflixOriginals)
            setMovie(
                responsesData.data.results[
                    Math.floor(Math.random() * responsesData.data.results.length)
                ]
            )
        }

        fatchMovie()


    }, [])

  return (
    <header
        style={{
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgaroundSize:'cover',
            backgaroundPosition: 'center center'
        }}
    >
        <div className='main'>
            <div className='bannerContents'>
                <h1 className='MovieTitle'>{movie.original_name}</h1>
                <div className='buttons'>
                    <button className='btn'>
                        Play
                    </button>
                    <button className='btn'>
                        Mi List
                    </button>
                </div>
                <p className='MovieDesc'>{movie.overview}</p>
            </div>
        </div>

    </header>
  )
}

export default Banner