import {Router} from 'express';
import {getCuentas, createCuenta, actCuenta} from '../controllers/cuentas.controllers.js';
import {autorizar} from '../middlewares/validarToken.js';

const router = new Router();

router.get('/cuentas', autorizar, getCuentas);

router.post('/nuevaCuenta', autorizar, createCuenta);    

router.put('/actualizarC/:id', autorizar, actCuenta);    

//router.delete('/delete/:id', deleteBook);    

//router.get('/book/:id', oneBook);    



export default router;