import React,{ useState, useEffect, useRef } from "react";
import socket from "../utils/Socket";
import '../App.css'

const Chat = ({nombre}) => {
    const [ mensaje, setMensaje ]  = useState('');
    const [ mensajes, setMensajes ] = useState([]);

    useEffect(()=>{
        socket.emit('connected', nombre);
    },[nombre])

    useEffect(()=>{
        socket.on('mensajes', mensaje => {
            setMensajes([...mensajes, mensaje]);
        });
        return  ()=> { socket.off() };
    },[mensajes]);

    const divRef = useRef(null);
    useEffect(()=>{
        divRef.current.scrollIntoView({bahevior : 'smooth'})
    });
    const submit = (e) => {
        e.preventDefault();
        socket.emit('mensaje', nombre, mensaje);
        setMensaje('');
    }



    return (
        <div>
            <div className="chat">
                { mensajes.map( (e,i) => <div key={i}><div></div><b>{e.nombre}:</b><div> { e.mensaje } </div></div>  ) }
                {/* <div ref={divRef}></div> */}
            </div>
            <form onSubmit={submit}>
                <label htmlFor="">Escriba su mensaje</label>
                <textarea name="" id="" cols="30" rows="2" value={mensaje} onChange={ e => setMensaje(e.target.value) }></textarea>
                <button>Enviar</button>
            </form>            
        </div>
    
    )
}

export default Chat;