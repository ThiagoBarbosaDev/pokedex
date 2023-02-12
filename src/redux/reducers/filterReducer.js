import { SET_FILTER_NAME, SET_FILTER_TYPE } from '../actions';

const INITIAL_STATE = {
  search: '',
  filterType: '',
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_FILTER_NAME:
    return { ...state, search: action.payload };
  case SET_FILTER_TYPE:
    return { ...state, filterType: action.payload };
  default:
    return state;
  }
};

export default filterReducer;
