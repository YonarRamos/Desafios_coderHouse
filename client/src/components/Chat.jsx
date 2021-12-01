import React,{ useState, useEffect, useRef } from "react";
import Cookies from 'js-cookie';
import moment from 'moment';
import socket from "../utils/Socket";
import axios from '../utils/axios';
import './Chat.css';

const Chat = () => {
    const timestamp = new Date();
    const user_name = JSON.parse(Cookies.get('user')).nombre;
    const user_id = JSON.parse(Cookies.get('user'))._id;
    const [ mensaje, setMensaje ]  = useState('');
    const [ mensajes, setMensajes ] = useState([]);

    useEffect(()=>{
        socket.emit('connected', user_name);
    },[user_name])

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
        socket.emit('mensaje', user_name, mensaje, timestamp);
        setMensaje('');
    }

    const saveHistory = ()=>{
        try {
            console.log({ user_id:user_id, messages:mensajes });
            axios.post('mensajes/', { user_id:user_id, messages:mensajes, timestamp:timestamp })
            .then((res)=>{
                console.log('saved history', res);
                alert(`Historial guardado!!`);
            })
            .catch((error)=>{
                console.error('HISTORY_ERRROR', error);
            })
        } catch (error) {
            console.error('HISTORY_ERRROR', error);
        }
    }



    return (
        <>
                <button type="button" className="btn btn-primary btn-lg chat__btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fas fa-comments"></i>
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Chat</h5>
                        <div>
                            <button type="button" className="btn btn-light btn_save" onClick={ saveHistory }>
                                <i className="fas fa-save icon__save"></i>
                            </button>
                            <button type="button" className="btn-close btn__close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="modal-body modal-dialog-scrollable chat_div">
                        <div className="chat">
                            { mensajes.map( (e,i) => <div key={i}><div></div><b>{e.nombre}</b> <small className="date__msg"><i>{`${ timestamp }`}</i></small>:<div> { e.mensaje } </div></div>  ) }
                            <div ref={divRef}></div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <form onSubmit={submit} className="form__send">
                            <div className="send__div">
                                <textarea className="input__msg" name="" id="" rows="1" value={ mensaje } onChange={ e => setMensaje(e.target.value) }></textarea>
                                <div>
                                    <button className="btn btn-primary"><i className="fas fa-paper-plane"></i></button>
                                </div>       
                            </div>
                        </form>            
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Chat;