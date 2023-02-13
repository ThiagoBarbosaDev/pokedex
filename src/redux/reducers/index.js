import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import filterReducer from './filterReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
  pokemonReducer,
  filterReducer,
  detailsReducer,
});

export default rootReducer;
