import {Router} from 'express'
import * as medicoController from '../controllers/medico.controller';
const router = Router();

router.get('/',medicoController.getMedicos);
router.get('/:id',);
router.post('/');
router.put('/:id');
router.delete('/:id');

export default router
