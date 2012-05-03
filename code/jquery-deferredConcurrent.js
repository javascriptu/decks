$.when( $.ajax("/path/to/resource/1"), $.ajax("/path/to/resource/2"))
  .done(function(r1,  r2){
    //The Responses are Returned When Both Ajax Requests Have Completed Successfully
    render(arguments);
  })
  .fail(function() {
    //If at least one of the requests failed
    render(false);
  });
