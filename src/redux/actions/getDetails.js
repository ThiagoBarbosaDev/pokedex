import { SET_DETAILS, SET_IS_LOADING } from '.';

const setIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});

const setIsError = (payload) => ({
  type: SET_IS_ERROR,
  payload,
});

const setDetails = (payload) => ({
  type: SET_DETAILS,
  payload,
});

const getDetails = (name) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    dispatch(setDetails(data));
  } catch (error) {
    setIsError(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export default getDetails;
