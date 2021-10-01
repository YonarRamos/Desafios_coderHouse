"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Mongoose = require('mongoose');

var db = 'ecommerce';

var DbServiceClass = /*#__PURE__*/function () {
  function DbServiceClass() {
    (0, _classCallCheck2["default"])(this, DbServiceClass);

    if (true) {
      this.srv = "mongodb://localhost:27017/".concat(db);
    } else {
      this.srv = "mongodb+srv://".concat(process.env.MONGO_ATLAS_USER, ":").concat(process.env.MONGO_ATLAS_PASSWORD, "@").concat(process.env.MONGO_ATLAS_CLUSTER, ".9xjxp.mongodb.net/").concat(process.env.MONGO_ATLAS_DBNAME, "?retryWrites=true&w=majority");
      Mongoose.connect(this.srv);
      this.mensaje = Mongoose.model('mensajes', mensajesSchema);
      console.log('MONGO ATLAS CONNECTED');
    }
  }

  (0, _createClass2["default"])(DbServiceClass, [{
    key: "init",
    value: function init() {
      Mongoose.connect(this.srv);
      console.log('MONGO LOCAL CONNECTED');
    }
  }]);
  return DbServiceClass;
}();

module.exports = new DbServiceClass();