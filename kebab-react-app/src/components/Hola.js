import React from 'react';

const Hola = ({nombre, edad, cm}) => {

  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <p>Edad: {edad}</p>
      <p>Cm de pito: {cm}</p>
      <hr/>
    </div>
  );
}

export default Hola;