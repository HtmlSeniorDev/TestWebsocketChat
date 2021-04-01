import React from 'react'
import ChatBox from "../../components/ChatBox";
import { useDispatch } from 'react-redux'
import {socketOpenConnection, socketSend} from "../../store/slices/chatbox/actions";
import { selectors, actions} from "../../store/slices/chatbox/reducer";

const { setConnectionState } = actions;
const ChatBoxContainer = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = React.useState();
  React.useEffect(()=> {
    dispatch(socketOpenConnection());
    dispatch(setConnectionState(true));

    return () => {
      dispatch(setConnectionState(false))
    }
  },[]);

  const sendMessage = () => {
    dispatch(socketSend(message))
  };

  const handleEdit = (message) => {
    setMessage(message)
  };

 return (
    <ChatBox
     handleSend={sendMessage}
     handleEdit={handleEdit}
    />
  )
};

export default ChatBoxContainer;

