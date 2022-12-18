import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'

import '../pages/css/MovieGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRateMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKEY}&language=pt-BR`

    getTopRateMovies(topRatedUrl)
  }, [])
  return (
    <div className="container">
      <h2 className="title">Best Movies:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key ={movie.id} movie ={movie}/>)}
      </div>
    </div>
  )
}

export default Home
