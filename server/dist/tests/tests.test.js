"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _db = _interopRequireDefault(require("../services/db"));

var _server = _interopRequireDefault(require("../services/server"));

var _productos = require("../models/productos");

var _chai = require("chai");

describe('Ejemplos de tests', function () {
  var newMongo = null;
  var request = null;
  beforeAll(function () {
    jest.spyOn(_db["default"], 'init').mockImplementationOnce(function () {
      return '123';
    });
    newMongo = _db["default"].init();
    request = (0, _supertest["default"])(_server["default"]);
  });
  afterAll( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _db["default"].disconnect();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('deberia devolver coneccion a mongo falsa', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var connection;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            connection = newMongo;
            (0, _chai.expect)(connection).to.equal('123');

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('Deberia recibir un array vacio si no existen usuarios', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var mockData, expectedResponse, response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mockData = [];
            jest.spyOn(_productos.Productos, 'find').mockImplementationOnce(function () {
              return Promise.resolve(mockData);
            });
            expectedResponse = {
              data: mockData
            };
            _context3.next = 5;
            return request.get('/productos/');

          case 5:
            response = _context3.sent;
            (0, _chai.expect)(response.body).to.deep.equal(expectedResponse);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('Deberia recibir un array con un usuario si mongoose me devuele un usuario', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var mockData, expectedResponse, response;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            mockData = [{
              "_id": "619ba9c0ec75cff55cfc9c50",
              "timestamp": "2021-11-22T14:30:56.000Z",
              "codigo": "1637591456790",
              "name": "Lapicera",
              "price": 15,
              "stock": 140,
              "description": "lorem ipsum pen",
              "thumbnail": "https://cdn4.iconfinder.com/data/icons/back-to-school-151/64/pencil-color-artist-art-draw-256.png",
              "__v": 0
            }];
            jest.spyOn(_productos.Productos, 'find').mockImplementationOnce(function () {
              return Promise.resolve(mockData);
            });
            expectedResponse = {
              data: mockData
            };
            _context4.next = 5;
            return request.get('/productos?id=619ba9c0ec75cff55cfc9c50');

          case 5:
            response = _context4.sent;
            (0, _chai.expect)(response.body).to.deep.equal(expectedResponse);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('deberia crear un usuario correctamente', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var body, response, producto;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //jest.spyOn(Productos.prototype, 'save').mockResolvedValueOnce('ok');
            body = {
              "name": "papel",
              "price": 5,
              "stock": 1200,
              "description": "lorem ipsum page",
              "thumbnail": "https://cdn0.iconfinder.com/data/icons/b/64/data_paper_contract-256.png"
            };
            _context5.next = 3;
            return request.post('/productos/').send(body);

          case 3:
            response = _context5.sent;
            (0, _chai.expect)(response.status).to.eql(200);
            producto = response.body.data[0];
            (0, _chai.expect)(producto).to.include.keys('name', 'price');
            (0, _chai.expect)(producto.name).to.equal(body.name);
            (0, _chai.expect)(producto.price).to.equal(body.price);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  test('deberia recibir un error 400 al querer crear un producto y mandar mal el body', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var body, response, expectedBody;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            body = {};
            _context6.next = 3;
            return request.post('/productos/').send(body);

          case 3:
            response = _context6.sent;
            (0, _chai.expect)(response.status).to.eql(400);
            expectedBody = {
              msg: 'missing Body fields'
            };
            (0, _chai.expect)(response.body).to.deep.equal(expectedBody);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
});