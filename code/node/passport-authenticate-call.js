passport.authenticate('local',
  { successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })