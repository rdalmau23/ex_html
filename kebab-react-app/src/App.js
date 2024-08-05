import React from 'react';
import  Hola  from './components/Hola';

function App() {
  return (
    <div className='App'>
      <h1>Props</h1>
      <Hola nombre="Rafel" edad={23} cm={2} />
      <Hola nombre="Dani" edad={9} cm={3} />
      <Hola nombre="Cris" edad={98} cm={6} />
    </div>
  );
}

export default App;