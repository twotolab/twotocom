function isTouchDevice(){var e;return!0===("ontouchstart"in window||window.DocumentTouch&&document instanceof e)}jQuery(document).ready(function($){function e(){d=parseInt($(".header-bg").css("top"),10)||0,t>n&&(r&&($(".header-bg").css({transition:"all 1.6s ease-out"}),$(".header-bg").css({transform:"translate3d(0px, -100px,0px)"})),r=!1),n>=t&&(r||($(".header-bg").css({transition:"all 0.6s ease-out"}),$(".header-bg").css({transform:"translate3d(0px,0px, 0px)"}),console.log("open it--------"+t)),r=!0)}function i(){c=$(".header-inside").height()+u,$(".header-bg").css({height:c})}function s(){$("body").hasClass("right-navi-is-open")&&$(".secondary-button").trigger("click"),$("body").hasClass("nav-is-visible")?($("body").removeClass("nav-is-visible"),$("html").removeClass("nav-is-visible"),$(".menu-close").removeClass("is-visible"),$(".menu-open").removeClass("is-invisible"),$(".nav-quote-bg").removeClass("is-visible"),$(".nav-bg-quote").removeClass("is-visible"),$(".menu-wrapper").removeClass("menu-out"),$(".nav-hightlight").delay(1e3).show(0)):($("body").animate({scrollTop:0},"500"),$("body").addClass("nav-is-visible"),$("html").addClass("nav-is-visible"),$(".menu-open").addClass("is-invisible"),$(".menu-close").addClass("is-visible"),$(".nav-quote-bg").addClass("is-visible"),$(".nav-bg-quote").addClass("is-visible"),$(".menu-wrapper").addClass("menu-out"),$(".nav-hightlight").hide(0))}function a(){$(".header").stop(!0,!0).delay(600).fadeIn(600),$(".footer").stop(!0,!0).delay(1200).fadeIn(600),$(".menu-wrapper").stop(!0,!0).delay(1200).fadeIn(600),$(".second-menu-wrapper").stop(!0,!0).delay(1200).fadeIn(600)}function o(){$(".content-main").stop(!0,!0).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200"),$(".project-main").stop(!0,!0).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200"),$(".about-content").stop(!0,!0).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200"),$(".contact-content").stop(!0,!0).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200"),$(".header-bg").addClass("-zoomup")}$(".lazy").Lazy({scrollDirection:"vertical",visibleOnly:!0,enableThrottle:!0,throttle:200,effect:"fadeIn",effectTime:500}),$(window).scroll(function(){$("body").hasClass("nav-is-visible")||($(".onScrollAnimation").hide(),clearTimeout($.data(this,"scrollCheck")),$.data(this,"scrollCheck",setTimeout(function(){$(".onScrollAnimation").stop(!0,!0).delay(500).fadeIn(300)},250)))});var n=50,t,l=!0,c,d,r=!0;$(window).scroll(function(){t=$(this).scrollTop(),l&&($("body, html").scrollTop(0),l=!1),e()});var u=105;i(),$(window).resize(function(){i()}),isTouchDevice()===!0?$("html").addClass("touch"):$("html").addClass("no-touch"),$(".breakpoint img").breakpoint(),$(".secondary-button").on("click",function(e){e.preventDefault(),$("body").hasClass("right-navi-is-open")?$("body").removeClass("right-navi-is-open"):$("body").addClass("right-navi-is-open")}),$(".menu-button").on("click",function(e){e.preventDefault(),s()}),$(".nav-link").on("click",function(){s()}),$(".header").hide(),$(".footer").hide(),$(".menu-wrapper").hide(),$(".second-menu-wrapper").hide(),Pace.on("hide",function(){$(".hideDuringLoading").css({visibility:"visible",opacity:"1"}),a(),o(),AOS.init({disable:"mobile",easing:"ease-out",duration:1e3})})});