"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _configdb = _interopRequireDefault(require("../database/configdb"));

var _Cita = _interopRequireDefault(require("../models/Cita"));

var _Paciente = _interopRequireDefault(require("../models/Paciente"));

var _Diagnostico = _interopRequireDefault(require("../models/Diagnostico"));

var _Especialista = _interopRequireDefault(require("../models/Especialista"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Historial = _configdb["default"].define('Historial', {
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

Historial.belongsToMany(_Cita["default"], {
  through: 'cita-his'
});

_Cita["default"].belongsToMany(Historial, {
  through: 'cita-his'
});

_Paciente["default"].hasOne(Historial);

Historial.belongsTo(_Paciente["default"]);

_Diagnostico["default"].belongsToMany(Historial, {
  through: 'diag-his'
});

Historial.belongsToMany(_Diagnostico["default"], {
  through: 'diag-his'
});

_Especialista["default"].belongsToMany(Historial, {
  through: 'espe-his'
});

Historial.belongsToMany(_Especialista["default"], {
  through: 'espe-his'
});
var _default = Historial;
exports["default"] = _default;