import React, { Fragment, useState } from "react";
import { Redirect, useHistory } from 'react-router';
import { Link } from "react-router-dom"
import Home from "./Home";
import Cookies from 'js-cookie';
import './login.css';
import axios from '../utils/axios';
import moment from 'moment'

const Login = ( props ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgServer, setMsgServer] = useState('');
    const history = useHistory();

    const logIn = ()=>{
        axios.post('usuarios/login',{
            email,
            password
        })
        .then((res)=>{
            console.log('its working', res);
            Cookies.set('connect.sid', res.data.sessionData.sessionID );
            history.push('/');
        })
        .catch((error)=>{
            if(error.response){
                console.error('LOGIN ERRROR', error.response.data.msg, {
                    expires: moment(Date.now).add('1', "minute")
                });                
                setMsgServer(error.response.data.msg);
                setTimeout(()=>{
                    setMsgServer('');
                }, 3000)                                
            };
        });
    }

    const signInFacebook= ()=>{
        axios.get('usuarios/auth/facebook')
        .then((res)=>{
            console.log('its working face', res);
            //Cookies.set('connect.sid', res.data.sessionData.sessionID );
            history.push('/');
        })
        .catch((error)=>{
            if(error.response){
                console.error('LOGIN ERRROR', error.response.data.msg, {
                    expires: moment(Date.now).add('1', "minute")
                });                
                                           
            };
            alert(error);   
        });
    }



    return (
        <Fragment>
            <div className="card tarjeta" style={{width: '18rem'}}>
            <h3 className="title_card_login">Bienvenido</h3>
            <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-256.png" className="card-img-top img" alt="logo"/>
                <div className="card-body pb-1">     
                    {/* LOGIN CON CORREO ELECTRONICO */}
                    <form>
                        <input placeholder="Email" className="user__field" type="text" onChange={e => setEmail(e.target.value)} />
                        <input placeholder="Password" className="pwd__field" type="password" onChange={e => setPassword(e.target.value)} />   
                    </form>
                    <button type="button" onClick={logIn} className="btn btn-block text-center btn__login"><i className="fas fa-envelope-square mail__icon"></i>Incia sesión con tu Email</button>
                    {/* LOGIN CON FACEBOOK */}
                    <button type="button" disabled onClick={signInFacebook} className="btn btn-block btn__login__facebook"><i className="fab fa-facebook-square facebook__icon" ></i> Inicia sesión con Facebook</button>
                </div>
               <div className="div__registrar">¿No tienes cuenta?<Link to="/registrar" className="registrar">Registrate aqui</Link></div> 
            </div>
        </Fragment>
    )
}

export default Login;
