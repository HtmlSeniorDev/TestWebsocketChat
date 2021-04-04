import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {disconnect} from '@giantmachines/redux-websocket';
import ChatBox from "../../components/ChatBox";
import {socketOpenConnection, socketSend} from "../../store/slices/chatbox/actions";
import {selectors, actions} from "../../store/slices/chatbox/reducer";
import config from "../../../config";

const {setConnectionState, setMessages} = actions;
const {getMessages, getConnectionState} = selectors;

const ChatBoxContainer = () => {
  const dispatch = useDispatch();
  const messages = useSelector(getMessages)
  const isConnected = useSelector(getConnectionState)
  const [message, setMessage] = useState('');

  useEffect(() => {
    /*
     * Connect to websocket
     */
    dispatch(socketOpenConnection());
    dispatch(setConnectionState(true));

    return () => {
      /*
       * Disconnecting after unmount
       */
      dispatch(disconnect())
      dispatch(setConnectionState(false))
    }
  }, [isConnected]);

  const sendMessage = () => {
    dispatch(socketSend(message))
    dispatch(setMessages({
      message,
      name:config.username,
      own:true
    })
    )
    /**
     * clean input after sending
     */
    setMessage('')
  };
  /**
   * Change input state
   * @param message  {string}
   */
  const handleEdit = (message) => {
    setMessage(message)
  };

  return (
    <ChatBox
      handleSend={sendMessage}
      handleEdit={handleEdit}
      messages={messages}
      inputMessage={message}
    />
  )
};

export default ChatBoxContainer;

