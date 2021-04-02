import defaultState from './defaultState';

const setConnectionState = (state = defaultState, action) => ({
  ...state,
  isConnected: action.payload,
});

const setMessages = (state = defaultState, action) => ({
  ...state,
  messages: [...state.messages, action.payload],
});


export default {
  setConnectionState,
  setMessages
};
