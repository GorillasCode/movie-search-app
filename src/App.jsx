import './App.css'
import SearchBar from './Components/SearchBar/SearchBar'
import { Header } from './Components/Header/Header'
import TrendingMovies from './Components/TrendingMovies/TrendingMovies'

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <TrendingMovies />
    </div>
  )
}

export default App
