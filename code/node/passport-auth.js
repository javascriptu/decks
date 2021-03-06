var passport = module.exports = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , Nohm = require('nohm').Nohm
  ;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, pass, done) {
    var user = Nohm.factory('User');
    user.authenticate(email, pass, function(err,userRecord) {
      if (err) return done(null, null);
      return done(null,userRecord);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var user = Nohm.factory('User');
  user.load(id, function (err, properties) {
    if (err) {
      done (err,properties);
    } else {
      done(null, this.allProperties());
    }
  });
});