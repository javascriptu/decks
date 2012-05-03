;(function ( $, window, document, undefined ) {

  $.fn.pluginName = function ( options ) {

    options = $.extend({}, $.fn.pluginName.options, options);

    return this.each(function () {

      var elem = $(this);

    });
  };

  $.fn.pluginName.options = {

      key: "value",
      myMethod: function ( elem, param ) {

      }
  };

})( jQuery, window, document );
