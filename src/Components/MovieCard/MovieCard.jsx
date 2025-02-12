import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movieTitle}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieCard
