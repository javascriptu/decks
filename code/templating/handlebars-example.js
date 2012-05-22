$(document).ready(function() {
  var data = {
    title     : "Other Handlebar Implementations",
    mustaches : [
      { fname : 'the',  lname : 'non-encoder', img : "/img/decks/handlebars/stache.jpg"},
      { fname : 'hulk', lname : 'hogan',       img : "/img/decks/handlebars/stache2.jpg"}
    ]
  };
  Handlebars.registerHelper('fullName', function () {
    return this.fname + " " + this.lname;
  });

  var source = $('script[name=staches]').html(),
    template = Handlebars.compile(source);

  $('#stache-container').html(template(data));
});