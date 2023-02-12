import React from 'react';
import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      <span>{pokemon.id}</span>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PokemonCard;
