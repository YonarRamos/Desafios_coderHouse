"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Mongoose = require('mongoose');

var db = 'ecommerce';

require('dotenv').config();

var DbServiceClass = /*#__PURE__*/function () {
  function DbServiceClass() {
    (0, _classCallCheck2["default"])(this, DbServiceClass);

    if (false) {
      this.srv = "mongodb://localhost:27017/".concat(db);
    } else {
      this.srv = "mongodb://".concat(process.env.MONGO_ATLAS_USER, ":").concat(process.env.MONGO_ATLAS_PASSWORD, "@").concat(process.env.MONGO_ATLAS_CLUSTER, ".9xjxp.mongodb.net/").concat(process.env.MONGO_ATLAS_DBNAME, "?retryWrites=true&w=majority"); //console.log('MONGO ATLAS', `${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER}.9xjxp.mongodb.net/${process.env.MONGO_ATLAS_DBNAME}?retryWrites=true&w=majority`);
    }
  }

  (0, _createClass2["default"])(DbServiceClass, [{
    key: "init",
    value: function init() {
      Mongoose.connect("mongodb+srv://root:root@cluster0.9xjxp.mongodb.net/ecommerce?retryWrites=true&w=majority"); //console.log('MONGO CONNECTED');
    }
  }]);
  return DbServiceClass;
}();

module.exports = new DbServiceClass();