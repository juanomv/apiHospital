"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _configdb = _interopRequireDefault(require("../database/configdb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Diagnostico = _configdb["default"].define('Ficha_Diagnostico', {
  codigo: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true
  },
  diagnostico: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  },
  tratamiento: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false
  }
}, {
  freezeTableName: true
});

var _default = Diagnostico;
exports["default"] = _default;