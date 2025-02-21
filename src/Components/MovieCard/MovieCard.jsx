import React from 'react'
import {
  MovieContainer,
  MoviePoster,
  MovieTitle,
  MovieOverview
} from './MovieCard.styled.js'

const MovieCard = ({ movie }) => {
  return (
    <MovieContainer>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.Title}
      />
      {/* <MovieTitle>{movie.title}</MovieTitle> */}
      <MovieOverview>{movie.overview}</MovieOverview>
    </MovieContainer>
  )
}

export default MovieCard
