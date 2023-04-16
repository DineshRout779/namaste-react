import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ item }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = item.data;
  return (
    <div className='card'>
      <img
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt=''
        className='card-img'
      />
      <div className='card-desc'>
        <h4>{name}</h4>
        <small>{cuisines.join(',')}</small>

        <div className='card-rating'>
          <i className='ri-star-fill'></i>
          <strong>{avgRating}</strong>
        </div>

        <small>
          Starts from ₹{costForTwo / (2 * 100)} &#x2022; {deliveryTime} minutes
        </small>
      </div>
    </div>
  );
};

export default RestaurantCard;
