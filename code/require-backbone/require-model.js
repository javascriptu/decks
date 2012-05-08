define(['underscore', 'backbone'],
  function (_, Backbone) {
    var BlogModel = Backbone.Model.extend({

      defaults : {
        title   : '',
        content : ''
      },

      validate : function () {
        ...
      },

      clear    : function () {
        this.destroy();
      }
    });
    return BlogModel;
  });
