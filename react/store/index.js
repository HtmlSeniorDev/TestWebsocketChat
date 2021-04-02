import reduceReducers from 'reduce-reducers';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reduxWebsocket from '@giantmachines/redux-websocket';
import chatBox from './slices/chatbox/reducer';
import WebsocketReducer from "./slices/websockets/reducer";
import defaultState from "./slices/chatbox/defaultState";
import actionTypes from "./slices/websockets/actionTypes";

const reduxWebsocketMiddleware = reduxWebsocket();

const rootChatBox = reduceReducers(defaultState, WebsocketReducer, chatBox);

export default function makeStore() {
  return configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          actionTypes.send,
          actionTypes.connect,
          actionTypes.message,
          actionTypes.open,
          actionTypes.error,
          actionTypes.close,
        ],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }).concat(reduxWebsocketMiddleware),
    reducer: combineReducers({
      rootChatBox
    }),
  });
}
