/*
* Don't read too much of this yet, it's ugly.
*
* We're hacking around trying to find the best
* fit for how we do slides. We'll formalize and
* open source everything when we can.
*
* */
var params = {
  cache : null,
  get : function get(name) {
    if (!this.cache) this.parse();
    return this.cache[name];
  },
  parse : function parse(string) {
    string = string || window.location.search;
    if (string.substring(0,1) === '?') string = string.substring(1);
    string = string.replace(/\+/,' ');

    var regex = /([^&;=]+)=?([^&;]*)/g;

    var match,params = {};

    while (match = regex.exec(string)) {
      var name  = decodeURIComponent(match[1]),
        value = decodeURIComponent(match[2]);
      params[name] = params[name] === undefined ? value : (params[name] instanceof Array ? params[name].push(value) : params[name] = [params[name],value]);
    }
    return this.cache = params;
  }
};

function MarkdownFilter(decks) {
  var converter = new Markdown.Converter(),buffer = '';
  for (var i = 0; i < decks.length; i++) {
    var slides = decks[i].split(/\s*---\s*/mg);
    for (var j = 0; j < slides.length; j++) {
      if (slides[j].match(/^\s*$/)) continue;
      buffer += '<section class="slide">' + converter.makeHtml(slides[j]) + '</section>';
    }
  }
  return buffer;
}

$(function(){
  if (params.get('dev')) $('.deck-container').addClass('dev');

  $('.deck-container').loadDeck({
    deckDir : params.get('deckDir') || './decks/',
    cssDir  : params.get('cssDir')  || './css/',
    theme   : params.get('theme')   || 'javascriptU',
    ext     : params.get('ext') || '.md',
    decks   : params.get('decks')   || '',
    intro   : params.get('intro')   || true,
    title   : params.get('title'),
    filter  : MarkdownFilter
  }).done(function(){
    highlightInit().then(function(){
      setupSocial();
      deck_CodeMirror();
      $.deck('.slide');
    });
  });
});


function highlightInit() {
  var baseDir = './code/';
  var deferred = $.Deferred();
  var requests = [];
  var numComplete = 0;
  $('code[src]').each(function(i,el){
    requests.push($.ajax({
      url : baseDir + $(el).attr('src'),
      context : $(el),
      dataType: 'text'
    }).then(addSource).fail(retrieveFail).always(handleDeferred));
  });

  if (!requests.length) deferred.resolve();

  return deferred;

  function handleDeferred() { if (++numComplete >= requests.length) deferred.resolve(); }
  function addSource(text)  {
    if (this.attr('lines')) {
      var textParts = text.split("\n");
      var lines = this.attr('lines').split('-');
      if (!lines[1]) {
        text = textParts.slice(lines[0] - 1, lines[0]).join("\n");
      } else {
        text = textParts.slice(lines[0] - 1, lines[1]).join("\n");
      }
    }
    this.html(text)
  }
  function retrieveFail()   { this.html("There was an error loading:" + this.attr('src')) }
}

function setupSocial() {
  $('#shareme').sharrre({
    share: {
      googlePlus: true,
      facebook: true,
      twitter: true,
      digg: true,
      linkedin: true
    },
    buttons: {
      googlePlus: {size: 'tall'},
      facebook: {layout: 'box_count'},
      twitter: {count: 'vertical'},
      digg: {type: 'DiggMedium'},
      linkedin: {counter: 'top'}
    },
    enableHover: false,
    enableCounter: false,
    enableTracking: true
  });
}

