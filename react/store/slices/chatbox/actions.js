import { connect, send } from '@giantmachines/redux-websocket';
import config from "../../../../config";

/**
 * Middleware functions
 */

/**
 * Get data from Websocket middleware
 * (connect) Allows automatic reconnect after closed socket
 * @returns {Function}
 */
export const socketOpenConnection = () => async dispatch => dispatch(connect('ws://skade.cc:38080'));
/**
 * @param message {string}
 * @returns {(function(*): Promise<void>)|*}
 */
export const socketSend = (message) => async (dispatch) => {
  dispatch(send({
    name:config.username,
    message:message
  }));
};
