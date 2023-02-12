import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterType } from '../../redux/actions/filterActions';

function FilterButton({ type }) {
  const filterType = useSelector((state) => state.filterReducer.filterType);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={ () => dispatch(setFilterType(type)) }
      disabled={ filterType === type }
    >
      {type.toUpperCase()}
    </button>
  );
}

FilterButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FilterButton;
