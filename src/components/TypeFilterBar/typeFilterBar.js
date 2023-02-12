import React from 'react';
import FilterButton from '../FilterButton/FilterButton';

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
    <div>
      {
        POKEMON_TYPES.map((type) => <FilterButton type={ type } key={ type } />)
      }
    </div>
  );
}

export default TypeFilterBar;
