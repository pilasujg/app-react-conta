import { useState, createContext, useContext } from "react";
import { createDiario, getDiarios, getDiarioById } from "../api/diario";


const DiarioContext = createContext();

export function useDiario() {
  const context = useContext(DiarioContext);
  if (!context) {
    throw new Error('useDiario debe estar dentro del proveedor DiarioContex');
  }
  return context;
}

export function DiarioProvider({ children }) {
  const [diario, setDiario] = useState([]);

  const crearAsiento = async (diario) => {
    const res = await createDiario(diario);
    console.log(res);
  };

  const allAsientos = async () => {
    const res = await getDiarios();
    setDiario(res.data);
    };

  const cambiarAsiento = async (id) => {
        const res = await getDiarioById(id);
        console.log(res.data);
        setDiario(res.data);
        };


  return (
    <DiarioContext.Provider value={{ diario, crearAsiento, allAsientos, cambiarAsiento }}>
      {children}
    </DiarioContext.Provider>
  );
}
