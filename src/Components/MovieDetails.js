import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import YouTube from 'react-youtube'
import './MovieDetails.css'

function MovieDetails(props) {

    const history = useHistory()
    let location = useLocation()
    let truncate = location.pathname.toLocaleLowerCase().split('').slice(1).join('')
    return (
        <div className="movieDetails">
            <p>Description: {props.movies.filter(movie=>movie.title.toLowerCase()===truncate)[0].description}</p>
            <YouTube videoId={(props.movies.filter(movie=>movie.title.toLowerCase()===truncate)[0].trailerURL)}/>
            <button onClick={()=>history.push('/')}>Back to movie list</button>
        </div>
    )
}

export default MovieDetails
