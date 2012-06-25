var Nohm = require('nohm').Nohm;
var redisClient = require('redis').createClient();

redisClient.on("connect", function () {
  Nohm.setClient(redisClient);
});
