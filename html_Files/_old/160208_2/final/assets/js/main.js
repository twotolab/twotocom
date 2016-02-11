jQuery(document).ready(function($) {
	//	var isLateralNavAnimating = false;
	//open/close lateral navigation
	$('.menuHandler').on('click', function(event) {
		event.preventDefault();
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible');
			$('.navi-close').removeClass('is-visible');
			$('.navi-menu').removeClass('is-invisible');
		} else{
			$('.cd-primary-nav').addClass('is-visible');
			$('.navi-menu').addClass('is-invisible');
			$('.navi-close').addClass('is-visible');
		}
	});
});