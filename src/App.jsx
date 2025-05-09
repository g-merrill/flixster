import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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

  return (
    <div className='App'>
      {isAuthenticated ? (
        <>
          <Header />
          <nav></nav>
          <MovieList />
          <Footer />
        </>
      ) : (
        <p>Please check the API authentication requests.</p>
      )}
    </div>
  )
}

export default App
