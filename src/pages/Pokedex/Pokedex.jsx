import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPokemons from '../../redux/actions/getPokemons';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function Pokedex() {
  const dispatch = useDispatch();
  const { pokedex, isLoading, pokemons } = useSelector(
    (state) => state.pokemonReducer,
  );

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
      <h1>Pokedex</h1>
      {pokemons.slice(pokemonOffset, pokemonLimit).map((pokemon) => (
        <PokemonCard pokemon={ pokemon } key={ pokemon.id } />
      ))}
    </div>
  );
}

export default Pokedex;
