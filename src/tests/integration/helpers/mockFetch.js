import allPokemonsMock from '../mocks/allPokemons.mock';
import bulbasaurMock from '../mocks/bulbasaur.mock';
import bulbasaurSpeciesMock from '../mocks/bulbasaurSpecies.mock';
import charmanderMock from '../mocks/charmander.mock';

export const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
export const BULBASAUR_URL = 'https://pokeapi.co/api/v2/pokemon/1/';
export const BULBASAUR_URL_VARIANT = 'https://pokeapi.co/api/v2/pokemon/bulbasaur/';
export const BULBASAUR_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species/bulbasaur/';
export const CHARMANDER_URL = 'https://pokeapi.co/api/v2/pokemon/4/';
export const CHARMANDER_URL_VARIANT = 'https://pokeapi.co/api/v2/pokemon/charmander/';

const mockFetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: async () => {
    if (url === ALL_POKEMONS_URL) {
      return allPokemonsMock;
    }
    if (url === BULBASAUR_URL || url === BULBASAUR_URL_VARIANT) {
      return bulbasaurMock;
    }

    if (url === CHARMANDER_URL || url === CHARMANDER_URL_VARIANT) {
      return charmanderMock;
    }

    if (url === BULBASAUR_SPECIES_URL) {
      return bulbasaurSpeciesMock;
    }

    return Promise.reject(new Error('No valid URL received in mock fetch'));
  },
});

export default mockFetch;
