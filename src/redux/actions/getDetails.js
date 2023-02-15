import { SET_DETAILS, SET_IS_ERROR, SET_IS_LOADING } from '.';

const setIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});

const setIsError = (payload) => ({
  type: SET_IS_ERROR,
  payload,
});

const setDetails = (payload) => ({
  type: SET_DETAILS,
  payload,
});

const transformDetails = (speciesData, pokemonData) => ({
  name: speciesData.name,
  genus: speciesData.genera.find(({ language: { name } }) => name === 'en').genus,
  height: pokemonData.height,
  weight: pokemonData.weight,
  flavorText: speciesData.flavor_text_entries.find(
    (flavorTextData) => flavorTextData.language.name === 'en',
  ).flavor_text,
  number: pokemonData.id,
  pictureUrl:
    pokemonData.sprites.versions['generation-i']['red-blue'].front_default,
});

const getDetails = (name) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const speciesResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}/`,
    );
    const speciesData = await speciesResponse.json();
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}/`,
    );
    const pokemonData = await pokemonResponse.json();
    const data = await Promise.all([speciesData, pokemonData]);
    const entryData = transformDetails(data[0], data[1]);
    dispatch(setDetails(entryData));
  } catch (error) {
    setIsError(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default getDetails;
