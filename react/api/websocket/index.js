const socket = new WebSocket("ws://skade.cc:38080");

export const connectToWebsocket = () => {
  socket.onopen = function() {
    console.log('connected succesfully')
  };

};

// export const socketListener = () => {
//   socket.onmessage = function(event) {
//     return event.data;
//   };

//   socket.onerror = function(error) {
//     alert("Ошибка " + error.message);
//   };
// };

export const socketSendData = (data) => {
  socket.send(JSON.stringify({
    name:'mr верстальщик',
    message:data
  }));
};
