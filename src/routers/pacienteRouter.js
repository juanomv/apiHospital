import {Router} from 'express';
import * as pacienteCtrl from '../controllers/paciente.controller'
const router = Router();
router.post('/ingresarpaciente',pacienteCtrl.IngresarPaciente );
router.get('/',pacienteCtrl.getPacientes );
router.get('/:id',pacienteCtrl.getPaciente);
router.put('/:id',pacienteCtrl.putPaciente);
module.exports = router;