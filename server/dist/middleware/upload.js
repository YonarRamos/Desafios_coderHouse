"use strict";

var multer = require("multer");

var Mongoose = require('mongoose');

var GridFsStorage = require("multer-gridfs-storage");

var config = require("../utils/config");

var mongoURI = "mongodb+srv://".concat(config.MONGO_ATLAS_USER, ":").concat(config.MONGO_ATLAS_PASSWORD, "@").concat(config.MONGO_ATLAS_CLUSTER, ".9xjxp.mongodb.net/").concat(config.MONGO_LOCAL_DBNAME, "?retryWrites=true&w=majority");
var conn = Mongoose.connection;
var storage;
conn.once('open', function () {
  storage = new GridFsStorage({
    url: mongoURI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    file: function file(req, _file) {
      var match = ["image/png", "image/jpeg"];

      if (match.indexOf(_file.mimetype) === -1) {
        var filename = "".concat(Date.now(), "-any-name-").concat(_file.originalname);
        return filename;
      }

      return {
        bucketName: "photos",
        filename: "".concat(Date.now(), "-any-name-").concat(_file.originalname)
      };
    }
  });
});
module.exports = multer({
  storage: storage
});