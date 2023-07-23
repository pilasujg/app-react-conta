import React, { useState } from 'react';

function FormularioCuenta() {
  const [numero, setNumero] = useState('');
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Número de cuenta:', numero);
    console.log('Nombre de cuenta:', nombre);
    console.log('Tipo de cuenta:', tipo);
   
    const data = {
      numero,
      nombre,
      tipo,
    }
     const res = await fetch('http://localhost:3000/nuevaCuenta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await res.json()
    console.log(json)
    setNumero('');
    setNombre('');
    setTipo('');
  };

  return (
    <div className="flex justify-center items-center h-screen">

    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white shadow-md rounded">
      <div className="col-6">
      <div className="mb-4">
        <label htmlFor="numeroCuenta" className="block mb-2">
          Número de cuenta:
        </label>
       
        <input
          type="text"
          id="numeroCuenta"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nombreCuenta" className="block mb-2">
          Nombre de cuenta:
        </label>
        <input
          type="text"
          id="nombreCuenta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tipoCuenta" className="block mb-2">
          Tipo de cuenta:
        </label>
        <select
          type="text"
          id="tipoCuenta"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full px-3 py-2 border rounded">
          <option value="">Seleccione una opción</option>
          <option value="1">Activo</option>
          <option value="2">Pasivo</option>
          <option value="3">Patrimonio</option>
          <option value="7">Ingresos</option>
          <option value="6">Gastos</option>
        </select>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Guardar
      </button>
      </div>
    </form>
  </div>
  
  );
}

export default FormularioCuenta;
