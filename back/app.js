import express from 'express';
import cuentasRoutes from './routes/cuentas.routes.js';
import diarioRoutes from './routes/diario.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';



const app = express();
app.use(cors({
    origin: ['http://localhost:5174', 'http://localhost:4000', 'http://localhost:3000'],
    credentials: true
  }));
  


//middlewares OJO EL ORDEN ES IMPORTANTE
app.use(morgan('dev'));
app.use(express.json());

app.use(cookieParser());
   





//routes
app.use(cuentasRoutes);
app.use(diarioRoutes);
app.use(usuariosRoutes);



export default app;