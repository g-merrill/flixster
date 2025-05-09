const DropdownSorting = ({ sortBy, sortOrder }) => {
  return (
    <div className='dropdown'>
      <button className='dropbtn'>Sort by:</button>
      <div className='dropdown-content'>
        <div
          onClick={() => sortBy(sortOrder === 'title' ? 'default' : 'title')}
          className={`dropdown-content--sort-btn ${
            sortOrder === 'title' ? 'dropdown-content--sort-btn--active' : ''
          }`}
        >
          Title (A-Z)
        </div>
        <div
          onClick={() =>
            sortBy(sortOrder === 'release' ? 'default' : 'release')
          }
          className={`dropdown-content--sort-btn ${
            sortOrder === 'release' ? 'dropdown-content--sort-btn--active' : ''
          }`}
        >
          Release Date
        </div>
        <div
          onClick={() => sortBy(sortOrder === 'rating' ? 'default' : 'rating')}
          className={`dropdown-content--sort-btn ${
            sortOrder === 'rating' ? 'dropdown-content--sort-btn--active' : ''
          }`}
        >
          Rating
        </div>
      </div>
    </div>
  )
}
export default DropdownSorting
