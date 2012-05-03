;(function ($, window, document, undefined) {
  var Plugin = function (el, options) {
    this.el = el;
    this.$el = $(el);
    this.options = options;
  };

  ...

  $.fn.tweetHash = function (options) {
    return this.each(function () {
      new Plugin(this, options).init();
    });
  };
})(jQuery, window, document);
