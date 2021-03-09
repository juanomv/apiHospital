import {Router} from 'express'
import * as medicoController from '../controllers/medico.controller';
const router = Router();

router.get('/',medicoController.getMedicos);
router.get('/:id',medicoController.getMedico);
router.post('/'),medicoController.crearMedico;
router.put('/:id',medicoController.updateMedico);
router.delete('/:id',medicoController.deleteMedico);

export default router
