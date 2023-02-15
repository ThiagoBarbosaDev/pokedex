import React from 'react';
import { useDispatch } from 'react-redux';
import FilterButton from '../FilterButton/FilterButton';
import styles from './TypeFilterBar.module.scss';
import { setFilterType } from '../../redux/actions/filterActions';

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
  const dispatch = useDispatch();
  const handleReset = (event) => {
    event.preventDefault();
    dispatch(setFilterType(''));
  };

  return (
    <div className={ styles.wrapper }>
      <h2 className={ styles['filter-title'] }>Filter By Type</h2>
      <div className={ styles.container }>
        {POKEMON_TYPES.map((type) => (
          <FilterButton type={ type } key={ type } />
        ))}
      </div>
      <form className={ styles.controls } onSubmit={ handleReset }>
        <button type="submit" className={ styles['reset-button'] }>
          Reset
        </button>
      </form>
    </div>
  );
}

export default TypeFilterBar;
