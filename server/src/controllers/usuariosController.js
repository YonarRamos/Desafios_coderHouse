import session from "express-session";
import { Usuario } from '../models/usuarios';
import passport from '../middleware/auth';

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
        const { email, password, nombre, apellido, edad, alias, avatar } = req.body;
        if( email && password && nombre && apellido && edad && alias && avatar ){
            const user = { email, password, nombre, apellido, edad, alias, avatar }
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
        //console.log('it works', req)
        try {
            if(req.user){
                res.json({ 
                    msg: 'Welcome!', 
                    user: {
                        name: req.user.displayName,
                        email: req.user.emails[0].value,
                        photo: req.user.photos[0].value
                    }, 
                    session: req.session
                }
            );
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