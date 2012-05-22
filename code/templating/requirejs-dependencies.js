define(
  [
    'underscore',
    'text!template.tmpl'
  ],
  function(_, templateText) {
    var myTemplate = _.template(templateText);

    var templateData = {
      name  : "Bo Jackson",
      knows : ['baseball','football','everything']
    };

    var html = myTemplate(templateData);
  }
)
