import cuentas from "../models/cuentas.js";

export const getCuentas = async (req, res) => {
    const cuenta = await cuentas.find({ user: req.user.idUser});
    res.json(cuenta);
};

export const createCuenta = async (req, res) => {
    const { nombre, tipo, numero } = req.body;
    const cuentaN = new cuentas({ numero, nombre, tipo, user: req.user.idUser});
    await cuentaN.save();
    return res.json(cuentaN);
}

export const actCuenta = async (req, res) => {
    const { nombre, tipo, saldo } = req.body;
    await cuentas.findByIdAndUpdate(req.params.id, { nombre, tipo, numero }, { new: true })
    return res.send('Actualizando cuenta');
}

