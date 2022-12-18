import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const SearchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './css/MovieGrid.css'

const Search = () => {

  const [SearchParams] = useSearchParams()

  const [movies, SetMovies] = useState([])

  const query = SearchParams.get("q")

 const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    SetMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryURL = `${SearchUrl}?${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryURL)

  },[query])


  return (
    <div className="container">
      <h2 className="title">
        Result for Search <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search
