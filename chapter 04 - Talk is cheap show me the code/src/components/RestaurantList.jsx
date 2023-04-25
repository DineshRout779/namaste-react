import LoadingCard from './LoadingCard';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, loading, errorMessage }) => {
  if (!restaurants) return null;

  if (errorMessage) {
    return (
      <div className='container'>
        <h2>{errorMessage}</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='container loading-group'>
        {[...'wefwefefeeryerfef'].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className='container cards-group'>
      {restaurants.map((item) => (
        <RestaurantCard item={item} key={item.data.id} />
      ))}
    </div>
  );
};

export default RestaurantList;
