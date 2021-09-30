import React, { Fragment, useState } from "react";
import './login.css'

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const signIn = ()=>{

    }

    return (
        <Fragment>
            <div className="card tarjeta" style={{width: '18rem'}}>
            <h3 className="title_card_login">Welcome</h3>
            <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-256.png" className="card-img-top img" alt="logo"/>
                <div className="card-body">
                    <form onSubmit={signIn}>
                        <input placeholder="Email" className="user__field" type="text" />
                        <input placeholder="Password" className="pwd__field" type="password" name="" id="" />   
                    </form>            
                    <button type="button" class="btn btn-primary btn-block btn__login">Ingresar</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;
