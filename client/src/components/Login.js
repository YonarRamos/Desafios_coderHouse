import React, { Fragment, useState } from "react";
import { Redirect, useHistory } from 'react-router';
import Cookies from 'js-cookie';
import './login.css'
import axios from '../utils/axios'

const Login = ( props )=>{
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [msgServer, setMsgServer] = useState('');
    const history = useHistory();

    const signIn = ()=>{
        try {
            axios.post('usuarios/login',{
                email,
                pwd
            })
            .then((res)=>{
                console.log('its working', res);
                Cookies.set('loggedIn', res.data.session.loggedIn, { expires: 6000 } );
                history.push('/');
                props.getLoggedUser(res);
            })
            .catch((error)=>{
                if(error.response){
                    console.error('LOGIN ERRROR', error.response.data.msg);                
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
        <Fragment>
            <div className="card tarjeta" style={{width: '18rem'}}>
            <h3 className="title_card_login">Welcome</h3>
            <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-256.png" className="card-img-top img" alt="logo"/>
                <div className="card-body">
                    <form>
                        <input placeholder="Email" className="user__field" type="text" onChange={e => setEmail(e.target.value)} />
                        <input placeholder="Password" className="pwd__field" type="password" onChange={e => setPwd(e.target.value)} />   
                    </form>     
                    <span className="msg__server" >{msgServer}</span>       
                    <button type="button" onClick={signIn} className="btn btn-primary btn-block btn__login">Ingresar</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;