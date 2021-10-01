import React from "react";
import Cookies from 'js-cookie';
import { useHistory } from "react-router";

const Navbar = ()=>{
    let history = useHistory();
    const Logout = ()=>{
        history.push("/login");
        Cookies.remove('loggedIn');
    }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Ecommerce</a>
            <button className="btn btn-outline-primary" type="button" onClick={ Logout }>Logout</button>
        </div>
        </nav>
    )
}

export default Navbar;