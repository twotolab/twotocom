function isTouchDevice(){var e;return!0===("ontouchstart"in window||window.DocumentTouch&&document instanceof e)}jQuery(document).ready(function($){function e(){c=parseInt($(".header-bg").css("top"),10)||0,t>s&&$(".header-bg").css({transform:"translate3d( 0px, "+-d+"px, 0px)"}),s>=t&&$(".header-bg").css({transform:"translate3d(0px,0px, 0px)"})}function o(){d=$(".header-inside").height()+r,$(".header-bg").css({height:d})}function n(){$("body").hasClass("right-navi-is-open")&&$(".secondary-button").trigger("click"),$("body").hasClass("nav-is-visible")?($("body").removeClass("nav-is-visible"),$(".menu-close").removeClass("is-visible"),$(".menu-open").removeClass("is-invisible"),$(".nav-quote-bg").removeClass("is-visible"),$(".nav-bg-quote").removeClass("is-visible"),$(".menu-wrapper").removeClass("menu-out"),$(".nav-hightlight").delay(1e3).show(0)):($("body").animate({scrollTop:0},"500"),$("body").addClass("nav-is-visible"),$(".menu-open").addClass("is-invisible"),$(".menu-close").addClass("is-visible"),$(".nav-quote-bg").addClass("is-visible"),$(".nav-bg-quote").addClass("is-visible"),$(".menu-wrapper").addClass("menu-out"),$(".nav-hightlight").hide(0))}function i(){$(".header").stop(!0,!0).delay(1200).fadeIn(600),$(".footer").stop(!0,!0).delay(1200).fadeIn(600),$(".menu-wrapper").stop(!0,!0).delay(1200).fadeIn(600),$(".second-menu-wrapper").stop(!0,!0).delay(1200).fadeIn(600)}function a(){$(".content-main").stop(!0,!0).css({top:"52px",opacity:"0"}).delay(600).animate({top:"0px",opacity:"1"},"1200"),$(".project-main").stop(!0,!0).css({top:"52px",opacity:"0"}).delay(600).animate({top:"0px",opacity:"1"},"1200"),$(".about-content").stop(!0,!0).css({top:"52px",opacity:"0"}).delay(600).animate({top:"0px",opacity:"1"},"1200"),$(".header-bg").addClass("-zoomup")}$(".lazy").Lazy({scrollDirection:"vertical",visibleOnly:!0,enableThrottle:!0,throttle:200,effect:"fadeIn",effectTime:500}),$(window).scroll(function(){$(".onScrollAnimation").hide(),clearTimeout($.data(this,"scrollCheck")),$.data(this,"scrollCheck",setTimeout(function(){$(".onScrollAnimation").stop(!0,!0).delay(500).fadeIn(300)},250))});var s=50,t,l=!0,d,c;$(window).scroll(function(){t=$(this).scrollTop(),t>0&&(e(),l&&($("body, html").scrollTop(0),l=!1))});var r=104;o(),$(window).resize(function(){o()}),isTouchDevice()===!0?$("html").addClass("touch"):$("html").addClass("no-touch"),$(".breakpoint img").breakpoint(),$(".secondary-button").on("click",function(e){e.preventDefault(),$("body").hasClass("right-navi-is-open")?$("body").removeClass("right-navi-is-open"):$("body").addClass("right-navi-is-open")}),$(".menu-button").on("click",function(e){e.preventDefault(),n()}),$(".nav-link").on("click",function(){n()}),$(".header").hide(),$(".footer").hide(),$(".menu-wrapper").hide(),$(".second-menu-wrapper").hide(),Pace.on("hide",function(){i(),a()})});