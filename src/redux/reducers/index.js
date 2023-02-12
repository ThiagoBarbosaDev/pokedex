import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  pokemonReducer,
  filterReducer,
});

export default rootReducer;
