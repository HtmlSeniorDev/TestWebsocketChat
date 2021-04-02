const actionTypes = Object.freeze({
    connect:'REDUX_WEBSOCKET::CONNECT',
    open:'REDUX_WEBSOCKET::OPEN',
    send:'REDUX_WEBSOCKET::SEND',
    message:'REDUX_WEBSOCKET::MESSAGE',
    error:'REDUX_WEBSOCKET::ERROR',
    close:'REDUX_WEBSOCKET::CLOSED'
});

export default actionTypes;