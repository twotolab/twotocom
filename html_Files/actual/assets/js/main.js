function isTouchDevice() {
    return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}
jQuery(document).ready(function($) {
	
	// Touch Device Detection
	if (isTouchDevice() === true) {
		$('html').addClass('touch');
		//alert("hello with touch");
	} else{
		$('html').addClass('no-touch');
		//alert("hello no-touch");
	}
	// click events
	$('.secondary-button').on('click', function(event) {
		event.preventDefault();
		if( $('body').hasClass('right-navi-is-open') ) {
			$('body').removeClass('right-navi-is-open');				
		} else {
			$('body').addClass('right-navi-is-open');	
		}
	});
	
	$('.menu-button').on('click', function(event) {
		event.preventDefault();
		if( $('body').hasClass('right-navi-is-open') ) {
			$( ".secondary-button" ).trigger( "click" );
			}
	
		if( $('body').hasClass('nav-is-visible') ) {
			$('body').removeClass('nav-is-visible');
			$('.menu-close').removeClass('is-visible');
			$('.menu-open').removeClass('is-invisible');
			$('.nav-quote-bg').removeClass('is-visible');
			$('.nav-bg-quote').removeClass('is-visible');
			$('.menu-wrapper').removeClass('menu-out');
		} else{
			$('body').animate({scrollTop:0}, '500');
			$('body').addClass('nav-is-visible');
			
			$('.menu-open').addClass('is-invisible');
			$('.menu-close').addClass('is-visible');
			$('.nav-quote-bg').addClass('is-visible');
			$('.nav-bg-quote').addClass('is-visible');
			$('.menu-wrapper').addClass('menu-out');
		}
	});
	
});