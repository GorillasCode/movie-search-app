import React from 'react'
import './MovieCard.styled.js'

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.Title}
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieCard
