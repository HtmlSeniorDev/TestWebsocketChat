self["webpackHotUpdatereact_test_app"]("main",{

/***/ "./react/api/websocket/index.js":
/*!**************************************!*\
  !*** ./react/api/websocket/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectToWebsocket": function() { return /* binding */ connectToWebsocket; },
/* harmony export */   "socketListener": function() { return /* binding */ socketListener; },
/* harmony export */   "socketSendData": function() { return /* binding */ socketSendData; }
/* harmony export */ });
const socket = new WebSocket("ws://skade.cc:38080");
const connectToWebsocket = () => {
  socket.onopen = function () {
    console.log('connected succesfully');
  };
};
const socketListener = () => {
  socket.onmessage = function (event) {
    alert("Получены данные " + event.data);
  };

  socket.onerror = function (error) {
    alert("Ошибка " + error.message);
  };
};
const socketSendData = data => {
  socket.send(JSON.stringify({
    name: 'mr верстальщик',
    message: data
  }));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5c22d386251197d44944"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.df5308f6658ace642326.hot-update.js.map