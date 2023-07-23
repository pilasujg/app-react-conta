import axios from './axios';

export const createDiario = async (diario) => await axios.post('/newDiario', diario);
export const getDiarios = async () => await axios.get('/diarios');
export const getDiarioById = async (id) => await axios.get(`/diarios/${id}`);
export const updateDiarioById = async (diario) => await axios.put(`/diarios/${diario._id}`);