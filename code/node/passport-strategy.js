passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    // nohm model method - we'll get to this next
    user.authenticate(email, password, function(err,userRecord) {
      if (err) return done(null, false, { message :  err });
      return done(null,userRecord);
    });
  }
));
