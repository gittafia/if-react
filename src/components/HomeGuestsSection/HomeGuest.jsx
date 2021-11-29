import React from 'react';
import PropTypes from 'prop-types';

import HotelCard from '../HotelCard/HotelCard';
import './HomeGuests.css';

const HomeGuest = function (props) {
  const { data } = props;
  const hotels = [...data].slice(0, 4);
  return (
    <ul className="recommendations__list">
      {hotels.map((item) => (
        <HotelCard
          name={item.name}
          city={item.city}
          country={item.country}
          imageUrl={item.imageUrl}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default HomeGuest;

HomeGuest.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
