import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((item, index) => (
        <Card card={item} key={index}/>
      ))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired
};

export default Cards;