import { SET_IS_ERROR, SET_IS_LOADING, SET_POKEDEX, SET_POKEMONS } from '../actions';

const INITIAL_STATE = {
  pokedex: [],
  pokemons: [],
  isLoading: true,
  isError: null,
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_POKEDEX:
    return { ...state, pokedex: action.payload };
  case SET_POKEMONS:
    return { ...state, pokemons: action.payload };
  case SET_IS_LOADING:
    return { ...state, isLoading: action.payload };
  case SET_IS_ERROR:
    return { ...state, isError: action.payload };
  default:
    return state;
  }
};

export default pokemonReducer;
