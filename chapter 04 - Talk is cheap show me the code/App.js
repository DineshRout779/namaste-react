import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './src/components/Navbar';
import RestaurantList from './src/components/RestaurantList';
import Searchbar from './src/components/Searchbar';
import 'remixicon/fonts/remixicon.css';
import './styles.css';
import Filter from './src/components/Filter';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchItem = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);
    if (searchText !== '') {
      const data = restaurants.filter((rest) =>
        rest?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(data);

      if (data.length === 0) setErrorMessage('No such item found!');
      setLoading(false);
    } else {
      setFilteredRestaurants(restaurants);
      setErrorMessage('');
      setLoading(false);
    }
  };

  const sortByRating = () => {
    setRestaurants(restaurants.filter((rest) => rest.data.avgRating > 4));
  };

  const clearFilters = () => {
    setRestaurants(data);
  };

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.275845&lng=85.776639&page_type=DESKTOP_WEB_LISTING'
      );
      const data = await res.json();
      console.log(data);
      setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      <Navbar />
      <Searchbar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchItem={handleSearchItem}
      />
      <Filter
        restaurants={restaurants}
        sortByRating={sortByRating}
        clearFilters={clearFilters}
      />

      <RestaurantList
        restaurants={filteredRestaurants}
        errorMessage={errorMessage}
        loading={loading}
      />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
