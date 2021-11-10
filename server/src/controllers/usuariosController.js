import session from "express-session";
import { Usuario } from '../models/usuarios';
import { EmailService } from "../services/email";
import { GmailService } from "../services/gmail";
import { SmsService } from "../services/twilio";
import Config from "../utils/config";
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
            newUser.save(function (error) {
                if (error) {
                    console.error(error)
                    return handleError(err);
                }
                return res.status(200).json({
                    usuario: newUser
                });
            });
    }
    
    async update(id, user){
    return await Usuario.findByIdAndUpdate(id, user);
    }

    async delete(id) {
    return await Usuario.findByIdAndDelete(id);
    }

    async login(req, res) {
        console.log('Sesion ==== ', req.session)
        const user = req.user.nombre;
        try {
            if(req.user){
                res.json({ 
                    msg: 'Welcome to our store!!', 
                    session: req.session
                }
            );
            //Notificando al Admin
            console.log('Sending email to Admin...');
            const destination = 'americo.dicki24@ethereal.email';
            const subject = `Login - ${user} - ${moment().format('YYYY-MM-DD HH:mm:ss')}`;
            const content = ` <h1> ${user} acaba de iniciar sesión</h1> `;
    
            await EmailService.sendEmail(
                destination,
                subject,
                content
            );

            console.log('Sending Gmail...');
            const Gdestination = 'ingyonarramos@gmail.com';
            const Gsubject = `Login - ${user} - ${moment().format('YYYY-MM-DD HH:mm:ss')}`;
            const Gcontent = ` <h1> ${user} acaba de iniciar sesión</h1> `;
    
            const resGmail = await GmailService.sendEmail(
                Gdestination,
                Gsubject,
                Gcontent
            );
            console.log('Gmail status:', resGmail);

            console.log('Sending msg to Admin...');
            const resTwilio = await SmsService.sendMessage( '+541138796141', `${user} acaba de iniciar sesión`);
            console.log('Msg status:', resTwilio);
            } else {
                res.json({
                    msg: 'Algo salió mal'
                })
            }
        } catch (error) {
            console.error('LOGIN CONTROLLER ERROR:', error)
            return error;
        }
    }

}
export const usuariosController = new UsuariosClass();