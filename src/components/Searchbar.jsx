import { useRef, useState } from 'react'

const Searchbar = ({ handleSearchSubmit, clearSearch }) => {
  const [inputSearchTerm, setInputSearchTerm] = useState('')
  const searchTermRef = useRef(null)
  const handleChange = e => {
    setInputSearchTerm(e.target.value)
  }
  const handleKeyEvent = e => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  const handleSubmit = () => {
    // search movies using inputSearchTerm
    handleSearchSubmit(inputSearchTerm)
  }
  const handleClear = () => {
    searchTermRef.current.value = ''
    setInputSearchTerm('')
    clearSearch()
  }
  return (
    <div className='searchbar'>
      <input
        className='searchbar--text-input'
        type='text'
        onChange={handleChange}
        onKeyDownCapture={handleKeyEvent}
        ref={searchTermRef}
        placeholder='search movies here'
      />
      <div className='searchbar--btn-search basic-btn' onClick={handleSubmit}>
        Search
      </div>
      <div className='searchbar--btn-clear basic-btn' onClick={handleClear}>
        Clear
      </div>
    </div>
  )
}
export default Searchbar
