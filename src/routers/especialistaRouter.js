import  {Router}from 'express';
import * as EspecialistaCtrl from '../controllers/especialista.controller'
const router = Router();

router.post('/',EspecialistaCtrl.CrearEspecialista);
router.get('/',EspecialistaCtrl.getEspecialistas)
router.get('/:id',EspecialistaCtrl.getEspecialista);
router.put('/:id',EspecialistaCtrl.updateEspecialistas);
router.delete('/:id',EspecialistaCtrl.deleteEspecialistas);

export default router;