import React from 'react';
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../../App';
import mockFetch, { ALL_POKEMONS_URL, BULBASAUR_SPECIES_URL, BULBASAUR_URL_VARIANT, CHARMANDER_URL } from './helpers/mockFetch';

describe('Integration between Pokedex and Details pages and related subcomponents', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should render successfully ', async () => {
    const fetch = jest.spyOn(global, 'fetch').mockImplementation((url) => mockFetch(url));
    renderWithRouterAndRedux(<App />);
    expect(fetch).toBeCalledWith(ALL_POKEMONS_URL);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(fetch).toHaveBeenLastCalledWith(CHARMANDER_URL);
    const bulbasaur = screen.queryByRole('img', { name: /bulbasaur/i });
    expect(bulbasaur).toBeInTheDocument();
    expect(bulbasaur.src).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    );

    expect(fetch).toBeCalledTimes(3);

    const searchInput = screen.getByRole('textbox');
    userEvent.type(searchInput, 'Ivysaur');
    await waitForElementToBeRemoved(() => screen.getByRole('img', { name: /bulbasaur/i }));
    expect(bulbasaur).not.toBeInTheDocument();

    userEvent.clear(searchInput);
    await waitFor(() => screen.getByRole('img', { name: /bulbasaur/i }));

    const bulbasaurOnSearchClear = screen.getByRole('img', {
      name: /bulbasaur/i,
    });
    expect(bulbasaurOnSearchClear).toBeInTheDocument();

    const charmander = screen.queryByRole('img', {
      name: /charmander/i,
    });
    expect(charmander).toBeInTheDocument();

    const grassFilterButton = screen.getByRole('button', {
      name: /grass/i,
    });
    expect(grassFilterButton).toBeInTheDocument();
    userEvent.click(grassFilterButton);
    expect(charmander).not.toBeInTheDocument();

    userEvent.click(bulbasaurOnSearchClear);
    expect(fetch).toHaveBeenLastCalledWith(BULBASAUR_SPECIES_URL);
    const pokedexSprite = await screen.findByRole('img', {
      name: /bulbasaur generation one sprite/i,
    });
    expect(pokedexSprite).toBeInTheDocument();

    const flavorText = screen.getByText(
      /a strange seed was planted on its back at birth\. the plant sprouts and grows with this pokémon\./i,
    );
    expect(flavorText).toBeInTheDocument();

    const pokemonNumber = screen.getByText(/001/i);
    expect(pokemonNumber).toBeInTheDocument();

    const pokemonName = screen.getByText(/bulbasaur/i);
    expect(pokemonName).toBeInTheDocument();

    const pokemonHeight = screen.getByText(/2' 04"/i);
    expect(pokemonHeight).toBeInTheDocument();

    const pokemonWeight = screen.getByText(/15.0 lb/i);
    expect(pokemonWeight).toBeInTheDocument();

    const pokemonGenus = screen.getByText('SEED');
    expect(pokemonGenus).toBeInTheDocument();

    const goHomeLink = screen.getByRole('link', { name: /pokedex/i });
    userEvent.click(goHomeLink);

    const bulbasaurAfterNavigation = await screen.findByRole('img', {
      name: /bulbasaur/i,
    });
    expect(bulbasaurAfterNavigation).toBeInTheDocument();
    expect(fetch).toHaveBeenLastCalledWith(BULBASAUR_URL_VARIANT);
    expect(fetch).toBeCalledTimes(5);
  });
});
