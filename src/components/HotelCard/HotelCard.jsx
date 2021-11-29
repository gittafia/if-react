import React from 'react';
import PropTypes from 'prop-types';
import './HotelCards.css';

const HotelCard = function ({ name, city, country, imageUrl }) {
  return (
    <li>
      <img src={imageUrl} alt="hotel_picture" />
      <a href="#hotelCard">{name}</a>
      <p>
        {city}, {country}
      </p>
    </li>
  );
};

export default HotelCard;

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
