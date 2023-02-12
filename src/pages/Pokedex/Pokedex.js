import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPokemons from '../../redux/actions/getPokemons';

function Pokedex() {
  const dispatch = useDispatch();
  const { pokedex, isLoading } = useSelector((state) => state.pokemonReducer);

  useEffect(() => {
    if (!pokedex.length) {
      dispatch(getPokemons());
    }
  }, []);

  if (isLoading) { return <div>Loading...</div>; }
  return <div>Pokedex</div>;
}

export default Pokedex;
