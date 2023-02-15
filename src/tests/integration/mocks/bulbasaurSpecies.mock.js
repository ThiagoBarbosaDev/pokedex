/* eslint-disable max-len */
// 20230215015157
// https://pokeapi.co/api/v2/pokemon-species/bulbasaur

const bulbasaurSpeciesMock = {
  flavor_text_entries: [
    {
      flavor_text:
        'A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'red',
        url: 'https://pokeapi.co/api/v2/version/1/',
      },
    },
  ],
  genera: [
    {
      genus: 'Seed Pokémon',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
    },
  ],
  id: 1,
  name: 'bulbasaur',
  order: 1,
};

export default bulbasaurSpeciesMock;
