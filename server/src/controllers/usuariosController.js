import session from "express-session";
import { Usuario } from '../models/usuarios';
import { EmailService } from "../services/email";
import { GmailService } from "../services/gmail";
import { SmsService } from "../services/twilio";
import Config from "../utils/config";
import { carritoController } from "./carritoController";
import moment from "moment";

class UsuariosClass {
    async get(req, res ) {
        const { email } = req.body;
        try {
          if (email) {
            const user = await Usuario.find({email: email});
            if(user){
                res.status(200).json({
                    user: user
                });
            }else {
                res.status(404).json({
                    msg: 'El usuario no existe'
                });
            }
          } else {
            const user = await Usuario.find();
            if (user) {
                req.session.loggedIn = true;
                res.status(200).json({
                    user: user
                });
            } else {
                    res.status(404).json({
                        msg: 'El usuario no existe'
                    });
                }           
            }
        } catch (error) {
            console.log('GET CONTROLLER ERROR', error)
          return error;
        }
    }
    
    async add(req, res){
        let { email, password, nombre, apellido, edad, alias, avatar, telefono } = req.body;
            telefono = `+549${telefono}`
            const user = { email, password, nombre, apellido, edad, alias, avatar, telefono }
            const newUser = new Usuario(user);
            await newUser.save().then( async ( user )=> {
                //Creando carrito
                if(user){
                    const usuario = user._id;
                    console.log('Creando carrito del usuario...',user._id,':',user.nombre);
                   await carritoController.create(usuario).then( async ()=>{
                    //Notificando al Admin
                    /* ETHERAL */
                    console.log('Sending email to Admin...');
                    const destination = 'americo.dicki24@ethereal.email';
                    const subject = `Nuevo Registro - ${user.nombre} - ${moment().format('YYYY-MM-DD HH:mm:ss')}`;
                    const content = ` 
                    <h3> Nuevo registro</h3> 
                    <ul>
                        <li>
                            Nombre: ${user.nombre}
                        </li>
                        <li>
                            Apellido: ${user.apellido}
                        </li>
                        <li>
                            Teléfono: ${user.telefono}
                        </li>
                        <li>
                            Apellido: ${user.apellido}
                        </li>
                        <li>
                            Edad: ${user.edad}
                        </li>
                        <li>
                            Alias: ${user.alias}
                        </li>
                        <li>
                            Email: ${user.email}
                        </li>
                    </ul>                   
                    `;

                    const resEtheral = await EmailService.sendEmail(
                        destination,
                        subject,
                        content
                    );
                    console.log('Email enviado!!');
                    /* GMAIL */
                    console.log('Sending Gmail...');
                    const Gdestination = 'ingyonarramos@gmail.com';
                    const Gsubject = `Nuevo Registro - ${user.nombre} - ${moment().format('YYYY-MM-DD HH:mm:ss')}`;
                    const Gcontent = `
                    <h3> Nuevo registro</h3> 
                    <ul>
                        <li>
                            Nombre: ${user.nombre}
                        </li>
                        <li>
                            Apellido: ${user.apellido}
                        </li>
                        <li>
                            Teléfono: ${user.telefono}
                        </li>
                        <li>
                            Apellido: ${user.apellido}
                        </li>
                        <li>
                            Edad: ${user.edad}
                        </li>
                        <li>
                            Alias: ${user.alias}
                        </li>
                        <li>
                            Email: ${user.email}
                        </li>
                    </ul>                    
                    `;

                    const resGmail = await GmailService.sendEmail(
                        Gdestination,
                        Gsubject,
                        Gcontent
                    );
                    console.log('Gmail enviado!!');

                    /* TWILIO */
                    console.log('Sending msg to Admin...');
                    const resTwilio = await SmsService.sendMessage( '+541138796141', `Nuevo Registro ${user.nombre}`);
                    console.log('Msg twilio enviado!!');
                    })
                    res.status(200).json({
                        usuario: user
                    });
                }
            })
    }
    
    async update(id, user){
    return await Usuario.findByIdAndUpdate(id, user);
    }

    async delete(id) {
    return await Usuario.findByIdAndDelete(id);
    }

    async login(req, res) {
        console.log('Sesion ==== ', req.sessionID)
        const user = req.user.nombre;
        try {
            if(req.user){
                    res.json({ 
                        msg: 'Welcome to our store!!', 
                        session: {
                            session : req.session,
                            user: req.user
                        }
                    }
                );
            } else {
                res.json({
                    msg: 'Datos incorrectos'
                })
            }
        } catch (error) {
            console.error('LOGIN CONTROLLER ERROR:', error)
            return error;
        }
    }

}
export const usuariosController = new UsuariosClass();