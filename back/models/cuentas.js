import mongoose from "mongoose";

const CuentaSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: Number,
        required: true,
        trim: true
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
   
    
});

export default mongoose.model('Cuenta', CuentaSchema);
