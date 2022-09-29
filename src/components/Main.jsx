import React from 'react'
import sorov from '../baza/sorov'
import Banner from './Banner'
import Films from './Films'
import Navbar from './Navbar'

function Main({ user }) {
    return (
        <div>
            <Navbar user={user} />
            <Banner />
            <Films
                isLargeRow
                title={"NETFLIX ORIGINALS"}
                movie_request={sorov.fetchNetflixOriginals}
            />
            <Films
                title={'Trending now'}
                movie_request={sorov.fetchTrending}
            />
            <Films
                title={'Comedy Movies'}
                movie_request={sorov.fetchComedyMovies}
            />
            <Films
                title={'Horror Movies'}
                movie_request={sorov.fetchHorrorMovies}
            />
            <Films
                title={'Romance Movies'}
                movie_request={sorov.fetchRomanceMovies}
            />
            <Films
                title={'Document Movies '}
                movie_request={sorov.fetchDocumentaries}
            />
        </div>
    )
}

export default Main