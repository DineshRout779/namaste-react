import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './src/components/Navbar';
import RestaurantList from './src/components/RestaurantList';
import Searchbar from './src/components/Searchbar';
import 'remixicon/fonts/remixicon.css';
import './styles.css';
import Filter from './src/components/Filter';
import { data } from './src/utils/data';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  const sortByRating = () => {
    setRestaurants(restaurants.filter((rest) => rest.data.avgRating > 4));
  };

  const clearFilters = () => {
    setRestaurants(data);
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setRestaurants(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <>
      <Navbar />
      <Searchbar />
      <Filter
        restaurants={restaurants}
        sortByRating={sortByRating}
        clearFilters={clearFilters}
      />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
