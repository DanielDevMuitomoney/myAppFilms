import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
    BsWallet
} from 'react-icons/bs'

import MovieCard from '../components/MovieCard'
import './css/Movie.css'

const moviesURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

const Movie= () =>{
    const {id} = useParams()
    const [movie, SetMovie] = useState(null)


    const getMovie = async(url) =>{
        const res = await fetch(url)
        const data = await res.json()

        SetMovie(data)
    }
    
    const formatCurrency = (number) =>{
        return number.toLocaleString("en-us",{
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(()=> {
        const MovieUrl = `${moviesURL}${id}?${apiKEY}&language=pt-BR`
        getMovie(MovieUrl)
    },[])
    return (
      <div className="movie-page">
        {movie && (
          <>
            <MovieCard movie={movie} ShowLink={false} />
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
              <h3>
                <BsWallet2 />
                orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>

            <div className="info">
              <h3>
                <BsGraphUp />
                Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>

            <div className="info">
              <h3>
                <BsHourglassSplit />
                duração:
              </h3>
              <p>{movie.runtime} Minutos</p>
            </div>

            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill />
                Descrição:
              </h3>
              <p>{movie.overview} Minutos</p>
            </div>
          </>
        )}
      </div>
    )
}

export default Movie