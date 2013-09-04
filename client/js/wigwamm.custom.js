$(document).ready(function() {
	$(window).resize(function() {
		var maxHeight = Math.max($(window).height(), $('#invite > .content-holder').outerHeight(true));
		
		$('#invite').height(maxHeight);
		$('#info').css('margin-top', maxHeight);
	});
});
