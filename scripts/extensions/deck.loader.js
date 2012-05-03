(function($, deck, undefined) {

  var defaults = {
    deckDir: 'decks/',
    ext: '.md',
    cssDir: 'css/deck.js/themes/',
    theme: 'neon',
    filter : function(decks) {
      console.log(decks);
      var buffer = '';
      for (var i = 0; i < decks.length; i++) buffer += decks[i];
      return buffer;
    }
  };

  /*
   jQuery.deck('showGoTo')

   Shows the Go To Slide form by adding the class specified by the goto class
   option to the deck container.
   */
  $.fn.extend({
    'loadDeck' : function(passedOptions) {
      var opts = $.extend({}, defaults, passedOptions),
          deferred = $.Deferred();

      if (opts.title) document.title = opts.title;

      $('head').append('<link rel="stylesheet" href="' + opts.cssDir + opts.theme + '.css" >');

      if (!opts.decks) {
        deferred.resolve();
      } else {
        var decks = opts.decks.split(','),
            container = this;
        if (opts.intro !== 'false') decks.unshift('intro');

        var requests = [];
        for (var i = 0; i < decks.length; i++) {
          requests.push($.ajax(opts.deckDir + decks[i] + opts.ext));
        }
        $.when.apply($,requests).then(function(){
          container.empty();
          var deckTexts = [], responses = !(arguments[0] instanceof Array) ? [arguments] : arguments;
          for (var i = 0; i < responses.length; i++) {
            deckTexts.push(responses[i][0])
          }
          var html = opts.filter(deckTexts);
          container.append(html);
          deferred.resolve();
        }).fail(function(){
          deferred.reject('Could not load all decks');
        })
      }
      return deferred;
    }
  });

})(jQuery, 'deck');

