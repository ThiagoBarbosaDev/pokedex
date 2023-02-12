import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPokemons from '../../redux/actions/getPokemons';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import styles from './Pokedex.module.scss';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import TypeFilterBar from '../../components/TypeFilterBar/typeFilterBar';

const filterByType = (pokemon, filterType) => {
  if (filterType) {
    return pokemon.types.includes(filterType);
  }
  return true;
};

function Pokedex() {
  const dispatch = useDispatch();
  const { pokedex, isLoading, pokemons } = useSelector(
    (state) => state.pokemonReducer,
  );
  const filterType = useSelector((state) => state.filterReducer.filterType);
  const { search } = useSelector((state) => state.filterReducer);

  useEffect(() => {
    if (!pokedex.length) {
      dispatch(getPokemons());
    }
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(pokemons);
  const pokemonOffset = 0;
  const pokemonLimit = 20;
  return (
    <div>
      <Header />
      <SearchBar />
      <TypeFilterBar />
      <section className={ styles.container }>
        {pokemons
          .filter((pokemon) => pokemon.name.includes(search))
          .filter((pokemon) => filterByType(pokemon, filterType))
          .slice(pokemonOffset, pokemonLimit)
          .map((pokemon) => (
            <PokemonCard pokemon={ pokemon } key={ pokemon.id } />
          ))}
      </section>
    </div>
  );
}

export default Pokedex;
