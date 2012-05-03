(function($) {
	
	$.fn.ajaxPoll = function(url, interval, decay) {
		updateEl = this;
		intervalTime = null;
		$.ajax({
			url: url,
			statusCode: {
				200: updateObject,
				304: addPollDecay
			}
		});
		updateObject = function() { }
		addPollDecay = function() { }
	}
	
})(jQuery);