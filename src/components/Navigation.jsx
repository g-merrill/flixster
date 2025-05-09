import Searchbar from "./Searchbar"

const Navigation = ({ handleSearchSubmit, clearSearch }) => {
  return (
    <nav>
      <Searchbar handleSearchSubmit={handleSearchSubmit} clearSearch={clearSearch} />
    </nav>
  )
}
export default Navigation
