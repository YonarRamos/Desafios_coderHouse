import React from "react";
import './Navbar.css';
import Cookies from 'js-cookie';
import { useHistory } from "react-router";

const Navbar = ( props )=>{
    let history = useHistory();
    const Logout = ()=>{
        Cookies.remove('user');
        Cookies.remove('sessionID');
        history.push("/login");
    }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div>
                <p className="navbar-brand">Ecommerce</p>
            </div>
            <div>
                <button className="btn btn-outline-primary btn__logout" type="button" onClick={ Logout }>Logout</button>    
                <button type="button" className="btn btn-outline-primary position-relative">
                    <i className="fas fa-shopping-cart" style={{fontSize:'20px'}}></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </span>                   
                </button>            
            </div>
        </div>
        </nav>
    )
}

export default Navbar;