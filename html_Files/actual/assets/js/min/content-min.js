function isTouchDevice(){var e;return!0===("ontouchstart"in window||window.DocumentTouch&&document instanceof e)}jQuery(document).ready(function($){function e(){$("body").hasClass("right-navi-is-open")&&$(".secondary-button").trigger("click"),$("body").hasClass("nav-is-visible")?($("body").removeClass("nav-is-visible"),$(".menu-close").removeClass("is-visible"),$(".menu-open").removeClass("is-invisible"),$(".nav-quote-bg").removeClass("is-visible"),$(".nav-bg-quote").removeClass("is-visible"),$(".menu-wrapper").removeClass("menu-out"),$(".nav-hightlight").delay(1e3).show(0)):($("body").animate({scrollTop:0},"500"),$("body").addClass("nav-is-visible"),$(".menu-open").addClass("is-invisible"),$(".menu-close").addClass("is-visible"),$(".nav-quote-bg").addClass("is-visible"),$(".nav-bg-quote").addClass("is-visible"),$(".menu-wrapper").addClass("menu-out"),$(".nav-hightlight").hide(0))}function o(){$(".header").hide(),$(".footer").hide(),$(".menu-wrapper").hide(),$(".header").stop(!0,!0).fadeIn(1200),$(".footer").stop(!0,!0).fadeIn(1200),$(".menu-wrapper").stop(!0,!0).delay(1e3).fadeIn(600)}function i(){$(".content-main").stop(!0,!0).css({top:"10px",opacity:"0"}).delay(1200).animate({top:"0px",opacity:"1"},"1200"),$(".project-main").stop(!0,!0).css({top:"10px",opacity:"0"}).delay(1200).animate({top:"0px",opacity:"1"},"1200"),$(".about-content").stop(!0,!0).css({top:"10px",opacity:"0"}).delay(1200).animate({top:"0px",opacity:"1"},"1200")}$(".lazy").Lazy({enableThrottle:!0,throttle:200,effect:"fadeIn",effectTime:500}),$(window).scroll(function(){$(".onScrollAnimation").hide(),clearTimeout($.data(this,"scrollCheck")),$.data(this,"scrollCheck",setTimeout(function(){$(".onScrollAnimation").stop(!0,!0).delay(500).fadeIn(300)},250))}),isTouchDevice()===!0?$("html").addClass("touch"):$("html").addClass("no-touch"),$(".breakpoint img").breakpoint(),$(".secondary-button").on("click",function(e){e.preventDefault(),$("body").hasClass("right-navi-is-open")?$("body").removeClass("right-navi-is-open"):$("body").addClass("right-navi-is-open")}),$(".menu-button").on("click",function(o){o.preventDefault(),e()}),$(".nav-link").on("click",function(){e()}),o(),i()});