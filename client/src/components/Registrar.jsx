import React, { useState } from 'react';
import axios from '../utils/axios'
import './Registrar.css'

function Registrar() {

    const [msgServer, setMsgServer] = useState('');
    const [user, setUser] = useState({
        email:'',
        password:'',
        nombre:'',
        apellido:'',
        edad:'',
        alias:'',
        avatar:''
    });
    const signUp = (e)=>{
        try {
            axios.post('usuarios/registrar', user)
            .then((res)=>{
                console.log('Usuario registrado', res);
                alert(`Usuario ${user.nombre} agregado correctamente!!`)
                setUser({
                    email:'',
                    password:'',
                    nombre:'',
                    apellido:'',
                    edad:'',
                    alias:'',
                    avatar:''
                })
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
    }

    return (
        <div className="container container__usuario">
            <h5 className="agregar__usuario">Nuevo Usuario</h5>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input value={ user.nombre } onChange= { e => setUser({ ...user, nombre : e.target.value })} type="text" className="form-control" id="nombre" aria-describedby="nombre"/>
                    <div id="nombreHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido:</label>
                    <input value= { user.apellido } onChange= { e => setUser({ ...user, apellido : e.target.value })} type="text" className="form-control" id="apellido" aria-describedby="apellido"/>
                    <div id="apellidoHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad:</label>
                    <input value={ user.edad } onChange= { e => setUser({ ...user, edad : e.target.value })} type="number" className="form-control" id="edad" aria-describedby="edad"/>
                    <div id="edadHelp" className="form-text"></div>
                </div>  
                <div className="mb-3">
                    <label htmlFor="alias" className="form-label">Alias:</label>
                    <input value= { user.alias } onChange= { e => setUser({ ...user, alias : e.target.value })} type="text" className="form-control" id="alias" aria-describedby="alias"/>
                    <div id="aliasHelp" className="form-text"></div>
                </div> 
                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">avatar:</label>
                    <input value={ user.avatar } onChange= { e => setUser({ ...user, avatar : e.target.value })} type="text" className="form-control" id="avatar" aria-describedby="avatar"/>
                    <div id="avatarHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input value={ user.email } onChange= { e => setUser({ ...user, email : e.target.value })} type="text" className="form-control" id="email" aria-describedby="email"/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="paswword" className="form-label">Password:</label>
                    <input value={ user.password } onChange= { e => setUser({ ...user, password : e.target.value })} type="password" className="form-control" id="password" aria-describedby="password"/>
                    <div id="passwordHelp" className="form-text"></div>
                </div>         
                <div className="msg__server">{ msgServer }</div>     
            <button type="button" onClick={signUp} className="btn btn-primary">Enviar</button>
        </div>
    );
}

export default Registrar;
