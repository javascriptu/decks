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
    //Soon
  }
});