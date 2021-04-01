import { createSlice } from '@reduxjs/toolkit';
import defaultState from './defaultState';
import { createSelectors } from '../../../utils';
import getters from './getters';
import setters from './setters';

const slice = 'chatbox';

const { reducer, actions } = createSlice({
  name: slice,
  initialState: defaultState,
  reducers: setters,
});

const selectors = createSelectors(getters, slice);

export {
  actions,
  selectors,
  slice,
};

export default reducer;
