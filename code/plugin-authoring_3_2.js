(function($) {
	
	$.fn.ajaxPoll = function(url, interval, decay) {
		var updateEl = this;
		var intervalTime = null;
		$.ajax({
			url: pollU,
			statusCode: {
				200: updateObject,
				304: addPollDecay
			}
		});
		var updateObject = function() { }
		var addPollDecay = function() { }
	}
	
})(jQuery);