"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IngresarPaciente = IngresarPaciente;
exports.getPaciente = getPaciente;
exports.getPacientes = getPacientes;
exports.putPaciente = putPaciente;

var _Paciente = _interopRequireDefault(require("../models/Paciente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function IngresarPaciente(_x, _x2) {
  return _IngresarPaciente.apply(this, arguments);
}

function _IngresarPaciente() {
  _IngresarPaciente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nss, nombre, apellidos, telefono, paciente;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nss = _req$body.nss, nombre = _req$body.nombre, apellidos = _req$body.apellidos, telefono = _req$body.telefono;
            _context.prev = 1;
            _context.next = 4;
            return _Paciente["default"].create({
              nss: nss,
              nombre: nombre,
              apellidos: apellidos,
              telefono: telefono
            });

          case 4:
            paciente = _context.sent;
            res.status(200).json({
              ok: true,
              message: "paciente ingresado",
              paciente: paciente
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              ok: false,
              message: "paciente no registrado",
              error: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _IngresarPaciente.apply(this, arguments);
}

;

function getPaciente(_x3, _x4) {
  return _getPaciente.apply(this, arguments);
}

function _getPaciente() {
  _getPaciente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var pacientes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Paciente["default"].findAll();

          case 3:
            pacientes = _context2.sent;
            res.status(200).json(pacientes);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json({
              ok: false,
              message: "fallo la peticion"
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getPaciente.apply(this, arguments);
}

;

function getPacientes(_x5, _x6) {
  return _getPacientes.apply(this, arguments);
}

function _getPacientes() {
  _getPacientes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.json('pacientes');

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getPacientes.apply(this, arguments);
}

;

function putPaciente(_x7, _x8) {
  return _putPaciente.apply(this, arguments);
}

function _putPaciente() {
  _putPaciente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            res.json('update pasiente');

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _putPaciente.apply(this, arguments);
}