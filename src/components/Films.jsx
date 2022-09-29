import React, { useEffect, useState } from 'react'
import axios from '../baza/axios'
import sorov from '../baza/sorov'
import YouTube from 'react-youtube'
import Tooltip from '@mui/material/Tooltip'
import "./Films.css"

function Films({title, movie_request, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        const fetchDatas = async () => {
            const responseData = await axios.get(movie_request)
            // console.log(responseData);
            setMovies(responseData.data.results.slice(0, 6))
        }

        fetchDatas()

    }, [movie_request])

    const fetchMovieTrailer = async (movie) => {
        await axios.get("/movie/" + movie?.id.toString() + sorov.trailerQuery)
            .then((responseData) => {
                setTrailerUrl(responseData.data.results[0]?.key)
            })
            .catch((error) => console.error(error))
    }

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("")
        } else {
            fetchMovieTrailer(movie)
        }
    }
 
    const options = {
        playerVars : {
            autoplay : 1
        }
    }
  return (
    <div className='filmsCategoty'>
        <h3>{title}</h3>
        <div className='films'>
            {movies.map((movie) => (
                <Tooltip title={movie?.original_name || movie?.original_title} key={movie.id}>
                    <img src={
                        `https://image.tmdb.org/t/p/original/${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.original_title}
                        onClick={() => handleClick(movie)}
                        loading='lazy'
                        className={`film ${isLargeRow && 'filmsPosterLarge'}`}
                        />
                </Tooltip>
            ))}
        </div>
        {trailerUrl && <YouTube id='Player' videoId={trailerUrl} options={options} />}
    </div>
  )
}

export default Films