define(["underscore", "backbone", "modules/router"],
  function (_, Backbone, Router) {
    function initialize() {
      ...

      //Instantiate Router
      var router = new Router();

      //Start Monitoring Hashchange events and Dispatching Routes.
      Backbone.history.start();
    }
    return {
      initialize : initialize
    };
  });
