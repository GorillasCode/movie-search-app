import { React, useState } from 'react'
import {
  MovieContainer,
  MoviePoster,
  MovieOverlay,
  MovieSynopsys,
  MovieTitle
} from './MovieCard.styled.js'

const MovieCard = ({ movie }) => {
  return (
    <MovieContainer>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieOverlay>
        {/* <MovieTitle>{movie.title}</MovieTitle> */}
        <MovieSynopsys>{movie.overview}</MovieSynopsys>
      </MovieOverlay>
    </MovieContainer>
  )
}

export default MovieCard
