
import session from "express-session";

export const validateLogIn = (req, res, next) => {
    if (req.session.loggedIn) next();
    else res.status(401).json({ msg: 'no estas autorizado' });
};