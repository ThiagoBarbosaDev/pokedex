import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  const name = useSelector((state) => state.detailsReducer?.details?.name);
  return (
    <header className={ styles.container }>
      <Link to="/" className={ styles.title }>POKEDEX</Link>
      <div className={ styles.pokeball } />
    </header>
  );
}

export default Header;
