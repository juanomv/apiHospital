"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearMedico = crearMedico;
exports.getMedico = getMedico;
exports.getMedicos = getMedicos;
exports.updateMedico = updateMedico;
exports.deleteMedico = deleteMedico;

var _Medico = _interopRequireDefault(require("../models/Medico"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function crearMedico(_x, _x2) {
  return _crearMedico.apply(this, arguments);
}

function _crearMedico() {
  _crearMedico = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, numeroColegiado, nombre, apellidos, telefono, medico;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, numeroColegiado = _req$body.numeroColegiado, nombre = _req$body.nombre, apellidos = _req$body.apellidos, telefono = _req$body.telefono;
            _context.prev = 1;
            _context.next = 4;
            return _Medico["default"].create({
              numeroColegiado: numeroColegiado,
              nombre: nombre,
              apellidos: apellidos,
              telefono: telefono
            });

          case 4:
            medico = _context.sent;
            res.status(200).json({
              ok: true,
              medico: medico
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              ok: false,
              error: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _crearMedico.apply(this, arguments);
}

function getMedico(_x3, _x4) {
  return _getMedico.apply(this, arguments);
}

function _getMedico() {
  _getMedico = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var medico;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Medico["default"].findOne({
              where: {
                numeroColegiado: req.params.id
              }
            });

          case 3:
            medico = _context2.sent;
            res.status(200).json({
              ok: true,
              medico: medico
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json({
              ok: false,
              error: _context2.t0
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getMedico.apply(this, arguments);
}

function getMedicos(_x5, _x6) {
  return _getMedicos.apply(this, arguments);
}

function _getMedicos() {
  _getMedicos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var medicos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Medico["default"].findAll();

          case 3:
            medicos = _context3.sent;
            res.status(200).json({
              ok: true,
              medicos: medicos
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json({
              ok: false,
              message: "fallo en el servicio",
              error: _context3.t0
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getMedicos.apply(this, arguments);
}

function updateMedico(_x7, _x8) {
  return _updateMedico.apply(this, arguments);
}

function _updateMedico() {
  _updateMedico = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, numeroColegiado, nombre, apellidos, telefono;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, numeroColegiado = _req$body2.numeroColegiado, nombre = _req$body2.nombre, apellidos = _req$body2.apellidos, telefono = _req$body2.telefono;
            _context4.prev = 1;
            _context4.next = 4;
            return _Medico["default"].update({
              numeroColegiado: numeroColegiado,
              nombre: nombre,
              apellidos: apellidos,
              telefono: telefono
            }, {
              where: {
                numeroColegiado: req.params.id
              }
            });

          case 4:
            res.status(200).json({
              ok: true,
              message: "medico eliminado"
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            res.status(400).json({
              ok: false,
              error: _context4.t0
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return _updateMedico.apply(this, arguments);
}

function deleteMedico(_x9, _x10) {
  return _deleteMedico.apply(this, arguments);
}

function _deleteMedico() {
  _deleteMedico = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Medico["default"].destroy({
              where: {
                numeroColegiado: req.params.id
              }
            });

          case 3:
            res.status(200).json({
              ok: true,
              message: "medico eliminado"
            });
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            res.status(400).json({
              ok: false,
              error: _context5.t0
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));
  return _deleteMedico.apply(this, arguments);
}