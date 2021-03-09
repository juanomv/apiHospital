"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrearEspecialista = CrearEspecialista;
exports.getEspecialista = getEspecialista;
exports.getEspecialistas = getEspecialistas;
exports.updateEspecialistas = updateEspecialistas;
exports.deleteEspecialistas = deleteEspecialistas;

var _Especialista = _interopRequireDefault(require("../models/Especialista"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CrearEspecialista(_x, _x2) {
  return _CrearEspecialista.apply(this, arguments);
}

function _CrearEspecialista() {
  _CrearEspecialista = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, numeroColegiado, nombre, apellidos, telefono, especialidad, espe;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, numeroColegiado = _req$body.numeroColegiado, nombre = _req$body.nombre, apellidos = _req$body.apellidos, telefono = _req$body.telefono, especialidad = _req$body.especialidad;
            _context.prev = 1;
            _context.next = 4;
            return _Especialista["default"].create({
              numeroColegiado: numeroColegiado,
              nombre: nombre,
              apellidos: apellidos,
              telefono: telefono,
              especialidad: especialidad
            });

          case 4:
            espe = _context.sent;
            res.status(200).json({
              ok: true,
              espe: espe
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              ok: flase,
              error: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _CrearEspecialista.apply(this, arguments);
}

function getEspecialista(_x3, _x4) {
  return _getEspecialista.apply(this, arguments);
}

function _getEspecialista() {
  _getEspecialista = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var espe;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Especialista["default"].findOne({
              where: {
                numeroColegiado: req.params.id
              }
            });

          case 3:
            espe = _context2.sent;
            res.status(200).json({
              ok: true,
              espe: espe
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json({
              ok: flase,
              error: _context2.t0
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getEspecialista.apply(this, arguments);
}

function getEspecialistas(_x5, _x6) {
  return _getEspecialistas.apply(this, arguments);
}

function _getEspecialistas() {
  _getEspecialistas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var espes;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Especialista["default"].findAll();

          case 3:
            espes = _context3.sent;
            res.status(200).json({
              ok: true,
              espes: espes
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json({
              ok: flase,
              error: _context3.t0
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getEspecialistas.apply(this, arguments);
}

function updateEspecialistas(_x7, _x8) {
  return _updateEspecialistas.apply(this, arguments);
}

function _updateEspecialistas() {
  _updateEspecialistas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var espes;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Especialista["default"].update({
              where: {
                numeroColegiado: req.params.id
              }
            });

          case 3:
            espes = _context4.sent;
            res.status(200).json({
              ok: true,
              espes: espes
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(400).json({
              ok: flase,
              error: _context4.t0
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _updateEspecialistas.apply(this, arguments);
}

function deleteEspecialistas(_x9, _x10) {
  return _deleteEspecialistas.apply(this, arguments);
}

function _deleteEspecialistas() {
  _deleteEspecialistas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var espes;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Especialista["default"].destroy({
              where: {
                numeroColegiado: req.params.id
              }
            });

          case 3:
            espes = _context5.sent;
            res.status(200).json({
              ok: true,
              espes: espes
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(400).json({
              ok: flase,
              error: _context5.t0
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _deleteEspecialistas.apply(this, arguments);
}