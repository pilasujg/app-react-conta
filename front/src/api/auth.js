import axios from './axios';

export const registerRequest = async (newUser) => await axios.post(`/api/registro`, newUser);
export const loginRequest = async (user) => await axios.post(`/login`, user);
export const verifyRequest = async () => await axios.get(`/api/verify`);