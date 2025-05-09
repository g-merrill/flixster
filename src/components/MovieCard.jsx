const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card'>
      <p className="movie-card--title">{movie.title}</p>
      <img className="movie-card--image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={'120px'} />
      <p className="movie-card--vote-avg">Votes: {movie.vote_average}</p>
    </div>
  )
}
export default MovieCard
