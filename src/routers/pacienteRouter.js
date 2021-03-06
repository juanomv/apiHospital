import {Router} from 'express';
import * as pacienteCtrl from '../controllers/paciente.controller'
const router = Router();
router.post('/ingresarpaciente',pacienteCtrl.IngresarPaciente );
router.get('/pacientes',pacienteCtrl.getPacientes );
router.get('/paciente/:id',pacienteCtrl.getPaciente);
router.put('paciente/:id',pacienteCtrl.putPaciente)
module.exports = router;