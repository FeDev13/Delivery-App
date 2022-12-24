const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "1040797163467-m72tdvcg5upmq7cgkdap1sc0b7mjip8d.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3002/auth/google/callback",
      scope: ["profile"],
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
