performApiSearch : function() {
  var self = this,
    url = this.constructTwitterApiUrl(),
    tweets = $.ajax({ url : url, dataType : "jsonp"  });

  tweets.done(function (response) {
    self.setMaxId(response.max_id_str); //Set The Since ID
    self.handleResults(response.results.reverse());
  });
},
constructTwitterApiUrl : function() {
  var config = this.config,
    url = "http://search.twitter.com/search.json?q=",
    sinceId = this.maxId === 0 ? '' : "&since_id=" + this.maxId,
    hashTag = this.config.hashTag,
    mention = this.config.mention;

  if (!hashTag && !mention) {
    this.returnError("No Hashtag Or Mention Option Set");
    return false;
  }

  if (hashTag && mention) url += hashTag + " OR @" + mention;
  else if (hashTag) url += hashTag;
  else if (mention)  url += "@" + mention;
  return url + "&result_type=" + config.resultType +
               "&rpp=" + config.tweetsPerRequest + sinceId;
}
