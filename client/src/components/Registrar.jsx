import React, { useState } from 'react';
import axios from '../utils/axios'
import './Registrar.css'

function Registrar( props ) {
    console.log( props )
    const { user, setUser, history } = props;
    const [msgServer, setMsgServer] = useState('');
    const signUp = (e)=>{
        try {
            axios.post('usuarios/registrar', user)
            .then((res)=>{
                console.log('Usuario registrado', res);
                alert(`Bienvenido ${user.nombre}`);
                setUser({
                    email:'',
                    password:'',
                    confirmPassword:'',
                    nombre:'',
                    apellido:'',
                    edad:'',
                    alias:'',
                    avatar:'',
                    telefono:'',
                });
                history.push('/login');
            })
            .catch((error)=>{
                if(error.response){
                    console.error('REGISTER CATCH ERRROR', error.response.data.msg);                
                    setMsgServer(error.response.data.msg);
                    setTimeout(()=>{
                        setMsgServer('');
                    }, 3000)                                
                };
            });
        } catch (error) {
            console.error('REGISTER ERRROR', error);
        }
    }

    return (
        <div className="card tarjeta">
                <div className="card-body pb-1" style={{height: 'auto'}}>     
                    {/* LOGIN CON CORREO ELECTRONICO */}
                    <h4 className="btn__register__box">NUEVO USUARIO</h4>
                    <form>
                        <div>
                            <label htmlFor="nombre" className="form-label">Nombre:</label>
                            <input value={ user.nombre } onChange= { e => setUser({ ...user, nombre : e.target.value })} type="text" className="form-control" id="nombre" aria-describedby="nombre"/>
                            <div id="nombreHelp" className="form-text"></div>
                        </div>
                        <div>
                            <label htmlFor="apellido" className="form-label">Apellido:</label>
                            <input value= { user.apellido } onChange= { e => setUser({ ...user, apellido : e.target.value })} type="text" className="form-control" id="apellido" aria-describedby="apellido"/>
                            <div id="apellidoHelp" className="form-text"></div>
                        </div>
                        <div>
                            <label htmlFor="edad" className="form-label">Edad:</label>
                            <input value={ user.edad } onChange= { e => setUser({ ...user, edad : e.target.value })} type="number" className="form-control" id="edad" aria-describedby="edad"/>
                            <div id="edadHelp" className="form-text"></div>
                        </div>  
                        <div>
                            <label htmlFor="alias" className="form-label">Alias:</label>
                            <input value= { user.alias } onChange= { e => setUser({ ...user, alias : e.target.value })} type="text" className="form-control" id="alias" aria-describedby="alias"/>
                            <div id="aliasHelp" className="form-text"></div>
                        </div> 
                        <div>
                            <label htmlFor="telefono" className="form-label">Teléfono:</label>
                            <input value={ user.telefono } onChange= { e => setUser({ ...user, telefono : e.target.value })} type="text" className="form-control" id="avatar" aria-describedby="telefono"/>
                            <div id="avatarHelp" className="form-text"></div>
                        </div>
                        <div>
                            <label htmlFor="avatar" className="form-label">avatar:</label>
                            <input value={ user.avatar } onChange= { e => setUser({ ...user, avatar : e.target.value })} type="text" className="form-control" id="avatar" aria-describedby="avatar"/>
                            <div id="avatarHelp" className="form-text"></div>
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input value={ user.email } onChange= { e => setUser({ ...user, email : e.target.value })} type="text" className="form-control" id="email" aria-describedby="email"/>
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div>
                            <label htmlFor="paswword" className="form-label">Password:</label>
                            <input value={ user.password } onChange= { e => setUser({ ...user, password : e.target.value })} type="password" className="form-control" id="password" aria-describedby="password"/>
                            <div id="passwordHelp" className="form-text"></div>
                        </div>   
                        <div>
                            <label htmlFor="confirmPaswword" className="form-label">Confirmar password:</label>
                            <input value={ user.confirmPassword } onChange= { e => setUser({ ...user, confirmPassword : e.target.value })} type="password" className="form-control" id="confirmPassword" aria-describedby="confirmPassword"/>
                            <div id="passwordHelp" className="form-text"></div>
                        </div>  
                    </form>
                    <div className="btn__register__box">
                        <button type="button" onClick={signUp} className="btn btn-primary">Registrar</button>
                    </div>
            </div>
        </div>
    );
}

export default Registrar;
