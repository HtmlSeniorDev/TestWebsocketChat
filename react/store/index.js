import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chatbox from './slices/chatbox/reducer';

export default function makeStore() {
  return configureStore({
    reducer: combineReducers({
      chatbox,
    }),
  });
}
