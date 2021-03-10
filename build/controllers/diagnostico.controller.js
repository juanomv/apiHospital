"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearDiagnostico = crearDiagnostico;
exports.crearCitaEspecialista = crearCitaEspecialista;
exports.getDiag = getDiag;
exports.getDiags = getDiags;
exports.dropdiag = dropdiag;
exports.updatediag = updatediag;

var _Diagnostico = _interopRequireDefault(require("../models/Diagnostico"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function crearDiagnostico(_x, _x2) {
  return _crearDiagnostico.apply(this, arguments);
}

function _crearDiagnostico() {
  _crearDiagnostico = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, personaNSS, medico, _medico, numero, map, cita;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, personaNSS = _req$body.personaNSS, medico = _req$body.medico;
            _context.prev = 1;
            _context.next = 4;
            return Medico.findAndCountAll();

          case 4:
            _medico = _context.sent;
            numero = Math.floor(Math.random() * _medico.count);
            map = _medico.map(function () {
              return _medico.rows.numeroColegiado;
            });
            _context.next = 9;
            return _Diagnostico["default"].create({
              personaNSS: personaNSS,
              fechahora: sumarDias(),
              MedicoNumeroColegiado: map[numero]
            });

          case 9:
            cita = _context.sent;
            res.status(200).json({
              ok: true,
              mss: "cita creada",
              cita: cita
            });
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              ok: false,
              mss: "error al crear cita",
              error: _context.t0
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _crearDiagnostico.apply(this, arguments);
}

function crearCitaEspecialista(_x3, _x4) {
  return _crearCitaEspecialista.apply(this, arguments);
}

function _crearCitaEspecialista() {
  _crearCitaEspecialista = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, PacienteNss, MedicoNumeroColegiado, diagnostico, tratamiento, cita;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, PacienteNss = _req$body2.PacienteNss, MedicoNumeroColegiado = _req$body2.MedicoNumeroColegiado, diagnostico = _req$body2.diagnostico, tratamiento = _req$body2.tratamiento;
            _context2.prev = 1;
            _context2.next = 4;
            return _Diagnostico["default"].create({
              PacienteNss: PacienteNss,
              MedicoNumeroColegiado: MedicoNumeroColegiado,
              diagnostico: diagnostico,
              tratamiento: tratamiento
            });

          case 4:
            cita = _context2.sent;
            res.status(200).json({
              ok: true,
              mss: "diag creada",
              cita: cita
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(400).json({
              ok: false,
              mss: "error al crear diag",
              error: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _crearCitaEspecialista.apply(this, arguments);
}

function getDiag(_x5, _x6) {
  return _getDiag.apply(this, arguments);
}

function _getDiag() {
  _getDiag = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var diag;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Diagnostico["default"].findOne({
              where: {
                codigo: req.params.id
              }
            });

          case 3:
            diag = _context3.sent;
            res.status(200).json(diag);
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
  return _getDiag.apply(this, arguments);
}

function getDiags(_x7, _x8) {
  return _getDiags.apply(this, arguments);
}

function _getDiags() {
  _getDiags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var cita;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Diagnostico["default"].findAll();

          case 3:
            cita = _context4.sent;
            res.status(200).json(cita);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(400).json({
              ok: false,
              message: "fallo",
              error: _context4.t0
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _getDiags.apply(this, arguments);
}

function dropdiag(_x9, _x10) {
  return _dropdiag.apply(this, arguments);
}

function _dropdiag() {
  _dropdiag = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var CitaEliminada;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            try {
              CitaEliminada = _Diagnostico["default"].drop({
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
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _dropdiag.apply(this, arguments);
}

function updatediag(_x11, _x12) {
  return _updatediag.apply(this, arguments);
}

function _updatediag() {
  _updatediag = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body3, PacienteNss, MedicoNumeroColegiado, diagnostico, tratamiento, cita;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, PacienteNss = _req$body3.PacienteNss, MedicoNumeroColegiado = _req$body3.MedicoNumeroColegiado, diagnostico = _req$body3.diagnostico, tratamiento = _req$body3.tratamiento;
            _context6.prev = 1;
            _context6.next = 4;
            return Cita.create({
              PacienteNss: PacienteNss,
              MedicoNumeroColegiado: MedicoNumeroColegiado,
              diagnostico: diagnostico,
              tratamiento: tratamiento
            }, {
              where: {
                codigo: req.params.id
              }
            });

          case 4:
            cita = _context6.sent;
            res.status(200).json({
              ok: true,
              mss: "cita creada",
              cita: cita
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            res.status(400).json({
              ok: false,
              mss: "error al crear cita",
              error: _context6.t0
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _updatediag.apply(this, arguments);
}