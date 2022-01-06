import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController.js';
import passport from '../middleware/auth_local';
import { isLoggedIn } from '../middleware/auth';
import { userValidator } from '../middleware/validator';

const router = Router();

router.post('/registrar', userValidator ,usuariosController.addUsers);
router.get('/' , isLoggedIn , usuariosController.getUsers);
// router.get('/loggedIn', usuariosController.login);
router.post('/login', passport.authenticate('login') , usuariosController.loginUsers);
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/api/login');
// });

export default router