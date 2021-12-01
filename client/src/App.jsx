import './App.css';
import React, { Fragment, useState } from "react";
import { Redirect } from 'react-router'
import Nav from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Registrar from "./components/Registrar";
import Home from "./components/Home.jsx";
import Chat from "./components/Chat.jsx";
import FormularioProductos from "./components/FormularioProductos";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


function App() {
  const [ user, setUser ] = useState({
    email:'',
    password:'',
    confirmPassword:'',
    nombre:'',
    apellido:'',
    edad:'',
    alias:'',
    avatar:'',
    telefono:''
  });

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/login' render={(props) => <Login setUser={ setUser } {...props} />} ></Route>   
            <Route exact path='/registrar'  render={(props) => <Registrar setUser={ setUser } user={ user } {...props} />}></Route>
            <ProtectedRoute exact path='/' component={ props => {
              return(
                <>
                  <Nav setUser={ setUser } user={ user }  />,
                  <Home user={ user } />                                  
                </>
              )
              }
            }
            />
          </Switch>
        </div>  
      </Router>

  );
}

export default App;
