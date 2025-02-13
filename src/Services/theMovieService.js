import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const searchMovies = async query => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie/popular`, {
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
console.log(response.data.results)
