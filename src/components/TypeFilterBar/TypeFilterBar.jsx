import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import styles from './TypeFilterBar.module.scss';

const POKEMON_TYPES = [
  'bug',
  'dragon',
  'electric',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'water',
];

function TypeFilterBar() {
  return (
    <div className={ styles.wrapper }>
      <div>
        <h2 className={ styles['filter-title'] }>Filter By Type</h2>
        <div className={ styles.container }>
          {POKEMON_TYPES.map((type) => (
            <FilterButton type={ type } key={ type } />
          ))}
        </div>
        <div className={ styles.controls }>
          <button type="button" className={ styles['reset-button'] }>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TypeFilterBar;
