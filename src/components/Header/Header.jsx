import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';

function Header() {
  const name = useSelector((state) => state.detailsReducer?.details?.name);
  return (
    <header className={ styles.container }>
      <h1 className={ styles.title }>{ name?.toUpperCase() || 'POKEDEX' }</h1>
      <div className={ styles.pokeball } />
    </header>
  );
}

export default Header;
