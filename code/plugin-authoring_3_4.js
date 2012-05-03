define(['jquery'], function($) {
	
	$.fn.ajaxPoll = function( options ) {
		var updateEl = this;
		var intervalTime = null;
		
		var settings = $.extend({
			url: "/",
			interval: 5000,
			decay: 2,
		}, options);
		
		$.ajax({
			url: settings.url,
			statusCode: {
				200: updateObject,
				304: addPollDecay
			}
		});
		var updateObject = function() { }
		var addPollDecay = function() { }
	}
	
});