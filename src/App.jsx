import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import MovieModal from './components/MovieModal'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [modalMovie, setModalMovie] = useState(null)
  const [sortOrder, setSortOrder] = useState('default')

  const authenticateSession = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/authentication`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
      },
    }
    try {
      await fetch(url, options)
      setIsAuthenticated(true)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    authenticateSession()
  }, [])

  const handleSearchSubmit = newSearch => {
    setSearchTerm(newSearch)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  const selectMovie = async movieId => {
    const url = `${
      import.meta.env.VITE_API_BASE_URL
    }/movie/${movieId}?language=en-US`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
      },
    }

    try {
      const res = await fetch(url, options)
      const movie = await res.json()
      setModalMovie(movie)
      toggleModal()
    } catch (error) {
      console.error(error)
    }
  }

  const toggleModal = () => setModalVisible(!modalVisible)

  const sortBy = sortKey => setSortOrder(sortKey)

  return (
    <div className='App'>
      {isAuthenticated ? (
        <>
          <Header />
          <Navigation
            handleSearchSubmit={handleSearchSubmit}
            clearSearch={clearSearch}
            sortBy={sortBy}
            sortOrder={sortOrder}
          />
          <MovieList
            searchTerm={searchTerm}
            selectMovie={selectMovie}
            sortOrder={sortOrder}
          />
          <MovieModal
            modalMovie={modalMovie}
            modalVisible={modalVisible}
            toggleModal={toggleModal}
          />
          <About />
          <Contact />
          <Footer />
        </>
      ) : (
        <p>Please check the API authentication requests.</p>
      )}
    </div>
  )
}

export default App
