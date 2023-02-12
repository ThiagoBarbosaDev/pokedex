import { SET_FILTER_NAME, SET_FILTER_TYPE } from '.';

export const setFilterName = (payload) => ({
  type: SET_FILTER_NAME,
  payload,
});

export const setFilterType = (payload) => ({
  type: SET_FILTER_TYPE,
  payload,
});
