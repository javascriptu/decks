redisClient.on("connect", function () {
  console.log("Connected to redis");
  Nohm.setClient(redisClient);
}).on("error", function (err) {
  console.log("RedisClient Error " + err);
});
