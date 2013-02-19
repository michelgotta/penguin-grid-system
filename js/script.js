$(function() {
	$('.show-grid-toggle').on('click', function(event) {
		event.preventDefault();
		$('.grid').fadeIn();
	});
	
	$('.hide-grid-toggle').on('click', function(event) {
		event.preventDefault();
		$('.grid').fadeOut();
	});
});