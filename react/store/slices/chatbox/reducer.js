import { createSlice } from '@reduxjs/toolkit';
import defaultState from './defaultState';
import { createSelectors } from '../../../utils';
import getters from './getters';
import setters from './setters';

const slice = 'chatBox';
const rootSlice = 'rootChatBox'

const { reducer, actions } = createSlice({
  name: slice,
  initialState: defaultState,
  reducers: setters,
});

const selectors = createSelectors(getters, rootSlice);

export {
  actions,
  selectors,
  slice,
};

export default reducer;
