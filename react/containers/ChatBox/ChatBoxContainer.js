import React, { useState, useEffect } from 'react'
import ChatBox from "../../components/ChatBox";
import { useDispatch, useSelector } from 'react-redux'
import {socketOpenConnection, socketSend} from "../../store/slices/chatbox/actions";
import { selectors, actions } from "../../store/slices/chatbox/reducer";

const { setConnectionState, setMessages } = actions;
const { getMessages } = selectors;

const ChatBoxContainer = () => {
  const dispatch = useDispatch();
  const messages = useSelector(getMessages)
  const [message, setMessage] = useState();

  useEffect(()=> {
    dispatch(socketOpenConnection());
    dispatch(setConnectionState(true));

    return () => {
      dispatch(setConnectionState(false))
    }
  },[]);

  const sendMessage = () => {
    dispatch(socketSend(message))
    dispatch(setMessages(message))
  };

  const handleEdit = (message) => {
    setMessage({
      message,
      name:'mr верстальщик',
      own:true
    })
  };

 return (
    <ChatBox
     handleSend={sendMessage}
     handleEdit={handleEdit}
     messages={messages}
    />
  )
};

export default ChatBoxContainer;

