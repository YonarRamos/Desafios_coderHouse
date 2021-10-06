import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController.js';
import passport from '../middleware/auth';
import { isLoggedIn } from '../middleware/auth';

const router = Router();

router.post('/registrar', usuariosController.add);
router.get('/listar', isLoggedIn , usuariosController.get);
router.post('/login', passport.authenticate('login') ,function (req, res) {
    res.json({ msg: 'Welcome!', user: req.user });
});

export default router