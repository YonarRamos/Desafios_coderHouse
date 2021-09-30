import './App.css';
import React, { useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function App() {
  const [nombre, setNombre] = useState('');
  const [ registrado, setRegistrado ] = useState(false);

  const registrar = (e)=>{
    e.preventDefault();
    if(nombre !== ""){
      setRegistrado(true);
    }
  }

  return (
    <Router>
      <div className="App">
{/*         {  
          !registrado &&    
          <form onSubmit = {registrar}>
            <label htmlFor="">Introduzca su usuario:</label>
            <input value={nombre} onChange={ e => setNombre(e.target.value)} />
            <button>Unirse al chat</button>
          </form>
        }
        {
          registrado &&
          <Chat nombre = { nombre }/>
        } */}
        <Switch>
          <Route exact path='/' component={Chat}></Route>
          <Route exact path='/login' component={Login}></Route>        
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
