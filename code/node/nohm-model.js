var UserModel = nohm.model('User', {
  idGenerator : 'increment',
  properties: {
    email: {
      type: 'string',
      unique: true,
      validations: [
        ['notEmpty'],
        ['email']
      ]
    }
  // ... other user properties
  },
  methods: { // optional
    getByEmail : function(email, callback) {
      var self = this;
      this.find({email : email}, function (err, ids) {
        if (ids.length === 0) {
          callback('user not found');
        } else {
          self.load(ids[0], function (err) {
            callback(null, self.allProperties());
          });
        }
      });
    }
  }
});