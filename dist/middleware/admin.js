"use strict";

var admin = true;

var checkAdmin = function checkAdmin(req, res, next) {
  if (admin) next();else res.status(401).json({
    msg: 'No estas autorizado'
  });
};

module.exports = {
  checkAdmin: checkAdmin
};