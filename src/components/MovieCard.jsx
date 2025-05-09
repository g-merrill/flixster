const MovieCard = ({ movie }) => {
  console.log(movie)
  return (
    <div className='movie-card'>
      <img className="movie-card--image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={`Movie poster for "${movie.title}"`} width={'120px'} />
      <h3 className="movie-card--title">{movie.title}</h3>
      <p className="movie-card--vote-avg">Rating: {movie.vote_average}</p>
    </div>
  )
}
export default MovieCard
