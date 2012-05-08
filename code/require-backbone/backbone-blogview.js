define(['jquery','underscore','backbone','text!templates/blog.html'],
  function ($, _, Backbone, blogTemplate) {
    var BlogView = Backbone.View.extend({

      className : "span3", //Using Twitter Bootstrap Classes
      template  : _.template(blogTemplate),

      events : {
        "click span.blog-remove"       : "clear",
        "click #blog-list .blog-title" : "singleView"
      },

      initialize : function (options) {
        _.bindAll(this, 'render', 'remove');
        this.model.bind('change', this.render);
        this.model.bind('destroy', this.remove);
      },

      singleView : function (e) {
        var blogId = this.model.attributes.id;
        Backbone.history.navigate("!/blog/" + blogId, {trigger : true});
      },

      render : function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
      },

      clear : function (e) {
        e.preventDefault();
        this.model.clear();
      }
    });
    return BlogView;
  });
