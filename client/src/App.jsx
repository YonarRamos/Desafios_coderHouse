import './App.css';
import React, { Fragment, useState } from "react";
import { Redirect } from 'react-router'
import Nav from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Registrar from "./components/Registrar";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
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
            <ProtectedRoute component={ props => {
                return(
                    <>
                      <Route path='/' render={(props) => <Nav setUser={ setUser } {...props} />} ></Route>
                      <Route exact path='/' render={(props) => <Home setUser={ setUser } {...props} />} ></Route>
                      <Route exact path='/shop' render={(props) => <Shop setUser={ setUser } {...props} />} ></Route>
                      <Route path='/' render={(props) => <Chat setUser={ setUser } {...props} />} ></Route>                         
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
