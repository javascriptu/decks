define(['underscore', 'backbone', 'localstorage', 'models/blog'],
  function (_, Backbone, Store, Blog) {

    var BlogsCollection = Backbone.Collection.extend({

      model : Blog,

      localStorage : new Store("Blogs"),

      //compare on created timestamp
      comparator   : function (blog) {
        return blog.get('created');
      }

    });
    return new BlogsCollection;
  });
