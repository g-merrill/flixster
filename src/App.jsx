import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'

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
      const res = await fetch(url, options)
      const json = await res.json()
      console.log(json)
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
          <header>
            <h1>Flixster</h1>
            <p>Browse current movies!</p>
          </header>
          <nav></nav>
          <MovieList />
          <footer></footer>
        </>
      ) : (
        <p>Please check the API authentication requests.</p>
      )}
    </div>
  )
}

export default App
