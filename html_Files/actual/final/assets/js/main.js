jQuery(document).ready(function($) {
	//	var isLateralNavAnimating = false;
	//open/close lateral navigation
	$('.menu-button').on('click', function(event) {
		event.preventDefault();
		if( $('.nav-main').hasClass('is-visible') ) {
			$('.nav-main').removeClass('is-visible');
			$('.menu-close').removeClass('is-visible');
			$('.menu-open').removeClass('is-invisible');
			$('.nav-close').removeClass('is-visible');
			$('.quote-bg').removeClass('is-visible');
			$('.nav-bg-quote').removeClass('is-visible');
			$('.menu-wrapper').removeClass('menu-out');
			//$('.grid-content').removeClass('hide-content');
		} else{
			$('.nav-main').addClass('is-visible');
			$('.menu-open').addClass('is-invisible');
			$('.menu-close').addClass('is-visible');
			$('.nav-close').addClass('is-visible');
			$('.quote-bg').addClass('is-visible');
			$('.nav-bg-quote').addClass('is-visible');
			$('.menu-wrapper').addClass('menu-out');
			//$('.grid-content').addClass('hide-content');
		}
	});
});