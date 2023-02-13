import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.scss';

function PokemonCard({ pokemon }) {
  return (
    <div className={ styles.wrapper }>
      <Link className={ styles.container } to={ `/${pokemon.name.toLowerCase()}` }>
        <span>{pokemon.name}</span>
        <img
          className={ styles['pokemon-picture'] }
          src={ pokemon.pictureUrl }
          alt={ `${pokemon.name}` }
        />
        <div className={ styles['stats-container'] }>
          { pokemon.stats
            .map((stat) => <span key={ stat.name }>{`${stat.name}: ${stat.base}`}</span>)}
        </div>
      </Link>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default PokemonCard;
