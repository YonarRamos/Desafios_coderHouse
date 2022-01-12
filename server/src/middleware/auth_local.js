const Mongoose = require('mongoose');
import passport from 'passport';
import passportLocal from 'passport-local';
import  { usuarioSchema } from '../models/usuarios/DAOs/mongo';
const UsuarioModel = Mongoose.model('usuarios', usuarioSchema);
const LocalStrategy = passportLocal.Strategy;

const strategyOptions = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
};

const loginFunc = async (req, email, password, done) => {
  console.log('Validando usuario:', email, '==>', password, '==>', UsuarioModel);
  try {
    const user = await UsuarioModel.findOne({ email });
    console.log(user)
    if (!user) {
      return done(null, false, { msg: 'User does not exist' });
    }
    if (!user.isValidPassword(password)) {
      return done(null, false, { msg: 'Datos incorrectos' });
    }
    console.log('SALIO TODO BIEN');
    return done(null, user);   
  } catch (error) {
    console.log('LoginFuncERROR:', error);
  }
};

const signUpFunc = async (req, email, password, done) => {
  try {
      
    const { email, password, nombre, apellido, edad, alias, avatar } = req.body;
    console.log(req.body);

    if (!email || !password || !nombre || !apellido || edad || alias || avatar ) {
      console.log('Invalid body fields');
      return done(null, false);
    }

    const query = {
      $or: [{ email: email }, { email: email }],
    };

    console.log(query);
    const user = await UsuarioModel.findOne(query);

    if (user) {
      console.log('User already exists');
      console.log(user);
      return done(null, false, 'User already exists');
    } else {
      const userData = {
        email,
        password,
        email,
        firstName,
        lastName,
      };

      const newUser = new UsuarioModel(userData);

      await newUser.save();

      return done(null, newUser);
    }
  } catch (error) {
    done(error);
  }
};

passport.use('login', new LocalStrategy(strategyOptions, loginFunc));
passport.use('signup', new LocalStrategy(strategyOptions, signUpFunc));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((userId, done) => {
  Usuario.findById(userId, function (err, user) {
    done(err, user);
  });
});

export const isLoggedIn = (req, res, done) => {
  if (!req.user) return res.status(401).json({ msg: 'No estas autorizado!!' });
  done();
};

export default passport;