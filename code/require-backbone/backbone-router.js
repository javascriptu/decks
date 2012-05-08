define(['underscore', 'backbone', 'modules/layout'],
  function (_, Backbone, layout) {
    var Router = Backbone.Router.extend({
      routes : {
        "!/"         : "main",
        "!/blog/:id" : "single",
        '*path'      : 'defaultRoute'
      },

      single : function (id) {
        require(['views/blog', 'collections/blogs'],
          function (BlogView, Coll) {
            var options = {type : "single", model : Coll.get(id)};
            var blog = new BlogView(options);
            layout.showMainView(blog);
          });
      }
    });
    return Router;
  });
