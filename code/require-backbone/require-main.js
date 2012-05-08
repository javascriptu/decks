require.config({
  paths : {
    jquery       : 'vendor/jquery/jquery-1.7.2',
    backbone     : 'vendor/backbone/backbone-0.9.2-amd',
    underscore   : 'vendor/underscore/underscore-1.3.2',
    text         : 'vendor/require/text-1.0.8',
    localstorage : "vendor/backbone/localstorage"
  }
});

require(['modules/application'], function (app) {
  app.initialize();
});
