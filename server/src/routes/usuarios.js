import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController.js';
import passport from '../middleware/auth';
import { isLoggedIn } from '../middleware/auth';

const router = Router();

router.post('/registrar', usuariosController.add);
router.get('/listar', isLoggedIn , usuariosController.get);
router.get('/loggedIn', usuariosController.login);
//router.post('/login', passport.authenticate('login') , usuariosController.login);
router.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
  );
  
router.get('/auth/facebook/callback', 
    passport.authenticate(
        'facebook', 
        { failureRedirect: '/fail' }
    ),
    usuariosController.login
);

router.get('/fail', (req, res) => {
    res.json('login-error', {
        msg: 'Error de autenticación'
    });
});

router.get('/logout', (req, res) => {
req.logout();
res.redirect('/api/login');
});

export default router