import Diario from "../models/diario.js";
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;


export const getDiarios = async (req, res) => {
    const userId = new ObjectId(req.user.idUser);
    const diario = await Diario.find({user: userId});
    return res.json(diario);
   
}

export const createDiario = async (req, res) => {
    const { fecha, concepto, factura, cuentas } = req.body;
    
    const diario = await Diario.find({user: req.user.idUser}).sort({orden: -1}).limit(1);
    let ordenN = 1;
    if(diario.length > 0){
        ordenN = diario[0].orden + 1;
    } 
    try {
        // Recorre cada cuenta y guárdala en la colección Diario
        for (const cuentaItem of cuentas) {
            const { cuenta, debe, cantidad } = cuentaItem;

            // Crea un nuevo documento utilizando el modelo Diario
            const diarioN = new Diario({
                user: req.user.idUser,
                fecha,
                concepto,
                factura,
                cuenta,
                debe,
                cantidad,
                orden: ordenN,
                estado:'pendiente',
                user: req.user.idUser
            });
    

    await diarioN.save();
    console.log(diarioN);
}
res.status(201).json({ message: 'Diario creado correctamente' });    


    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const actDiario = async (req, res) => {
        const { fecha, cuenta, debe, cantidad, concepto, estado, orden } = req.body;
    await Diario.findByIdAndUpdate(req.params.id, { fecha, cuenta, debe, cantidad, concepto, estado, orden }, { new: true })
    return res.send('Actualizando Libro de Diario !Vete a la mierda');
}
