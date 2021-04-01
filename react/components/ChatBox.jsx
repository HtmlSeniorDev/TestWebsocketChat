import * as React from "react";

export default function ChatBox({ handleSend, handleEdit }) {
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
      <div className="chat-box__message">
        <div className="name">Служба поддержки</div>
        <div className="message">
          Добрый день, Дмитрий. <br/>Опишите вашу проблему более подробно. У вас возникли ошибки (баги) на сайте?
          <div className="time">13:05</div>
          <div className="clear"/>
        </div>
      </div>
      <div className="clear"/>
      <div className="chat-box__message own">
        <div className="message">
          Добрый день, Дмитрий. <br/>Опишите вашу проблему более подробно. У вас возникли ошибки (баги) на сайте?
          <div className="time">13:05</div>
          <div className="clear"/>
        </div>
      </div>
      <div className="clear"/>
      <div className="chat-box__message">
        <div className="name">Служба поддержки</div>
        <div className="message">
          Добрый день, Дмитрий. <br/>Опишите вашу проблему более подробно. У вас возникли ошибки (баги) на сайте?
          <div className="time">13:05</div>
          <div className="clear"/>
        </div>
      </div>
      <div className="clear"/>
      <div className="chat-box__message own">
        <div className="message">
          Добрый день, Дмитрий. <br/>Опишите вашу проблему более подробно. У вас возникли ошибки (баги) на сайте?
          <div className="time">13:05</div>
          <div className="clear"/>
        </div>

      <div className="clear"/>
    </div>
    </div>
    <div onSubmit={event => event.preventDefault()} className="chat-box__form main-form">
      <textarea onChange={(event)=> handleEdit(event.target.value)} className="input-style" rows="7"/>
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

