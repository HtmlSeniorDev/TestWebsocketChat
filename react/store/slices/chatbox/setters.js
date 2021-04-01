import defaultState from './defaultState';

const getConnectionState = (state = defaultState, action) => ({
  ...state,
  isConnected: action.payload,
});


export default {
  getConnectionState,
};
