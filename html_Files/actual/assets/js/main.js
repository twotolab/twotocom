function isTouchDevice() {
	var DocumentTouch;
    return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}


jQuery(document).ready(function($) {
	
	$( window ).scroll(function() {
		    	$('.onScrollAnimation').hide();
    			clearTimeout( $.data( this, "scrollCheck" ) );
    			$.data( this, "scrollCheck", setTimeout(function() {
	    			//$('.onScrollAnimation').clearQueue();
    				$('.onScrollAnimation').stop(true, true).delay(1000).fadeIn(300);
    			}, 250) );

    		});
	// Touch Device Detection
	if (isTouchDevice() === true) {
		$('html').addClass('touch');
		//alert("hello with touch");
	} else{
		$('html').addClass('no-touch');
		//alert("hello no-touch");
	}
	// adaptive images
	 $(".breakpoint img").breakpoint();
	
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
			//
			$('.menu-close').removeClass('is-visible');
			$('.menu-open').removeClass('is-invisible');
			$('.nav-quote-bg').removeClass('is-visible');
			$('.nav-bg-quote').removeClass('is-visible');
			$('.menu-wrapper').removeClass('menu-out');
			$('.nav-hightlight').removeClass('is-invisible');
		} else{
			$('body').animate({scrollTop:0}, '500');
			$('body').addClass('nav-is-visible');
			//
			$('.menu-open').addClass('is-invisible');
			$('.menu-close').addClass('is-visible');
			$('.nav-quote-bg').addClass('is-visible');
			$('.nav-bg-quote').addClass('is-visible');
			$('.menu-wrapper').addClass('menu-out');
			$('.nav-hightlight').addClass('is-invisible');
		}
	});
	$('.nav-hightlight-element.nav-one').on('mouseenter mouseleave', function(event) {
		event.preventDefault();
		if( $('.Site-highlight-one').hasClass('loading') ) {
			$('.Site-highlight-one').removeClass('loading');
			$('.Site-highlight-one .Site-highlight-left img').hide().stop(true, true).delay(900).fadeIn(600);
			$('.Site-highlight-one .Site-highlight-right .headline p').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1200).animate({marginLeft: "0px",opacity:"1"},"300");
			$('.Site-highlight-one .Site-highlight-right .headline h1').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1400).animate({marginLeft: "0px",opacity:"1"},"300");
			$('.Site-highlight-one .Site-highlight-right .headline a').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1600).animate({marginLeft: "0px",opacity:"1"},"300");
			//
			$('.Site-highlight-two').addClass('loading');
			$('.Site-highlight-three').addClass('loading');
		}
	});
	$('.nav-hightlight-element.nav-two').on('mouseenter mouseleave', function(event) {
		event.preventDefault();
		if( $('.Site-highlight-two').hasClass('loading') ) {
			$('.Site-highlight-two').removeClass('loading');
			$('.Site-highlight-two .Site-highlight-left img').hide().stop(true, true).delay(900).fadeIn(600);
			$('.Site-highlight-two .Site-highlight-right .headline p').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1200).animate({marginLeft: "0px",opacity:"1"},"300");
			$('.Site-highlight-two .Site-highlight-right .headline h1').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1400).animate({marginLeft: "0px",opacity:"1"},"300");
			$('.Site-highlight-two .Site-highlight-right .headline a').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1600).animate({marginLeft: "0px",opacity:"1"},"300");
			//
			$('.Site-highlight-one').addClass('loading');
			$('.Site-highlight-three').addClass('loading');
		}
	});
	$('.nav-hightlight-element.nav-three').on('mouseenter mouseleave', function(event) {
		event.preventDefault();
		if( $('.Site-highlight-three').hasClass('loading') ) {
			$('.Site-highlight-three').removeClass('loading');
			$('.Site-highlight-three .Site-highlight-left img').hide().stop(true, true).delay(900).fadeIn(600);
			$('.Site-highlight-three .Site-highlight-right .headline p').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1200).animate({marginLeft: "0px",opacity:"1"},"300");
			$('.Site-highlight-three .Site-highlight-right .headline h1').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1400).animate({marginLeft: "0px",opacity:"1"},"300");
			$('.Site-highlight-three .Site-highlight-right .headline a').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1600).animate({marginLeft: "0px",opacity:"1"},"300");
			$('.Site-highlight-one').addClass('loading');
			$('.Site-highlight-two').addClass('loading');
		}
	});
	$('.nav-hightlight-element.nav-one').on('click', function(event) {
		event.preventDefault();
		if( $('.Site-highlight-one').hasClass('loading') ) {
			$('.Site-highlight-one').removeClass('loading');
			//
			$('.Site-highlight-two').addClass('loading');
			$('.Site-highlight-three').addClass('loading');
		}
	});
	$('.nav-hightlight-element.nav-two').on('click', function(event) {
		event.preventDefault();
		if( $('.Site-highlight-two').hasClass('loading') ) {
			$('.Site-highlight-two').removeClass('loading');
			//
			$('.Site-highlight-one').addClass('loading');
			$('.Site-highlight-three').addClass('loading');
		}
	});
	$('.nav-hightlight-element.nav-three').on('click', function(event) {
		event.preventDefault();
		if( $('.Site-highlight-three').hasClass('loading') ) {
			$('.Site-highlight-three').removeClass('loading');
			//
			$('.Site-highlight-one').addClass('loading');
			$('.Site-highlight-two').addClass('loading');
		}
	});

	/*
		var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
 
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).text( "Mine is " + val + "." );
 
  // Will stop running after "three"
  return ( val !== "three" );
});
 
jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});





		*/
	/* test over effect
	$('.menu-button').on('mouseenter mouseleave', function(event) {
		
		event.preventDefault();
		if( $('.main-content').hasClass('content-transparent') ) {
			$('.main-content').removeClass('content-transparent');
		}
		else{
			$('.main-content').addClass('content-transparent');
		}
	});
	*/
	/*------------------------------------------------------*/
	/* ------------- update Bg hightlight ------------------*/
	/*------------------------------------------------------*/
	var _arr = [ "one", "two", "three"];
	var _countLength = 3;
	var _defaultWidthbg;
	var _defaultheightbg;
	
	//$('.nav-hightlight-element .activ h4').css({width:"10%"});
	function animateBgHightlight(){
		_defaultWidthbg = $('.nav-hightlight-element .activ h4').width()+20;
		_defaultheightbg = $('.nav-hightlight-element .activ h4').height();
	
		if ($('.nav-hightlight-element .activ .animatedBG').width()===0){
			$('.nav-hightlight-element .activ .animatedBG').width(_defaultWidthbg+"px");
			$('.nav-hightlight-element .activ .animatedBG').height(_defaultheightbg+"px");
		}
		//$('.nav-hightlight-element .activ h4').width(scale + 'px');
		$('.nav-hightlight-element .activ .animatedBG').stop(true, true).animate({width:"0px"},_countLength*1000);
	}
	
	/*------------------------------------------------------*/
	/* ------------- counter hightlight ------------------*/
	/*------------------------------------------------------*/

	
	var _actualHighlight= 0;
	var _lastHighlight=0;
	var _myCounter;
	
	function updateSelectionHighlight(){
		var lastHighlightTarget = ".nav-"+_arr[_lastHighlight]+" a";
		var actualHighlightTarget = '.nav-'+_arr[_actualHighlight]+' a';
		$(lastHighlightTarget).removeClass('activ');
		$(actualHighlightTarget).addClass('activ');
	}
	
	function updateHighlight(){
		_lastHighlight = _actualHighlight;
		if(_actualHighlight === _arr.length-1){
			_actualHighlight =0;
		} else{
			_actualHighlight +=1;
		}
		updateSelectionHighlight();
		restartCounter(_myCounter,_countLength);
	}
	
	function Countdown(options) {
	  var timer,
	  instance = this,
	  seconds = options.seconds || 10,
	  updateStatus = options.onUpdateStatus || function () {},
	  counterEnd = options.onCounterEnd || function () {};
	
	  function decrementCounter() {
	    updateStatus(seconds);
	    if (seconds === 0) {
	      counterEnd();
	      instance.stop();
	    }
	    seconds--;
	  }
	
	  this.start = function () {
	    clearInterval(timer);
	    //document.getElementById('timerTest').innerHTML = "restart";
	    timer = 0;
	    seconds = options.seconds;
	    timer = setInterval(decrementCounter, 1000);
	  };
	
	  this.stop = function () {
	    clearInterval(timer);
	  };
	}

	
	function restartCounter(myCounter,countLength){
		myCounter = new Countdown({  
		    seconds:countLength,  // number of seconds to count down
		    onUpdateStatus: function(sec){},// document.getElementById('timerTest').innerHTML ="actualHighlight: "+_actualHighlight+" :"+ sec+" second(s)";}, // callback for each second
		    onCounterEnd: function(){updateHighlight();}// final action
		});
		animateBgHightlight();
		myCounter.start();
	}
	function stopCounter(myCounter){
		myCounter.stop();
	}
	restartCounter(_myCounter,_countLength);
	
});