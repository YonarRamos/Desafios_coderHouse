import passport from 'passport';
import config from "../utils/config";
import { Strategy as FaceBookStrategy } from 'passport-facebook';

const strategyOptions = {
  clientID: process.argv[3] || config.FACEBOOK_APP_ID,
  clientSecret: process.argv[4] || config.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:8080/usuarios/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'emails'],
};

const loginFunc = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    /*   console.log(accessToken);
      console.log(refreshToken); */
      const user = profile;
      //console.log(user);
      return done(null, user);
  } catch (error) {
    console.log(error)
  }
};

passport.use(new FaceBookStrategy(strategyOptions, loginFunc));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

export const isLoggedIn = (req, res, done) => {
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: 'Unauthorized' });

  done();
};

export default passport;