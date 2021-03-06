import {Router} from 'express';
import * as citaCrtl from '../controllers/cita.controller'

const router = Router();

router.post('/createCita',citaCrtl.crearCita);

module.exports = router;