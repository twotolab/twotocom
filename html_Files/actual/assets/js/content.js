function isTouchDevice() {
	var DocumentTouch;
    return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}


jQuery(document).ready(function($) {
	
	$('.lazy').Lazy({
		scrollDirection: 'vertical',
		visibleOnly: true,
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
	/* ------------- onScroll-actions------------------*/
	/*------------------------------------------------------*/
   var changeHeaderOn = 50;
   var currentPoxY;
   
   $(window).scroll(function() {
	   currentPoxY =$(this).scrollTop();
	   if (currentPoxY > 0) {
	   	 checkHeaderPos();
    	}
    	console.log('scroll'+currentPoxY);
	});
	function checkHeaderPos(){
		if(currentPoxY > changeHeaderOn){
			$('.header-bg').addClass('header-shrink');	
			var ajshgd=$('header-bg');
			console.log('--------'+ajshgd);
		}
		if(currentPoxY <= 100){
			$('.header-bg').removeClass('header-shrink');	
		}
	}
	/*
    var docElem = document.documentElement,
    	header = document.querySelector( '.header-bg' ),
		didScroll = false,
		changeHeaderOn = 300;
		
	function init() {
		scrollPage();
		window.addEventListener( 'scroll', function(  ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}
	var perc,rounded;
	var $body = $(document.body);
		
    function scrollPage() {
	    var scrolled_val = $body.scrollTop();
	    perc = scrolled_val / $body.height() * 100;
        rounded = Math.round(perc / 10) * 10;
        console.log("% value is " + rounded);
        
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			this.add( header, 'header-shrink' );
			didScroll = false;
		}
		else {
			this.remove( header, 'header-shrink' );
		}
		
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}
	init();
	*/
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
		$('.header').stop(true, true).delay(1000).fadeIn(1200);
		$('.footer').stop(true, true).delay(1000).fadeIn(1200);
		$('.menu-wrapper').stop(true, true).delay(1000).fadeIn(600);
	}
	introDefaultAnimation();
	function introContentnAnimation(){
		$('.content-main').stop(true, true).css({top:"26px",opacity:"0"}).delay(1600).animate({top: "0px",opacity:"1"},"1200");
		$('.project-main').stop(true, true).css({top:"26px",opacity:"0"}).delay(1600).animate({top: "0px",opacity:"1"},"1200");
		
		$('.about-content').stop(true, true).css({top:"26px",opacity:"0"}).delay(1600).animate({top: "0px",opacity:"1"},"1200");
		
		
	}
	introContentnAnimation();
	

});