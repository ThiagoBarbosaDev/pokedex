import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={ styles.container }>
      <Link to="/" className={ styles.title }>POKEDEX</Link>
      <div className={ styles.pokeball } />
    </header>
  );
}

export default Header;
