import React from 'react';
import PropTypes from 'prop-types';
import styles from './PokemonCard.module.scss';

function PokemonCard({ pokemon }) {
  return (
    <div className={ styles.container }>
      <span>{pokemon.name}</span>
      <img
        className={ styles['pokemon-picture'] }
        src={ pokemon.pictureUrl }
        alt={ `${pokemon.name}` }
      />
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
