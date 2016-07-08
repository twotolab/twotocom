function isTouchDevice() {
	var DocumentTouch;
    return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}
	$(function() {
        $('button.start').click(function() {
            $('img.latelazy').lazy({
                bind: "event"
            });
        });
        
        $('button.loadAll').click(function() {
            $('.latelazy').lazy({
                bind: "event",
                delay: 0
            });
        });
    });
jQuery(document).ready(function($) {
	
	$('.lazy').Lazy({
		scrollDirection: 'vertical',
		visibleOnly: true,
        enableThrottle: true,
        throttle: 200,
        effect: 'fadeIn',
        effectTime:100

    });
    
	/*------------------------------------------------------*/
	/* ------------- onScrollAnimation------------------*/
	/*------------------------------------------------------*/
	
	$( window ).scroll(function() {
				if(!$('body').hasClass('nav-is-visible') ) {
					$('.onScrollAnimation').hide();
	    			clearTimeout( $.data( this, "scrollCheck" ) );
	    			$.data( this, "scrollCheck", setTimeout(function() {
		    			//$('.onScrollAnimation').clearQueue();
	    				$('.onScrollAnimation').stop(true, true).delay(500).fadeIn(300);
	    			}, 250) );
				}
    		});
    
    /*------------------------------------------------------*/
	/* ------------- onScroll-actions------------------*/
	/*------------------------------------------------------*/
   //var changeHeader = 50;
   var currentPoxY;
   var firstVisit = true;
   var headerContainerHeight;
   //var posYHeader;
   var headerStatusOpen=true;
   
   
   $(window).scroll(function() {
	   currentPoxY =$(this).scrollTop();
	   //if (currentPoxY > 0) {
	   	 
	   	 if(firstVisit){
	    	$('body, html').scrollTop(0,0);
	    	
	    	$("html, body").animate({
		        scrollTop: 0
		    }, 500);  
	    	firstVisit=false;
	    	//console.log('scroll'+currentPoxY);	
    		}
    	//}
    	checkHeaderPos();
	});
	
	function checkHeaderPos(){
		//posYHeader=  parseInt($('.header-bg').css('top'),10) || 0 ;
		/*
		if(currentPoxY > changeHeader){
			if(headerStatusOpen){
				$('.header-bg').css({"transition": "all 1.6s ease-out"});	
				$('.header-bg').css({"transform": "translate3d( 0px, " + -headerContainerHeight + "px, 0px)"});	
				$('.header-bg').css({"transform": "translate3d(0px, -100px,0px)"});	
				//console.log('close it--------'+currentPoxY);
			}
			headerStatusOpen = false;
			
		}
		if(currentPoxY <= changeHeader){
			if(!headerStatusOpen){
				$('.header-bg').css({"transition": "all 0.6s ease-out"});
				$('.header-bg').css({"transform": "translate3d(0px,0px, 0px)"});	
				//console.log('open it--------'+currentPoxY);	
			}
			headerStatusOpen = true;
			
		}
		*/
		//console.log('scroll'+currentPoxY);	
		if(currentPoxY > headerContainerHeight){
			if(headerStatusOpen){
				//$('.header-bg').css({"transition": "all 0.3s ease-out"});
				$('.header-bg').css({"transition": "none"});
				$('.header-bg').stop(true, true).delay(600).css({"opacity": "0"});

				if( $('body').hasClass('header-with-bg') ) {
					$('body').removeClass('header-with-bg');				
				} else {
					$('body').addClass('header-with-bg');	
				}
				headerStatusOpen = false;
				console.log('headerStatusOpen 1:' +headerStatusOpen);
				
			}
				
		}else if(currentPoxY <= headerContainerHeight){
			
			if(!headerStatusOpen){
				
				$('.header-bg').css({"transition": "all 1.6s ease-out"});
				$('.header-bg').css({"opacity": "1"});
			
				if( $('body').hasClass('header-with-bg') ) {
					$('body').removeClass('header-with-bg');				
				} else {
					$('body').addClass('header-with-bg');	
				}
					
				headerStatusOpen = true;
				console.log('headerStatusOpen 2:' +headerStatusOpen);
		} 	}
	}
	var added = 105;//104;
	function updateHeaderHeight(){
		headerContainerHeight = $('.header-inside').height()+ added;
		$('.header-bg').css({height:headerContainerHeight});
	}
	updateHeaderHeight();
	$(window).resize(function() {
		updateHeaderHeight();
	});
	//checkHeaderPos();
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
			$('html').removeClass('nav-is-visible');
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
			$('html').addClass('nav-is-visible');
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
	//$('.grid-four-wrapper.-zoomUp').on('click', function(event) {
	$('.zoom-button-wrapper').on('click', function(event) {
		event.preventDefault();
		if( $(this).parent().hasClass('zoomUpthumbs') ) {
			$(this).parent().removeClass('zoomUpthumbs');				
		} else {
			$(this).parent().addClass('zoomUpthumbs');	
            $('img.latelazy').lazy({
                bind: "event"
            });
		}
	});
	/*------------------------------------------------------*/
	/* ------------- intro Animations ------------------*/
	/*------------------------------------------------------*/
	$('.header').hide();
	$('.footer').hide();
	$('.menu-wrapper').hide();
	$('.second-menu-wrapper').hide();
	
	function introDefaultAnimation(){
		$('.header').stop(true, true).delay(600).fadeIn(600);
		$('.footer').stop(true, true).delay(1200).fadeIn(600);
		$('.menu-wrapper').stop(true, true).delay(1200).fadeIn(600);
		$('.second-menu-wrapper').stop(true, true).delay(1200).fadeIn(600);
	}

	function introContentnAnimation(){
		//$('.content-main').stop(true, true).css({top:"52px",opacity:"0"}).delay(600).animate({top: "0px",opacity:"1"},"1200");
		$('.content-main').stop(true, true).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200");
		//$('.project-main').stop(true, true).css({top:"52px",opacity:"0"}).delay(600).animate({top: "0px",opacity:"1"},"1200");
		$('.project-main').stop(true, true).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200");
		
		//$('.about-content').stop(true, true).css({top:"52px",opacity:"0"}).delay(600).animate({top: "0px",opacity:"1"},"1200");
		$('.about-content').stop(true, true).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200");
		$('.contact-content').stop(true, true).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200");
		$('.header-bg').addClass('-zoomup');
		
		
	}
	
	Pace.on('hide', function(){
      //console.log('done');
      $('.hideDuringLoading').css({visibility:"visible",opacity:"1"});
      introDefaultAnimation();
      introContentnAnimation();
      
      AOS.init({
				disable: 'mobile',
				easing: 'ease-out',
				duration: 1000
			});
    });
});