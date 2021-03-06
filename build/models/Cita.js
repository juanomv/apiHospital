"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _configdb = _interopRequireDefault(require("../database/configdb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cita = _configdb["default"].define("Cita", {
  codigo: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true
  },
  fechaHora: {
    type: _sequelize.DataTypes.DATE
  }
}, {
  timestamps: false
});

var _default = Cita;
exports["default"] = _default;