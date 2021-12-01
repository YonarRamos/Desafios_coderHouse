import session from "express-session";
import { Mensajes } from '../models/mensajes';
import { Usuario } from '../models/usuarios';
import { EmailService } from "../services/email";
import { GmailService } from "../services/gmail";
import { SmsService } from "../services/twilio";
import Config from "../utils/config";
import { carritoController } from "./carritoController";
import moment from "moment";

class MensajesClass {
    async get(req, res ) {
      const { user_id, timestamp } = req.body;
      try {
        if (user_id) {
          if (timestamp) {
            const mensajes = await Mensajes.find({ user_id: user_id, timestamp: { $gte: new Date(timestamp) } }).exec();
            res.status(200).json( mensajes );
          }else {
            res.status(404).json({
                msg: 'Fecha incorrecta!!'
            });
          }
        } else {
          res.status(404).json({
              msg: 'El usuario no existe'
          });
        }
    } catch (error) {
        console.log('GET MSG_CONTROLLER ERROR', error)
      return error;
    }
  }
    
    async add(req, res){
      let { messages, user_id } = req.body;

      const data = { messages, user_id  }
      const user = Usuario.findById(user_id);

      if(user){
        if(messages.length > 0){
          const newMsg = new Mensajes(data);
          newMsg.save(async function (error) {
            if (error) {
                console.error(error)
            } else{              
              res.status(200).json({
                  mensajes: newMsg
              });
            }
          });
        }else {
          res.status(400).json({
            mensajes: []
          });
        }
      } else {
        res.status(400).json({
          mensaje: 'El usuario no existe'
        });
      }
    }
    
    // async update(id, user){
    // return await Usuario.findByIdAndUpdate(id, user);
    // }

    // async delete(id) {
    // return await Usuario.findByIdAndDelete(id);
    // }

    // async login(req, res) {
    //     console.log('Sesion ==== ', req.sessionID)
    //     const user = req.user.nombre;
    //     try {
    //         if(req.user){
    //                 res.json({ 
    //                     msg: 'Welcome to our store!!', 
    //                     session: {
    //                         session : req.session,
    //                         user: req.user
    //                     }
    //                 }
    //             );
    //         } else {
    //             res.json({
    //                 msg: 'Datos incorrectos'
    //             })
    //         }
    //     } catch (error) {
    //         console.error('LOGIN CONTROLLER ERROR:', error)
    //         return error;
    //     }
    // }

}
export const MensajesController = new MensajesClass();