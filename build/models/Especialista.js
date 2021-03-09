"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _configdb = _interopRequireDefault(require("../database/configdb"));

var _Cita = _interopRequireDefault(require("../models/Cita"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Especialista = _configdb["default"].define("Especialista", {
  numeroColegiado: {
    type: _sequelize.DataTypes.CHAR(8),
    primaryKey: true,
    validator: {
      len: {
        args: 8,
        msg: "El codigo debe tener 8 digitos"
      }
    }
  },
  nombre: {
    type: _sequelize.DataTypes.STRING(45),
    allowNull: false,
    validate: {
      notNull: {
        msg: "se debe ingresar el nombre"
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
  },
  especialidad: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Debe tener una especializacion"
      }
    }
  }
}, {
  timestamps: false,
  freezeTableName: true
});

Especialista.hasMany(_Cita["default"]);

_Cita["default"].belongsTo(Especialista);

var _default = Especialista;
exports["default"] = _default;