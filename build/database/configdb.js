"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

// Option 1: Passing parameters separately
var sequelize = new _sequelize.Sequelize("bmt9trlfqrvwydrxbfwx", "uurghiewvmxlccaf", "RWaRmutJcWZV8nMGgmIM", {
  host: "bmt9trlfqrvwydrxbfwx-mysql.services.clever-cloud.com",
  // "localhost",
  dialect: "mysql",
  logging: false
});
var _default = sequelize;
exports["default"] = _default;