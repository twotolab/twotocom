jQuery(document).ready(function($) {
	//	var isLateralNavAnimating = false;
	//open/close lateral navigation
	$('.menuHandler').on('click', function(event) {
		event.preventDefault();
		if( $('.nav').hasClass('is-visible') ) {
			$('.nav').removeClass('is-visible');
			$('.navi-close').removeClass('is-visible');
			$('.navi-menu').removeClass('is-invisible');
			$('.navi-logo').removeClass('is-visible');
			$('.MenuWrapper').removeClass('menu-out');
			$('.grid-content').removeClass('hide-content');
		} else{
			$('.nav').addClass('is-visible');
			$('.navi-menu').addClass('is-invisible');
			$('.navi-close').addClass('is-visible');
			$('.navi-logo').addClass('is-visible');
			$('.MenuWrapper').addClass('menu-out');
			$('.grid-content').addClass('hide-content');
		}
	});
});