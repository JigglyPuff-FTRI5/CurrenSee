const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '753478651399-ecjeosu0jo18odlr7bjt7btscjf812iu.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/user/google/callback",
    passReqToCallback: true
  },

  function(request, accessToken, refreshToken, profile, done) {
      return done(err, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
