import { render } from '@testing-library/react';
import Chat from "./Chat";
import Cookies from 'js-cookie';
import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from 'react-router';
import axios from '../utils/axios';
import './Home.css'

const Home = ( props ) => {
    const history = useHistory();
    const [productos, setProductos ] = useState([]);

    const getProducts = async ()=> {
        try {
            await axios.get('productos/', { withCredentials: true })
            .then((res)=>{
                console.log('PRODUCTOS:', res);
                setProductos(res.data.data);
            })
        } catch (error) {
            console.log('GET_PRODUCTS_ERROR:', error);
        }
    }
    const letsBuy = ()=>{
        history.push('/shop');
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <div className="card text-center bienvenida">
                <div className="card-body">
                    <h3 className="card-title">Bienvenido { JSON.parse(Cookies.get('user')).nombre }</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <ul className="list-group list__group">
                                <li className="list-group-item">Nombre: { JSON.parse(Cookies.get('user')).nombre }</li>
                                <li className="list-group-item">Apellido: { JSON.parse(Cookies.get('user')).apellido }</li>
                                <li className="list-group-item">Alias: { JSON.parse(Cookies.get('user')).alias }</li>
                                <li className="list-group-item">Edad: { JSON.parse(Cookies.get('user')).edad }</li>
                                <li className="list-group-item">Email: { JSON.parse(Cookies.get('user')).email }</li>
                                <li className="list-group-item">Telofono: { JSON.parse(Cookies.get('user')).telefono }</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <img src={ JSON.parse(Cookies.get('user')).avatar } className="img-thumbnail avatar" alt="avatar"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 shop__btn__wrapper">
                                <button type="button" onClick={letsBuy} className="btn btn-primary"><i class="fas fa-shopping-bag icon__shop"></i>Vamos de compras</button>
                            </div>
                            <div className="col-4"></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
     )
};

export default Home;