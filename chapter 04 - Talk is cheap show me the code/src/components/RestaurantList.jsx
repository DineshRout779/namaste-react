import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants }) => {
  return (
    <div className='container cards-group'>
      {restaurants.map((item, i) => (
        <RestaurantCard item={item} key={item.data.id} />
      ))}
    </div>
  );
};

export default RestaurantList;
