import { GET_POKEMONS } from '../actions';

const INITIAL_STATE = {
  pokemons: [],
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
  case GET_POKEMONS:
    return state;
  default:
    return state;
  }
};

export default pokemonReducer;
