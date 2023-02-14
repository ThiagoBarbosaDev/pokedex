import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { setFilterName } from '../../redux/actions/filterActions';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  return (
    <section className={ styles.container }>
      <input
        className={ styles.search }
        type="text"
        value={ search }
        onChange={ (event) => setSearch(event.target.value) }
        placeholder="Search By Name"
      />
      <button
        onClick={ () => dispatch(setFilterName(search)) }
        className={ styles['search-button'] }
      >
        <FaSearch className={ styles['search-icon'] } />
      </button>
    </section>
  );
}

export default SearchBar;
