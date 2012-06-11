$(document).ready(function() {
  var data = {
    mustaches : [
      { fname : 'hulk', lname : 'hogan',       img : "/img/decks/handlebars/stache2.jpg"},
      { fname : 'the',  lname : 'un-escaper', img : "/img/decks/handlebars/stache.jpg"}
    ]
  };
  Handlebars.registerHelper('fullName', function () {
    return this.fname + " " + this.lname;
  });

  var source = $('script[name=staches]').html(),
    template = Handlebars.compile(source);

  $('#stache-container').html(template(data));
});