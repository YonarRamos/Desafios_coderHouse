import './App.css';
import React, { useState } from "react";
import { Redirect } from 'react-router'
import Nav from "./components/Navbar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Home from "./components/Home";
import { ProtectedRoute } from "./components/Protected.route";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function App() {
  const [usuario, setUsuario ] = useState('Yonar');
  const [nombre, setNombre] = useState('');
  const [ registrado, setRegistrado ] = useState(false);

  const getLoggedUser = (loggedUser) => {
    setUsuario(loggedUser)
  }

  const registrar = (e)=>{
    e.preventDefault();
    if(nombre !== ""){
      setRegistrado(true);
    }
  }

  return (
    <Router>
      <div className="App">        
        <Switch>
          <Route exact path='/login' component={Login} getLoggedUser = { getLoggedUser }></Route>
          <div>
            <Nav/>
            <ProtectedRoute exact path='/' component={Home} usuario = { 'usuario' }></ProtectedRoute>
          </div>     
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
