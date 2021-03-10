"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _configdb = _interopRequireDefault(require("../database/configdb"));

var _Cita = _interopRequireDefault(require("../models/Cita"));

var _Diagnostico = _interopRequireDefault(require("../models/Diagnostico"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Paciente = _configdb["default"].define("Paciente", {
  nss: {
    type: _sequelize.DataTypes.CHAR(8),
    primaryKey: true,
    validate: {
      len: {
        args: 8,
        msg: "debe ser de 8 caracteres"
      }
    }
  },
  nombre: {
    type: _sequelize.DataTypes.STRING(40),
    allowNull: false,
    validate: {
      notNull: {
        msg: "El nombre es obligatorio"
      },
      len: {
        args: [1, 45],
        msg: "no debe ser mayor a 60 caracteres"
      }
    }
  },
  apellidos: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false,
    notNull: {
      msg: "los apellidos son obligatorios"
    },
    len: {
      args: [1, 45],
      msg: "no debe ser mayor a 100 caracteres"
    }
  },
  telefono: {
    type: _sequelize.DataTypes.CHAR(10),
    notNull: {
      msg: "El numero de telefono es obligatorio"
    },
    len: {
      args: 10,
      msg: "numero invalido debe contener 10 digitos"
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Paciente.hasMany(_Cita["default"], {
  foreignKey: 'personaNSS',
  sourceKey: 'nss'
});

_Cita["default"].belongsTo(Paciente, {
  foreignKey: 'personaNSS',
  sourceKey: 'nss'
});

Paciente.hasMany(_Diagnostico["default"]);

_Diagnostico["default"].belongsTo(Paciente);

var _default = Paciente;
exports["default"] = _default;