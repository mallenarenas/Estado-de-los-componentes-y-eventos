import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Input from './components/Input';
import Boton from './components/Boton';

function App() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const validarFormulario = () =>{
    if (!name.trim()) {
      setError("Debes ingresar tu nombre");
      return;
    }
    alert("Los datos son correctos")
    setName("");
    setPassword("");
    setError(null);

  }
  
  return (
    <>
    <h3>Estado de los componentes y eventos</h3>
    <div className='container'>
    <span className="text-danger">{error}</span>
      <Input name = {name} setName={setName} password = {password} setPassword = {setPassword} />
      {password === "252525" ? <Boton message = {validarFormulario}/> : null}
      {/* {contraseña === "252525" && <Boton />}  */}
    </div>
    </>
  );
}

export default App;
