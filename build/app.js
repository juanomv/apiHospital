"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _pacienteRouter = _interopRequireDefault(require("./routers/pacienteRouter"));

var _citaRouter = _interopRequireDefault(require("./routers/citaRouter"));

var _medicoRouter = _interopRequireDefault(require("./routers/medicoRouter"));

var _especialistaRouter = _interopRequireDefault(require("./routers/especialistaRouter"));

var _diagnosticoRouter = _interopRequireDefault(require("./routers/diagnosticoRouter"));

var _historialRouter = _interopRequireDefault(require("./routers/historialRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//importar rutas 
// importar configuracion db
// inicializando
var app = (0, _express["default"])(); // conexion a database
// middelware

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); // rutas

app.use('/api/paciente', _pacienteRouter["default"]);
app.use('/api/cita', _citaRouter["default"]);
app.use('/api/medico', _medicoRouter["default"]);
app.use('/api/especialista', _especialistaRouter["default"]);
app.use('/api/diagnostico', _diagnosticoRouter["default"]);
app.use('/api/historial', _historialRouter["default"]);
var _default = app;
exports["default"] = _default;