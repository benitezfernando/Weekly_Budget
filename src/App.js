import React, {useState}from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario'



function App() {

  //Definir el State

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
          />

          <div className="row">
            <div className="one-hlaf column">
                <Formulario/>
            </div>
            <div className="one-hlaf column">
                2
            </div>

          </div>
        </div>


      </header>
    </div>
  );
}

export default App;
