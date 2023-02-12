import { SET_IS_LOADING, SET_POKEDEX, SET_POKEMONS } from '.';

const setIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});

const setIsError = (payload) => ({
  type: SET_IS_ERROR,
  payload,
});

const setPokedex = (payload) => ({
  type: SET_POKEDEX,
  payload,
});

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

const capitalizeKebabCase = (string) => string.split('-').map((substring) => {
  const capitalizedLetter = substring[0].toUpperCase();
  const restWord = substring.slice(1);
  return capitalizedLetter + restWord;
}).join(' ');

const transformPokemon = (pokemonData) => pokemonData
  .map(({ stats, id, name, sprites, types, weight }) => ({
    stats: stats.map((stat) => ({
      name: capitalizeKebabCase(stat.stat.name),
      base: stat.base_stat,
    })),
    id,
    name,
    pictureUrl: sprites.other['official-artwork'].front_default,
    types: types.map((type) => type.type.name),
    weight,
  }));

const fetchPokemon = async (url) => {
  const pokemonResponse = await fetch(url);
  const pokemonData = await pokemonResponse.json();
  return pokemonData;
};

const getPokemons = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    dispatch(setPokedex(data));
    const pokemons = await Promise.all(
      data.results.map(async ({ url }) => fetchPokemon(url)),
    );
    const minifiedPokemonData = transformPokemon(pokemons);
    dispatch(setPokemons(minifiedPokemonData));
  } catch (error) {
    setIsError(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default getPokemons;
