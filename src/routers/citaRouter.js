import {Router} from 'express';
import * as citaCrtl from '../controllers/cita.controller'

const router = Router();

router.post('/',citaCrtl.crearCita);
router.get('/:id',citaCrtl.getCita);
router.get('/',citaCrtl.getCitas);
router.delete('/:id',citaCrtl.dropCita);


module.exports = router;