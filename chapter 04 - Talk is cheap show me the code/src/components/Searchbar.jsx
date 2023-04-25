const Searchbar = ({ searchText, setSearchText, handleSearchItem }) => {
  return (
    <div className='container'>
      <form className='searchbar-wrapper' onSubmit={handleSearchItem}>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search for maggie'
          className='input'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type='submit' className='btn btn-submit'>
          <i className='ri-search-line'></i> Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
