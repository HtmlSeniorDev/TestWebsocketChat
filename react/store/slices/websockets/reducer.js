import defaultState from "../chatbox/defaultState";
import actionTypes from "./actionTypes";


// Use the initialState as a default value
export default function WebsocketReducer(state = defaultState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case actionTypes.message:
      return {
        ...state,
        messages: [...state.messages, JSON.parse(action.payload.message)]      }
    case actionTypes.close:
      return {
        ...state,
        isConnected: false
      }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}