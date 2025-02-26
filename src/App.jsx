import './App.css'
import { Header } from './Components/Header/Header'
import TrendingMovies from './Components/TrendingMovies/TrendingMovies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div>
      <Header />
      <h1>Trending Movies </h1>
      <FontAwesomeIcon icon="fa-solid fa-fire" />
      <TrendingMovies />
    </div>
  )
}

export default App
