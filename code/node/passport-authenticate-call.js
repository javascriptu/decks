exports.login = {
  get : function (req, res) {
    res.render('login', {
      title : 'Login',
      message: req.flash('error')
    });
  },
  post : passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })
};