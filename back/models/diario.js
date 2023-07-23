import mongoose from "mongoose";

const DiarioSchema = new mongoose.Schema({
    fecha: {
        type: Date,
       required: false,
    },
    cuenta: {   
        type: Number,
        required: true,
        trim: true
    },
    debe: {
        type: String,
        required: true,
        trim: true
    },
    cantidad: {
        type: Number,
        required: true,
        trim: true
    },
    concepto: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    },
    factura: {
        type: String,
        required: false,
        trim: true
    },
    orden: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});



export default mongoose.model('Diario', DiarioSchema);