
import express,{json} from'express';
import morgan from 'morgan';

//importar rutas 
import pacienteRouter from  './routers/pacienteRouter'
import citaRouter from './routers/citaRouter'
import medicoRouter from './routers/medicoRouter';
import especialistaRouter from './routers/especialistaRouter';
// importar configuracion db

// inicializando
const app = express();
// conexion a database




// middelware
app.use(morgan('dev')); 
app.use(json());

// rutas
app.use('/api/paciente',pacienteRouter);
app.use('/api/cita',citaRouter);
//app.use('/api/medico',medicoRouter);
app.use('/api/especialista',especialistaRouter)

export default app;

