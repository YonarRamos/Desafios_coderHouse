import React from "react";

const Home = ( props ) => {
    console.log(props)
    return (
        <div className="card text-center">
            <div className="card-body">
                <h3 className="card-title">HOLA { props.usario }</h3>
                <p className="card-text">Bienvenido a nuestro ecommerce</p>
            </div>
        </div>
     )
};

export default Home;