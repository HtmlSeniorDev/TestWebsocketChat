import { actions } from './reducer'
import {connectToWebsocket, socketListener, socketSendData} from "../../../api/websocket";

/**
 * Thunk middleware functions
 */

/**
 *Get data from Websocket
 * @returns {Function}
 */
export const socketOpenConnection = () => async (dispatch) => {
  dispatch(connectToWebsocket());
  dispatch(socketListener())
};

export const socketSend = (message) => async (dispatch) => {
  dispatch(socketSendData(message));
};
