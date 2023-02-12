import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterName } from '../../redux/actions/filterActions';

function SearchBar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  return (
    <section>
      <input
        type="text"
        value={ search }
        onChange={ (event) => setSearch(event.target.value) }
        placeholder="Search By Name"
      />
      <button onClick={ () => dispatch(setFilterName(search)) }>
        Search
      </button>
    </section>
  );
}

export default SearchBar;
