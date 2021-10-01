import session from "express-session";
import { Usuario } from '../models/usuarios';

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
        const { email, pwd, nombre, apellido, edad, alias, avatar } = req.body;
        if( email && pwd && nombre && apellido && edad && alias && avatar ){
            const user = { email, pwd, nombre, apellido, edad, alias, avatar}
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
        } else {
            return res.status(400).json({
                msg: 'Todos los campos son obligatorios'
            });
        }
    }
    
    async update(id, user){
    return await Usuario.findByIdAndUpdate(id, user);
    }

    async delete(id) {
    return await Usuario.findByIdAndDelete(id);
    }

    async login(req, res) {
        const { email, pwd } = req.body;

        try {
          if ( email && pwd ) {
            const user = await Usuario.findOne({email : email});
            if(user){
                if (user.pwd == pwd){
                    req.session.loggedIn = true
                    res.status(200).json({
                        user: user,
                        session: req.session,
                    });
                } else {
                    return res.status(400).json({
                        msg: 'Contraseña incorrecta'
                    });
                }
            } else {
                return res.status(404).json({
                    msg: 'Usuario no registrado'
                });
            }
          } else {
            return res.status(400).json({
                msg: 'Todos los campos son obligatorios'
            });
          }

        } catch (error) {
            console.error('LOGIN CONTROLLER ERROR:', error)
            return error;
        }
    }

}
export const usuariosController = new UsuariosClass();