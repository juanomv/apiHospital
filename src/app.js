
import express,{json} from'express';
import morgan from 'morgan';

//impartar rutas 
import pacienteRouter from  './routers/pacienteRouter'
import citaRouter from './routers/citaRouter'
// importar configuracion db

// inicializando
const app = express();
// conexion a database




// middelware
app.use(morgan('dev')); 
app.use(json());

// rutas
app.use('/api/paciente',pacienteRouter)
app.use('/api/cita',citaRouter)

export default app;

