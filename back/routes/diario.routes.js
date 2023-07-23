import {Router} from 'express';
import { getDiarios, createDiario, actDiario} from "../controllers/diario.controllers.js";
import {autorizar} from "../middlewares/validarToken.js";

const router = new Router();

router.get('/diarios',autorizar, getDiarios);
router.post('/newDiario',autorizar, createDiario);
router.put('/actualizarD/:id',autorizar, actDiario);


export default router;
