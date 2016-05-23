function isTouchDevice() {
	var DocumentTouch;
    return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}


jQuery(document).ready(function($) {
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
		if( $('body').hasClass('right-navi-is-open') ) {
			$( ".secondary-button" ).trigger( "click" );
			}
	
		if( $('body').hasClass('nav-is-visible')) {
			$('body').removeClass('nav-is-visible');
			//
			$('.menu-close').removeClass('is-visible');
			$('.menu-open').removeClass('is-invisible');
			$('.nav-quote-bg').removeClass('is-visible');
			$('.nav-bg-quote').removeClass('is-visible');
			$('.menu-wrapper').removeClass('menu-out');
			//$('.nav-hightlight').removeClass('is-invisible');
			$('.nav-hightlight').delay(1000).fadeIn(1000);
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
	});
	/*------------------------------------------------------*/
	/* ------------- update Bg hightlight ------------------*/
	/*------------------------------------------------------*/
	var _arr = [ "one", "two", "three"];
	var _countLengthInSeconds = 10;
	var _defaultWidthbg;
	var _defaultheightbg;
	
	function updateHighlightSiteBg(){
		
		var eltArray= [];
		eltArray  =_arr.slice(0);
		var actualSelection =eltArray[_actualHighlight];
		eltArray.splice(_actualHighlight, 1);
		var target ='.Site-highlight-'+actualSelection;
		//document.getElementById('header-info').innerHTML ="actualSelection: "+actualSelection+ "// restArray: "+eltArray+"// third: "+eltArray[1];
		if( $(target).hasClass('loading') ) {
			$(target).removeClass('loading');
			$(target+' .Site-highlight-left img').hide().stop(true, true).delay(900).fadeIn(600);
			$(target+'  .Site-highlight-right .headline p').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1200).animate({marginLeft: "0px",opacity:"1"},"300");
			$(target+'  .Site-highlight-right .headline h1').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1400).animate({marginLeft: "0px",opacity:"1"},"300");
			$(target+' .Site-highlight-right .headline a').stop(true, true).css({marginLeft:"-10px",opacity:"0"}).delay(1600).animate({marginLeft: "0px",opacity:"1"},"300");
			//
			$('.Site-highlight-'+eltArray[0]).addClass('loading');
			$('.Site-highlight-'+eltArray[1]).addClass('loading');
		}
	}
	function updateHightlightcolors(){

		var colorSelect = _arr[_actualHighlight];
		var lastcolorSelect = _arr[_lastHighlight];
		//
		$('.menu-button .first-background').removeClass(lastcolorSelect+'_highlight_color-background');
		$('.nav-hover-bg-effect').removeClass(lastcolorSelect+'_highlight_color-background');
		$('.menu-button .first-background').addClass(colorSelect+'_highlight_color-background');
		$('.nav-hover-bg-effect').addClass(colorSelect+'_highlight_color-background');
	}
	function updateHightlightTxtBg(){

		_defaultWidthbg = $('.nav-hightlight-element .activ h4').width()+20;
		_defaultheightbg = $('.nav-hightlight-element .activ h4').height();
	
		if ($('.nav-hightlight-element .activ .animatedBG').width()===0){
			$('.nav-hightlight-element .activ .animatedBG').width(_defaultWidthbg+"px");
			$('.nav-hightlight-element .activ .animatedBG').height(_defaultheightbg+"px");
		}
		//$('.nav-hightlight-element .activ h4').width(scale + 'px');
		$('.nav-hightlight-element .activ .animatedBG').stop(true, true).animate({width:"0px"},_countLengthInSeconds*1000);
		
	}
	/*------------------------------------------------------*/
	/* ------------- counter hightlight ------------------*/
	/*------------------------------------------------------*/
	
	var _actualHighlight= 0;
	var _lastHighlight=0;
	var _myCounter;
	var _introCounter;
	
	function updateSelectionHighlight(){
		var lastHighlightTarget = ".nav-"+_arr[_lastHighlight]+" a";
		var actualHighlightTarget = '.nav-'+_arr[_actualHighlight]+' a';
		$(lastHighlightTarget).removeClass('activ');
		$(actualHighlightTarget).addClass('activ');
		//document.getElementById('header-info').innerHTML +="lastHighlightTarget: "+actualHighlightTarget;
	}
	
	function updateHighlight(){
		_lastHighlight = _actualHighlight;
		if(_actualHighlight === _arr.length-1){
			_actualHighlight =0;
		} else{
			_actualHighlight +=1;
		}
		updateSelectionHighlight();
		restartCounter(_myCounter,_countLengthInSeconds);
	}
	
	function Countdown(options) {
	  var timer,
	  instance = this,
	  seconds = options.seconds || 10,
	  updateStatus = options.onUpdateStatus || function () {},
	  counterEnd = options.onCounterEnd || function () {};
	  this.name ="_counterName"+_actualHighlight;
	
	  function decrementCounter() {
	    updateStatus(seconds);
	    if (seconds === 0) {
	      counterEnd();
	      instance.stopCountdown();
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
	
	  this.stopCountdown = function () {
	    clearInterval(timer);
	  };
	}

	function restartCounter(myCounter,countLength){
		_myCounter = new Countdown({  
		    seconds:countLength,  // number of seconds to count down
		    //onUpdateStatus: function(sec){},// callback for each second
		    onCounterEnd: function(){updateHighlight();}// final action
		});
		updateHightlightTxtBg();
		updateHighlightSiteBg();
		updateHightlightcolors();
		_myCounter.start();
	}
	function introCounter(myCounter,countLength){
		myCounter = new Countdown({  
		    seconds:0,  // number of seconds to count down
		    //onUpdateStatus: function(sec){},// callback for each second
		    onCounterEnd: function(){restartCounter(_myCounter,countLength);}// final action
		});
		myCounter.start();
	}
	introCounter(_introCounter,_countLengthInSeconds);
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
	
	function introMainAnimation(){
		$('.nav-hightlight').hide();
		$('.nav-hightlight').stop(true, true).delay(1000).fadeIn(600);
	}
	introMainAnimation();
});