// https://pokeapi.co/api/v2/pokemon/charmander

const charmanderMock = {
  abilities: [
    {
      ability: {
        name: 'blaze',
        url: 'https://pokeapi.co/api/v2/ability/66/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'solar-power',
        url: 'https://pokeapi.co/api/v2/ability/94/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 62,
  height: 6,
  id: 4,
  name: 'charmander',
  order: 5,
  species: {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
  },
  sprites: {
    other: {
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/4.png',
        },
      },
    },
  },
  stats: [
    {
      base_stat: 39,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 52,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 43,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
    },
  ],
  weight: 85,
};

export default charmanderMock;
