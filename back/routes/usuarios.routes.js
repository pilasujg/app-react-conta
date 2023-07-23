import {Router} from 'express';
import {login, register, profile, verificarToken} from '../controllers/usuarios.controllers.js';
import {autorizar} from '../middlewares/validarToken.js';
import {validarReg} from '../middlewares/validarSchemas.js';
import { schemaLogin, schemaRegistro } from '../Schemas/validarSchemas.js';


const router = Router();

router.post('/api/registro', validarReg(schemaRegistro), register);
router.post('/login', validarReg(schemaLogin), login);

router.get('/api/verify', verificarToken);
router.get('/profile',autorizar, profile);

export default router;