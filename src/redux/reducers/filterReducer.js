import { SET_FILTER_NAME } from '../actions';

const INITIAL_STATE = {
  search: '',
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_FILTER_NAME:
    return { ...state, search: action.payload };
  default:
    return state;
  }
};

export default filterReducer;
