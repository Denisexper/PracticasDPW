import React, {useState} from "react";
import './App.css';

//componente principal
function App (){
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1);
  }

  //renderizaar
  return (
    <div className="App">
      <h1>Contador React</h1>
      <h2>{contador}</h2>
      <button onClick={incrementar} className="boton">+</button>
      <button onClick={decrementar} className="boton">-</button>
    </div> 
  )
}
export default App;
