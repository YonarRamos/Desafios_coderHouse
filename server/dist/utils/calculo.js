"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculo = void 0;
var obj = {};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

;

var calculo = function calculo(cant) {
  for (var index = 0; index < Number(cant); index++) {
    var x = getRandomInt(1, 1000);

    if (Object.keys(obj).includes(String(x))) {
      obj[x] += 1;
    } else {
      obj[x] = 1;
    }
  }

  ;
  return obj;
};

exports.calculo = calculo;
process.on('message', function (msg) {
  console.log('recibiendo..:', msg);

  if (msg[0] == 'start') {
    console.log('Start cálculo');

    var _obj = calculo(Number(msg[1]));

    if (process && process.send) {
      process.send(_obj);
    }
  }
});