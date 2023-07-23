import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {    
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
        trim: true
    },
    rol: {
        type: String,
        default: 'usuario'
    }},
    {timestamps: true}
);


export default mongoose.model('Usuario', userSchema);