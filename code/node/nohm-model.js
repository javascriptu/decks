var Nohm = require('nohm').Nohm
  , crypto = require('crypto')
  ;

module.exports = Nohm.model('User', {
  idGenerator : 'increment',
  properties  : {
    email    : {
      type        : 'string',
      unique      : true,
      index        : true,
      validations : [
        ['notEmpty'],
        ['email']
      ]
    },
    password : {
      type        : 'string',
      validations: [
        ['notEmpty']
      ]
    }
  },
  methods : {
    authenticate : function (email, password, callback) {
      var self = this;
      if (!email || !password) {
        callback('invalid input');
        return;
      }

      this.find({email : email}, function (err, ids) {
        if (ids.length === 0) {
          callback('user not found');
        } else {
          self.load(ids[0], function (err) {
            if (!err && self.p('password') === password) {
              callback(null, self.allProperties());
            } else {
              callback('invalid password');
            }
          });
        }
      });
    }
  }
});