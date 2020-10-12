import React from 'react'
import { FaStar } from "react-icons/fa"
import './MovieCard.css'
import { Link } from 'react-router-dom'

function MovieCard(props) {

    return (
        <div className="MovieCard">
            <p>{props.title} </p>
            <img alt="" width="200px" src={props.posterUrl}></img>
            <div>{[...Array(props.rate)].map(el=>{return <FaStar key={Math.random()*1000} color="yellow" /> } )}</div>
            <Link to={`/${props.title}`}>Movie info</Link>
        </div>
    )
}

export default MovieCard
