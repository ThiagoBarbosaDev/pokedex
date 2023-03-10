import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPokemons from '../../redux/actions/getPokemons';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import styles from './Pokedex.module.scss';
import Header from '../../components/Header/Header';
import TypeFilterBar from '../../components/TypeFilterBar/TypeFilterBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';

const filterByType = (pokemon, filterType) => {
  if (filterType) {
    return pokemon.types.includes(filterType);
  }
  return true;
};

function Pokedex() {
  const dispatch = useDispatch();
  const { isLoading, pokemons } = useSelector((state) => state.pokemonReducer);
  const filterType = useSelector((state) => state.filterReducer.filterType);
  const { search } = useSelector((state) => state.filterReducer);

  useEffect(() => {
    if (!pokemons.length) {
      dispatch(getPokemons());
    }
  }, []);

  const pokemonOffset = 0;
  const pokemonLimit = 20;
  return (
    <>
      <Header />
      <main className={ styles.wrapper }>
        { isLoading ? <Loading /> : (
          <>
            <div className={ styles['filters-container'] }>
              <TypeFilterBar />
              <SearchBar />
            </div>
            <section className={ styles.container }>
              {pokemons
                .filter((pokemon) => pokemon.name
                  .toLowerCase()
                  .includes(search.toLowerCase()))
                .filter((pokemon) => filterByType(pokemon, filterType))
                .slice(pokemonOffset, pokemonLimit)
                .map((pokemon) => (
                  <PokemonCard pokemon={ pokemon } key={ pokemon.id } />
                ))}
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Pokedex;
