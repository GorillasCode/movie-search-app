import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const searchMovies = async query => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
        language: 'en-US',
        page: 1
      }
    })
    return response.data.results
  } catch (error) {
    console.error('ERROR', error)
    return []
  }
}

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US'
      }
    })
    return response.data.results
  } catch (error) {
    console.error('ERROR', error)
    return []
  }
}
