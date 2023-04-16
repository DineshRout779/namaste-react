const Searchbar = () => {
  return (
    <div className='container'>
      <div className='searchbar-wrapper'>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search for maggie'
          className='input'
        />
        <button type='submit' className='btn btn-submit'>
          <i className='ri-search-line'></i> Search
        </button>
      </div>
    </div>
  );
};
export default Searchbar;
