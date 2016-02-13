jQuery(document).ready(function($) {
	//	var isLateralNavAnimating = false;
	//open/close lateral navigation
	$('.open-side-navi').on('click', function(event) {
		event.preventDefault();
		if( $('.contextual-navi').hasClass('is-visible') ) {
			$('.contextual-navi').removeClass('is-visible');	
		} else {
			$('.contextual-navi').addClass('is-visible');	
		}
	});
});