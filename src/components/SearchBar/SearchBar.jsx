import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { setFilterName } from '../../redux/actions/filterActions';
import styles from './SearchBar.module.scss';
import useDebounce from '../../hooks/useDebounce';

const DEBOUNCE_DELAY = 500;

function SearchBar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(search, DEBOUNCE_DELAY);

  useEffect(() => {
    dispatch(setFilterName(debouncedSearch));
  }, [debouncedSearch]);

  return (
    <section className={ styles.container }>
      <input
        className={ styles.search }
        type="text"
        value={ search }
        onChange={ (event) => setSearch(event.target.value) }
        placeholder="Search By Name"
      />
      {/* <div
        className={ styles['search-button'] }
      >
      </div> */}
      <FaSearch className={ styles['search-icon'] } />
    </section>
  );
}

export default SearchBar;
