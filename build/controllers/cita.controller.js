"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearCita = crearCita;
exports.getCita = getCita;
exports.getCitas = getCitas;
exports.dropCita = dropCita;

var _Cita = _interopRequireDefault(require("../models/Cita"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function crearCita(_x, _x2) {
  return _crearCita.apply(this, arguments);
}

function _crearCita() {
  _crearCita = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var personanns, cita;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            personanns = req.body.personanns;
            _context.prev = 1;
            _context.next = 4;
            return _Cita["default"].create(req);

          case 4:
            cita = _context.sent;
            res.status(200).json({
              ok: true,
              mss: "cita creada",
              cita: cita
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              ok: false,
              mss: "error al crear cita",
              error: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _crearCita.apply(this, arguments);
}

function getCita(_x3, _x4) {
  return _getCita.apply(this, arguments);
}

function _getCita() {
  _getCita = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var cita;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Cita["default"].findOne({
              where: {
                codigo: req.params.id
              }
            });

          case 3:
            cita = _context2.sent;

            if (!cita) {
              res.status(200).json({
                ok: false,
                message: "no esxite cita"
              });
            }

            res.status(200).json(cita);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json({
              ok: false,
              message: "fallo",
              error: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getCita.apply(this, arguments);
}

function getCitas(_x5, _x6) {
  return _getCitas.apply(this, arguments);
}

function _getCitas() {
  _getCitas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var cita;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Cita["default"].findAll();

          case 3:
            cita = _context3.sent;
            res.status(200).json(cita);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json({
              ok: false,
              message: "fallo",
              error: _context3.t0
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getCitas.apply(this, arguments);
}

function dropCita(_x7, _x8) {
  return _dropCita.apply(this, arguments);
}

function _dropCita() {
  _dropCita = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var CitaEliminada;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              CitaEliminada = _Cita["default"].drop({
                where: {
                  codigo: req.params.id
                }
              });

              if (!CitaEliminada) {
                res.status(200).json({
                  ok: false,
                  message: "no esxite cita"
                });
              }

              res.status(200).json(CitaEliminada);
            } catch (error) {
              res.status(400).json({
                ok: false,
                message: "fallo",
                error: error
              });
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _dropCita.apply(this, arguments);
}