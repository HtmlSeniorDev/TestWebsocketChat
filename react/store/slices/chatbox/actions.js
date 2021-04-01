import { actions } from './reducer'
import {connectToWebsocket, socketListener, socketSendData} from "../../../api/websocket";


const { setMessages } = actions;

/**
 * Thunk middleware functions
 */

/**
 *Get data from Websocket
 * @returns {Function}
 */
const socket = new WebSocket("ws://skade.cc:38080");

export const socketOpenConnection = () => async (dispatch) => {
  socket.onmessage = function (event) {
    dispatch(setMessages(event.data));
  }
};

export const socketSend = (message) => async (dispatch) => {
    socket.send(JSON.stringify({
      name:'mr верстальщик',
      message:message
    }));
};
