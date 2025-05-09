const MovieModal = ({ modalMovie: movie, modalVisible, toggleModal }) => {
  return (
    <div
      className={`movie-modal ${modalVisible ? 'movie-modal--visible' : ''}`}
    >
      {modalVisible && (
        <>
          <div className='movie-modal--bg' onClick={toggleModal}></div>
          <div className='movie-modal--content'>
            <div className='movie-modal--content--img-ctnr'>
              <img
                className='movie-modal--content--img'
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={`Movie poster for "${movie.title}"`}
              />
            </div>
            <div className='movie-modal--content--text-ctnr'>
              <img
                className='movie-modal--content--backdrop-poster'
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={`Movie backdrop for "${movie.title}"`}
              />
              <h1 className='movie-modal--content--title'>{movie.title}</h1>
              <div className='movie-modal--content--rating'>
                Rating: {movie.vote_average}
              </div>
              <div className='movie-modal--content--runtime'>Runtime: {movie.runtime} minutes</div>
              <div className='movie-modal--content--release-date'>
                Release Date: {movie.release_date}
              </div>
              <div className='movie-modal--content--genres'>Genres: {movie.genres.map(genre => genre.name).join(', ')}</div>
              <p className='movie-modal--content--overview'>
                Overview: {movie.overview}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default MovieModal
