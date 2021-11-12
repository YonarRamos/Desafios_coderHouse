import './App.css';
import React, { Fragment, useState } from "react";
import { Redirect } from 'react-router'
import Nav from "./components/Navbar";
import Chat from "./components/Chat";
import Login from "./components/Login.jsx";
import Registrar from "./components/Registrar";
import Home from "./components/Home";
import FormularioProductos from "./components/FormularioProductos";
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
          <Route exact path='/registrar' component={Registrar}></Route>
          <Fragment>
            <Nav/>
            <ProtectedRoute exact path='/'>
              <div className="container">
                <Home/>
                <FormularioProductos/>
              </div>
            </ProtectedRoute>
          </Fragment>     
        </Switch>
      </div>      
    </Router>

  );
}

export default App;
