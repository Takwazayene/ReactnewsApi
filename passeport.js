/*var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport=require("passport");
const UserInfoError = require('passport-google-oauth20/lib/errors/userinfoerror');


const GOOGLE_CLIENT_ID = "269002485153-eo7kgmk59gbpbfkg47iplm0nnd5ua2tb.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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" ;



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
  }, 
  function(accessToken, refreshToken, profile, cb) {


const user = {
    fullName : `${profile.name.givenName}` `${profile.name.familyName}`,
    email : profile.email[0].value,
    picture : profile.photos[0].value,
    googleId : profile.id,
}

return  cb(null, user);
    


  }
));

passport.serializeUser((user,done)=> {
    done(null,user)
})

passport.deserializeUser((user,done)=> {
    done(null,user)
})*/