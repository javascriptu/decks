(function () {
  var cache = {}; //Cache Object To Save ajax Requests
  getHtmlTemplate = function (template) {
    var extension = ".html";
    return cache.template  || $.ajax({
      url     : '/path/to/template/' + template + extension,
      success : function (response) {
        cache.template = response;
      }
    });
  };
})();

getHtmlTemplate("login");
