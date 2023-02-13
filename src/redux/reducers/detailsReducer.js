import {
  SET_IS_ERROR,
  SET_IS_LOADING,
  SET_DETAILS,
} from '../actions';

const INITIAL_STATE = {
  details: {},
  isLoading: true,
  isError: null,
};

const detailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_DETAILS:
    return { ...state, details: action.payload };
  case SET_IS_LOADING:
    return { ...state, isLoading: action.payload };
  case SET_IS_ERROR:
    return { ...state, isError: action.payload };
  default:
    return state;
  }
};

export default detailsReducer;
