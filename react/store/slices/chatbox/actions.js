import { connect, send } from '@giantmachines/redux-websocket';

/**
 * Middleware functions
 */

/**
 *Get data from Websocket middleware
 * @returns {Function}
 */
export const socketOpenConnection = () => async (dispatch) => {
  /**
   * (connect) Allows automatic reconnect after closed socket
   */
  dispatch(connect('ws://skade.cc:38080'));
};
/**
 * @param message {string}
 * @returns {(function(*): Promise<void>)|*}
 */
export const socketSend = (message) => async (dispatch) => {
    dispatch(send(JSON.stringify({
      name:'mr верстальщик',
      message:message
    })));
};
