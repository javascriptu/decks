getTweets : function() {
  var self = this,
    interval = self.config.pollInterval * 1000;
  if (this.initialLoad) {
    this.initialLoad = false; //Flag First as Done
    this.performApiSearch();
  } else {
    setInterval(function () {
      self.performApiSearch();
    }, interval);
  }
}
