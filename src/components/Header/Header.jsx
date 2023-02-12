import React from 'react';
import styles from './Header.module.scss';

console.log(styles);

function Header() {
  return (
    <header className={ styles.container }>
      <h1 className={ styles.title }>POKEDEX</h1>
    </header>
  );
}

export default Header;