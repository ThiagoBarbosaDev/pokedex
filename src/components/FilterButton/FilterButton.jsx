import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterType } from '../../redux/actions/filterActions';
import styles from './FilterButton.module.scss';

function FilterButton({ type }) {
  const filterType = useSelector((state) => state.filterReducer.filterType);
  const dispatch = useDispatch();
  // não fazer função dentro do onclick
  // fazer botão agnostico
  // fazer texttransform capitalize na linha 20
  // styles[variant]; passa o estilo por props pelo pai
  // usar classnames pra sinalizar que está ativo
  return (
    <button
      className={ styles.container }
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
