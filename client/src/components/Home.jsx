import { render } from '@testing-library/react';
import Chat from "./Chat";
import Cookies from 'js-cookie';
import React, { Fragment, useState, useEffect } from "react";
import axios from '../utils/axios';
import './Home.css'

const Home = ( props ) => {
    const [productos, setProductos ] = useState([]);

    const getProducts = async ()=> {
        try {
            await axios.get('productos/listar', { withCredentials: true })
            .then((res)=>{
                console.log('PRODUCTOS:', res);
                setProductos(res.data.data);
            })
        } catch (error) {
            console.log('GET_PRODUCTS_ERROR:', error);
        }
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
                    </div>
            </div>
        </div>
                    <div className="container container__product">
                        <div className="col">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                    <th style={{textAlign: 'center'}} scope="col" colSpan="4">
                                       <h3>Productos</h3> 
                                    </th>
{/*                                     <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th> */}
                                    </tr>
                                </thead>
                                <tbody>                               
                                    { 
                                        productos.map((producto, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td colSpan="4">
                                                        <div className="card mb-3 card__product">
                                                            <div className="row g-0">
                                                                <div className="col-md-2">
                                                                <img src={producto.thumbnail} className="img-fluid rounded-start img__producto" alt="..."/>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="card-body card__body">
                                                                        <span className="card-title" style={{textAlign: 'left', fontSize: '20px'}}>{producto.name}</span>
                                                                        <span className="card-text" style={{textAlign: 'left', marginBottom : '0px'}}><h4>${producto.price}</h4></span>
                                                                        <span className="card-text"><small style={{color: 'green'}}>Envio gratis</small></span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2 d-grid gap-2">
                                                                <input type="number" className="form-control input__cant" placeholder="0"/>
                                                                <button type="button" className="btn btn-primary"><i className="fas fa-cart-plus" style={{fontSize:'25px'}}></i></button>
                                                                </div>                               
                                                            </div>
                                                        </div>                                            
                                                    </td>
                                                </tr>                                            
                                            )
                                        })
                                    }
                                </tbody>
                            </table>          
                        </div>
                    </div>
                    <Chat user={ props.user }/>
        </>
     )
};

export default Home;