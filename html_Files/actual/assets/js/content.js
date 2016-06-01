function isTouchDevice() {
	var DocumentTouch;
    return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}


jQuery(document).ready(function($) {
	
	$('.lazy').Lazy({
        enableThrottle: true,
        throttle: 200,
        effect: 'fadeIn',
        effectTime:500

    });
	/*------------------------------------------------------*/
	/* ------------- onScrollAnimation------------------*/
	/*------------------------------------------------------*/
	$( window ).scroll(function() {
		    	$('.onScrollAnimation').hide();
    			clearTimeout( $.data( this, "scrollCheck" ) );
    			$.data( this, "scrollCheck", setTimeout(function() {
	    			//$('.onScrollAnimation').clearQueue();
    				$('.onScrollAnimation').stop(true, true).delay(500).fadeIn(300);
    			}, 250) );

    		});
	/*------------------------------------------------------*/
	/* ------------- Touch Device Detection------------------*/
	/*------------------------------------------------------*/
	// Touch Device Detection
	if (isTouchDevice() === true) {
		$('html').addClass('touch');
		//alert("hello with touch");
	} else{
		$('html').addClass('no-touch');
		//alert("hello no-touch");
	}
	/*------------------------------------------------------*/
	/* ------------- breakpoint------------------*/
	/*------------------------------------------------------*/
	// adaptive images
	 $(".breakpoint img").breakpoint();
	
	// 
	/*------------------------------------------------------*/
	/* ------------- click events------------------*/
	/*------------------------------------------------------*/
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
		mainMenuHandler();
	});
	$('.nav-link').on('click', function() {
		//event.preventDefault();
		mainMenuHandler();
	});
	
	function mainMenuHandler(){
		if( $('body').hasClass('right-navi-is-open') ) {
			$( ".secondary-button" ).trigger( "click" );
			}
	
		if( $('body').hasClass('nav-is-visible') ) {
			$('body').removeClass('nav-is-visible');
			//
			$('.menu-close').removeClass('is-visible');
			$('.menu-open').removeClass('is-invisible');
			$('.nav-quote-bg').removeClass('is-visible');
			$('.nav-bg-quote').removeClass('is-visible');
			$('.menu-wrapper').removeClass('menu-out');
			//$('.nav-hightlight').removeClass('is-invisible');
			$('.nav-hightlight').delay(1000).show(0);
		} else{
			$('body').animate({scrollTop:0}, '500');
			$('body').addClass('nav-is-visible');
			//
			$('.menu-open').addClass('is-invisible');
			$('.menu-close').addClass('is-visible');
			$('.nav-quote-bg').addClass('is-visible');
			$('.nav-bg-quote').addClass('is-visible');
			$('.menu-wrapper').addClass('menu-out');
			//$('.nav-hightlight').addClass('is-invisible');
			$('.nav-hightlight').hide(0);	
		}
	}
	
	/*------------------------------------------------------*/
	/* ------------- intro Animations ------------------*/
	/*------------------------------------------------------*/
	function introDefaultAnimation(){
		$('.header').hide();
		$('.footer').hide();
		$('.menu-wrapper').hide();
		$('.header').stop(true, true).fadeIn(1200);
		$('.footer').stop(true, true).fadeIn(1200);
		$('.menu-wrapper').stop(true, true).delay(1000).fadeIn(600);
	}
	introDefaultAnimation();
	function introContentnAnimation(){
		$('.content-main').stop(true, true).css({top:"10px",opacity:"0"}).delay(1200).animate({top: "0px",opacity:"1"},"1200");
		$('.project-main').stop(true, true).css({top:"10px",opacity:"0"}).delay(1200).animate({top: "0px",opacity:"1"},"1200");
		
		$('.about-content').stop(true, true).css({top:"10px",opacity:"0"}).delay(1200).animate({top: "0px",opacity:"1"},"1200");
		
		
	}
	introContentnAnimation();
	

});