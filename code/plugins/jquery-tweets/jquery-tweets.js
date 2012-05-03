/*jshint plusplus:false, lateDef:false */
/*global jQuery, document, window, setInterval, setTimeout */

/*
 * jQuery Tweet Hash Tag Poll
 * Licensed under the MIT license
 */

// ; - safety against script concatenation
// window / document - small perf. improvement, helps min if referenced
// undefined - mutable in ECMAScript 3 ensure undefined
;(function ($, window, document, undefined) {
  "use strict";

  // plugin constructor
  var Plugin = function (el, options) {
    this.el = el;
    this.$el = $(el);
    this.options = options;
  };

  // the plugin prototype
  Plugin.prototype = {
    defaults : {
      pollInterval     : 60, //Seconds
      hashTag          : false, //# lookup
      mention          : false, //@ lookup
      resultType       : "recent",
      tweetsPerRequest : 10,
      lang             : "en" //ISO 639-1
    },

    init : function () {
      this.config = $.extend({}, this.defaults, this.options);
      this.initialLoad = true;
      this.tweets = [];
      this.maxId = 0;
      //Get Some Tweets
      this.getTweets();
      return this;
    },
    //print error on dom el
    returnError : function(error) {
      this.$el.html("#Error - " + error);
    },

    //Set The Max Id For Future Queries
    setMaxId : function (id) {
      this.maxId = id;
    },

    handleResults : function (tweets) {
      var len = tweets.length,
        i = 0;
      if (len && len > 0) {
        for (i; i < len; i++) {
          this.tweets.push(tweets[i]);
          //Add Tweet To Dom
          this.buildTweet(tweets[i]);
        }
      }
    },

    //poll for tweets
    getTweets : function () {
      var self = this,
        interval = self.config.pollInterval * 1000;
      if (this.initialLoad) {
        //Flag First as Done
        this.initialLoad = false;
        this.performApiSearch();
      }
      setInterval(function () {
        self.performApiSearch();
      }, interval);
    },

    performApiSearch : function () {
      var self = this,
        url = this.constructTwitterApiUrl();
      //Ajax promise
      var tweets = $.ajax({
        url      : url,
        dataType : "jsonp"
      });

      tweets.done(function (response) {
        //Set The Since ID
        self.setMaxId(response.max_id_str);
        self.handleResults(response.results.reverse());
      });
    },

    constructTwitterApiUrl : function() {
      var config = this.config,
        url = "http://search.twitter.com/search.json?q=",
        sinceId = this.maxId === 0 ? '' : "&since_id=" + this.maxId,
        hashTag = this.config.hashTag,
        mention = this.config.mention,
        lang = "&lang=" + this.config.lang;

      if (!hashTag && !mention) {
        this.returnError("No Hashtag Or Mention Option Set");
        return false;
      }

      if (hashTag && mention) url += hashTag + " OR @" + mention;
      else if (hashTag) url += hashTag;
      else if (mention)  url += "@" + mention;

      return url + "&result_type=" + config.resultType + "&rpp=" + config.tweetsPerRequest + sinceId + lang;
    },

    buildTweet : function (tweet) {
      //Format and add links / Hashes
      var formattedTweet = this.format(tweet.text),
        tweetText = formattedTweet,
        idStr = tweet.id_str,
        postAuthor = tweet.from_user,
        postAuthorImg = tweet.profile_image_url,
        ts = tweet.created_at,
        created = ts.substr(0,ts.indexOf(" +")),
        strEl = "<li class='tweet new'>" +
          "<a href='http://www.twitter.com/" + postAuthor + "' target='_blank'>"+
          "<img src='" + postAuthorImg + "' width='48' height='48' />" +
          "</a>" +
          "<div class='content'>" + tweetText + "</br>" +
          "<a href='http://www.twitter.com/" + postAuthor + "/status/" + idStr + "' class='view' target='_blank'>" + created + "</a>" +
          "</div>" +
          "</li>";
      //Call The Add Method
      this.add(strEl);
    },

    format : function(tweet) {
      //replace @ with user link
      tweet = tweet.replace(/[@]+[A-Za-z0-9-_]+/g, function (tweet) {
        var name = tweet.replace("@", ""),
          link = "http://twitter.com/" ;
        return tweet.link(link + name);
      });
      //replace hash with hash link
      tweet = tweet.replace(/[#]+[A-Za-z0-9-_]+/g, function (tweet) {
        var hash = tweet.replace("#","%23");
        return tweet.link("http://search.twitter.com/search?q="+hash);
      });
      return tweet;
    },

    add : function (tweet) {
      var $tweet = $(tweet);
      //Prepend The Tweet To Container
      this.$el.prepend($tweet);
      //Fade In Tweet
      $tweet.fadeIn("slow", function () {
        $(this).delay("1000").removeClass('new');
      });
    }
  };

  $.fn.tweetHash = function (options) {
    return this.each(function () {
      new Plugin(this, options).init();
    });
  };

})(jQuery, window, document);
