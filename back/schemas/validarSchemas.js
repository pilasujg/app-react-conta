import {z} from 'zod';
export const schemaRegistro = z.object({
    nombre: z.string({ required_error: 'El nombre es requerido' }),
    email: z.string({required_error: 'el email es requerido'}).email({ message: 'Email no válido'}),

    password: z.string({ required_error: 'La contraseña es requerida' }).min(3, { message: 'La contraseña debe tener al menos 3 caracteres' }),
});

export const schemaLogin = z.object({
    email: z.string({required_error: 'el email es requerido'}).email({ message: 'Email no válido'}),
    password: z.string({required_error: 'la contraseña es requerida'}),
});

