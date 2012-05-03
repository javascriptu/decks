// will work
function someCallback() { }
$("#element").bind('click mouseover', someCallback);
$("#element").unbind('mouseover', someCallback);

// won't work
$("#element").bind('click mouseover', function() {});
$("#element").unbind('mouseover', function() {});
