import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterType } from '../../redux/actions/filterActions';
import styles from './FilterButton.module.scss';

function FilterButton({ type }) {
  const filterType = useSelector((state) => state.filterReducer.filterType);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(setFilterType(type));
  };

  return (
    <button
      className={ styles['filter-button'] }
      type="button"
      onClick={ handleSearch }
      disabled={ filterType === type }
    >
      {type}
    </button>
  );
}

FilterButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FilterButton;
