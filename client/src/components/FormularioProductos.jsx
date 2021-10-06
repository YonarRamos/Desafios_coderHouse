import React, { Fragment } from 'react';
import './FormularioProductos.css'

function FormularioProductos() {
    return (
        <div className="container container__productos">
            <h5 className="agregar__productos">Agregar Productos</h5>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="nombre"/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio:</label>
                    <input type="number" className="form-control" id="precio" aria-describedby="precio"/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock:</label>
                    <input type="number" className="form-control" id="stock" aria-describedby="stock"/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea className="form-control" id="descripcion" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Url imagen:</label>
                    <input type="text" className="form-control" id="image" aria-describedby="image"/>
                    <div id="imagen" className="form-text"></div>
                </div>
                <button type="submit" className="btn btn-primary">AGREGAR</button>
            </form>
        </div>
    )
}

export default FormularioProductos
