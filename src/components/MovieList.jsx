import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ searchTerm = '', selectMovie, sortOrder }) => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [loadBtnActive, setLoadBtnActive] = useState(true)
  const fetchMovieData = async (specificPage = undefined) => {
    if (specificPage) {
      setPage(specificPage)
    }
    const url = `${import.meta.env.VITE_API_BASE_URL}${
      searchTerm ? '/search/movie' : '/movie/now_playing'
    }?language=en-US&page=${specificPage || page}${
      searchTerm ? `&query=${encodeURI(searchTerm)}` : ''
    }`
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
      let updatedMovies
      if (specificPage) {
        updatedMovies = [...data.results]
      } else {
        updatedMovies = [...movies, ...data.results]
      }
      setMovies(updatedMovies)
      setPage(page + 1)
      setLoadBtnActive(data.page < data.total_pages)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMovieData()
  }, [])

  useEffect(() => {
    fetchMovieData(1)
  }, [searchTerm])

  useEffect(() => {
    let freshMovies = [...movies]
    switch (sortOrder) {
      case 'title':
        freshMovies = freshMovies.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'release':
        freshMovies = freshMovies.sort((a, b) => b.release_date.localeCompare(a.release_date))
        break
      case 'rating':
        freshMovies = freshMovies.sort(
          (a, b) => b.vote_average - a.vote_average,
        )
        break
      default:
        fetchMovieData(1)
        break
    }
    setMovies(freshMovies)
  }, [sortOrder])

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} selectMovie={selectMovie} />
      ))}
      <div className='movie-list--load-more-ctnr'>
        <div
          className={`movie-list--load-more-btn basic-btn ${
            loadBtnActive ? '' : 'btn-disabled'
          }`}
          onClick={() => fetchMovieData()}
        >
          Load More
        </div>
      </div>
    </div>
  )
}
export default MovieList
