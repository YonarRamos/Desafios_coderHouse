const  EmailService  = require("../../../services/email");
const  GmailService  = require("../../../services/gmail");
const  SmsService  = require("../../../services/twilio");
const  carritoController  = require("../../../controllers/carritoController");
const  UsuarioModel  = require('../Usuario');
const moment = require("moment");

class UsuariosMongoDAO {
    async get(req, res ) {
        const { email } = req.body;
        try {
          if (email) {
            const user = await UsuarioModel.find({email: email});
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
            const user = await UsuarioModel.find();
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
        let { email, password, nombre, apellido, edad, alias, avatar, telefono, direccionEntrega} = req.body;
            telefono = `+549${telefono}`
            const user = { email, password, nombre, apellido, edad, alias, avatar, telefono }
            const newUser = new UsuarioModel(user);
            await newUser.save().then( async ( user )=> {
                //Creando carrito
                if(user){
                    const usuario = user._id;
                    console.log('Creando carrito del usuario...',user._id,':',user.nombre);
                   await carritoController.create(usuario, direccionEntrega).then( async ()=>{
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
    
    async update(req, res){
        const user = req.body;
        const usuario_id = req.params.usuario_id;
        console.log('user',user);
        const userUpdated = await UsuarioModel.findByIdAndUpdate(usuario_id);
        console.log('userUpdated',userUpdated);
        if(userUpdated){
            res.status(200).json({
                msg: 'Usuario actualizado',
                data: userUpdated
            });
        } else {
            res.status(404).json({
                msg: "El usuario no existe"
            });
        }
    }

    async delete(req, res) {
        const usuario_id = req.params.usuario_id;
        const userResponse = await UsuarioModel.findByIdAndDelete(usuario_id);
        console.log('userResponse',userResponse);
        if(userResponse){
            res.status(200).json({
                msg:'Usuario eliminado',
                data:userResponse
            });
            carritoController.destroy(usuario_id);  
        } else {
            res.status(400).json({
                msg:'Usuario no existe'
            })
        }
    }

    async login(req, res) {
        console.log('Sesion ==== ', req.sessionID)
        const user = req.user.nombre;
        try {
            if(req.sessionID){
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

module.exports =  UsuariosMongoDAO ;
