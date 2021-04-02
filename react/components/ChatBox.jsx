import * as React from "react";
import PropTypes from 'prop-types';

export default function ChatBox({ handleSend, handleEdit, messages, inputMessage }) {
  return (
    <div className="chat-box">
    <div className="chat-box__header">
      <a href="#" className="back"><i className="icon icon-left"/></a>
      <h1 className="main-title">Добро пожаловать в онлаин-чат службы поддержки</h1>
      <div stlyes={{width:'12px'}}/>
    </div>
    <div className="chat-box__messages">
      <div className="chat-box__separator">
        12 июля
      </div>
      {messages.map((item, index)=> (
        <>
        <div className={`chat-box__message ${item?.own ? 'own' : 'message'}`} key={index}>
          {
            !item?.own && <div className="name">Cлужба поддержки</div>
          }
          <div className="message">
          <br/>{item.message}
            <div className="time">13:05</div>
          </div>
        </div>
        <div className="clear"/>
        </>))}
    </div>
    <div onSubmit={event => event.preventDefault()} className="chat-box__form main-form">
      <textarea value={inputMessage} onChange={(event)=> handleEdit(event.target.value)} className="input-style" rows="7"/>
      <div className="row">
        <label className="main-form__item file-field">
        </label>
        <div className="main-form__submit">
          <button onClick={()=> handleSend()} className="radius-button standart rounded">Отправить</button>
        </div>
      </div>
    </div>
  </div>
  )
}

ChatBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputMessage: PropTypes.string.isRequired,
  handleSend: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,

};
