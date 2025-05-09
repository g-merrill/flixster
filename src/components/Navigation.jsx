import DropdownSorting from "./DropdownSorting"
import Searchbar from "./Searchbar"

const Navigation = ({
  handleSearchSubmit,
  clearSearch,
  sortBy,
  sortOrder,
}) => {
  return (
    <nav className='nav'>
      <Searchbar
        handleSearchSubmit={handleSearchSubmit}
        clearSearch={clearSearch}
      />
      <DropdownSorting sortBy={sortBy} sortOrder={sortOrder} />
    </nav>
  )
}
export default Navigation
