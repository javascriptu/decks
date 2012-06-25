var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , Nohm = require('nohm').Nohm
  ;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var user = Nohm.factory('User');
  user.load(id, function (err, properties) {
    if (err) {
      done(err, properties);
    } else {
      done(null, this.allProperties());
    }
  });
});