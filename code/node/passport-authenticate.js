authenticate : function (email, password, callback) {
  var self = this;
  if (!email || email === '' || !password || password === '') {
    callback('invalid input');
    return;
  }
  this.find({email : email}, function (err, ids) {
    if (ids.length === 0) {
      callback('user not found');
    } else {
      self.load(ids[0], function (err) {
        //nohm hashes on retrieval - better handling for this
        var pwCompare = hashPassword(hashPassword(password));
        if (!err && self.p('password') === pwCompare) {
          callback(null, self.allProperties());
        } else {
          callback('invalid password');
        }
      });
    }
  });
}