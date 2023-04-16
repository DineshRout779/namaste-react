import { useState } from 'react';

const buttons = [
  { title: 'Top Rated', type: 'TOP_RATED' },
  {
    title: 'Delivery Time',
    type: 'DELIVERY_TIME',
  },
  {
    title: 'Cost: Low To High',
    type: 'LOW_TOO_HIGH',
  },
  {
    title: 'Cost: High To Low',
    type: 'HIGH_TO_LOW',
  },
];

const Filter = ({ restaurants, sortByRating, clearFilters }) => {
  const [activeButton, setActiveButton] = useState();

  const handleTabClick = (index) => {
    console.log(index);
    setActiveButton(index);

    switch (index) {
      case 0:
        console.log('here..');
        sortByRating();
        break;
      default:
        clearFilters();
        break;
    }
  };

  return (
    <div className='container filter-container'>
      <h2>{restaurants.length} restaurants</h2>
      <div className='filter'>
        <div className='filter-btn-group'>
          {buttons.map((btn, i) => (
            <button
              className={
                activeButton === i
                  ? 'btn btn-filter btn-active'
                  : 'btn btn-filter'
              }
              onClick={() => handleTabClick(i)}
              key={btn.type}
            >
              {btn.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
