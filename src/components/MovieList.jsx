import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const fetchMovieData = async () => {
    const url =
      `${import.meta.env.VITE_API_BASE_URL}/movie/now_playing?language=en-US&page=${page}`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
      },
    }
    try {
      const res = await fetch(url, options)
      const data = await res.json()
      const updatedMovies = [...movies, ...data.results]
      setMovies(updatedMovies)
      setPage(page + 1)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMovieData()
  }, [])

  const loadMoreMovies = async () => {
    
  }

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
      <div className='movie-list--load-more-ctnr'>
        <div className='movie-list--load-more-btn' onClick={fetchMovieData}>Load More</div>
      </div>
    </div>
  )
}
export default MovieList
