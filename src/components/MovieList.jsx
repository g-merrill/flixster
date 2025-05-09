import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const getMovieData = async () => {
    const url =
      `${import.meta.env.VITE_API_BASE_URL}/movie/now_playing?language=en-US&page=1`
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
      console.log(data)
      setMovies(data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  )
}
export default MovieList
