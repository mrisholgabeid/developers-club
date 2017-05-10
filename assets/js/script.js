jQuery(document).ready(function() {
	var mainHeight = jQuery(window).height() - jQuery("header").outerHeight();

	jQuery("main").height(mainHeight);

});