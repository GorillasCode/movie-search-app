import React, { useState, useEffect } from 'react'

import { getPopularMovies } from '../../Services/theMovieService'
import MovieCard from '../MovieCard/MovieCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const TrendingMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies()
      setMovies(data)
    }
    fetchMovies()
  }, [])
  return (
    <div>
      <Swiper
        style={{ width: '100%', height: 'auto' }}
        key={movies.length}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        navigation
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TrendingMovies
