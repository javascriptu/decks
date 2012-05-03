var getTemplate = function () {
  return $.get('/templates/resource.html');
};

var getData = function () {
    return $.getJSON('/api/resource/path');
  };

$.when(getData(), getTemplate()).done(function (response, template) {
  //When Both Requests Are Completed
  //Process The Template with Data
  var compiledTemplate = Handlebars.compile(template);
  //Attach The Compiled Template to the DOM
  $("#container").append(compiledTemplate(response));
});
