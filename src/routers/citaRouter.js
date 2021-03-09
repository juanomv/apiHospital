import {Router} from 'express';
import * as citaCrtl from '../controllers/cita.controller'

const router = Router();

router.post('/',citaCrtl.crearCitaMedico);
router.post('/especialista',citaCrtl.crearCitaEspecialista)
router.get('/:id',citaCrtl.getCita);
router.get('/',citaCrtl.getCitas);
router.delete('/:id',citaCrtl.dropCita);
router.put('/:id',citaCrtl.updateCitaMedico);
router.put('/especialista/:id',citaCrtl.updateCitaEspecialista);


module.exports = router;