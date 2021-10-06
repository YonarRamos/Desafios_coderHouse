import React, { useState } from 'react';
import axios from '../utils/axios'
import './Registrar.css'

function Register() {

    const [msgServer, setMsgServer] = useState('');

        try {
            axios.post('usuarios/register', {
                //user
            })
            .then((res)=>{
                console.log('Usuario registrado', res);
            })
            .catch((error)=>{
                if(error.response){
                    console.error('REGISTER ERRROR', error.response.data.msg);                
                    setMsgServer(error.response.data.msg);
                    setTimeout(()=>{
                        setMsgServer('');
                    }, 3000)                                
                };
            });
        } catch (error) {
            console.error('LOGIN ERRROR', error);
        }

    return (
        <div className="container container__usuario">
            <h5 className="agregar__usuario">Nuevo Usuario</h5>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="nombre"/>
                    <div id="nombreHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="text" className="form-control" id="email" aria-describedby="email"/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido:</label>
                    <input type="text" className="form-control" id="apellido" aria-describedby="apellido"/>
                    <div id="apellidoHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad:</label>
                    <input type="number" className="form-control" id="edad" aria-describedby="edad"/>
                    <div id="edadHelp" className="form-text"></div>
                </div>  
                <div className="mb-3">
                    <label htmlFor="alias" className="form-label">Alias:</label>
                    <input type="text" className="form-control" id="alias" aria-describedby="alias"/>
                    <div id="aliasHelp" className="form-text"></div>
                </div> 
                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">avatar:</label>
                    <input type="text" className="form-control" id="avatar" aria-describedby="avatar"/>
                    <div id="avatarHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="paswword" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" aria-describedby="password"/>
                    <div id="passwordHelp" className="form-text"></div>
                </div>         
                <div>{msgServer}</div>     
                <button type="submit" className="btn btn-primary">AGREGAR</button>
            </form>
        </div>
    );
}

export default Register;
