function isTouchDevice(){var e;return!0===("ontouchstart"in window||window.DocumentTouch&&document instanceof e)}var AOS,console,Pace;jQuery(document).ready(function($){function e(){$("body, html").scrollTop(0,0),$("html, body").animate({scrollTop:0},500),l=!1}function a(){$(".header-bg").length&&(l&&e(),$(window).scroll(function(){d=$(this).scrollTop(),s()}),o(),$(window).resize(function(){o()}))}function s(){d>c?p&&($(".header-bg").css({transition:"none"}),$(".header-bg").stop(!0,!0).delay(600).css({opacity:"0"}),$("body").hasClass("fix-top-header")?$("body").removeClass("fix-top-header"):$("body").addClass("fix-top-header"),p=!1):c>=d&&(p||($(".header-bg").css({transition:"all 1.6s ease-out"}),$(".header-bg").css({opacity:"1"}),$("body").hasClass("fix-top-header")?$("body").removeClass("fix-top-header"):$("body").addClass("fix-top-header"),p=!0)),d>r?(console.log("headerStatusOpen !!!!:"+p),h&&($("body").hasClass("fix-top-menu")?$("body").removeClass("fix-top-menu"):$("body").addClass("fix-top-menu"),h=!1)):r>=d&&(h||($("body").hasClass("fix-top-menu")?$("body").removeClass("fix-top-menu"):$("body").addClass("fix-top-menu"),h=!0))}function o(){c=$(".header-inside").height(),$(".header-bg").css({height:c})}function i(){$("body").hasClass("right-navi-is-open")&&$(".secondary-button").trigger("click"),$("body").hasClass("nav-is-visible")?($("body").removeClass("nav-is-visible"),$("html").removeClass("nav-is-visible"),$(".menu-close").removeClass("is-visible"),$(".menu-open").removeClass("is-invisible"),$(".nav-quote-bg").removeClass("is-visible"),$(".nav-bg-quote").removeClass("is-visible"),$(".menu-wrapper").removeClass("menu-out"),$(".nav-hightlight").delay(1e3).show(0)):($("body").animate({scrollTop:0},"500"),$("body").addClass("nav-is-visible"),$("html").addClass("nav-is-visible"),$(".menu-open").addClass("is-invisible"),$(".menu-close").addClass("is-visible"),$(".nav-quote-bg").addClass("is-visible"),$(".nav-bg-quote").addClass("is-visible"),$(".menu-wrapper").addClass("menu-out"),$(".nav-hightlight").hide(0))}function t(){$(".header").stop(!0,!0).delay(600).fadeIn(600),$(".header-bg").stop(!0,!0).delay(600).fadeIn(600),$(".footer").stop(!0,!0).delay(1200).fadeIn(600),$(".menu-wrapper").stop(!0,!0).delay(600).fadeIn(600),$(".second-menu-wrapper").stop(!0,!0).delay(1200).fadeIn(600)}function n(){$(".content-main").stop(!0,!0).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200"),$(".project-main").stop(!0,!0).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200"),$(".about-content").stop(!0,!0).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200"),$(".contact-content").stop(!0,!0).css({opacity:"0"}).delay(600).animate({opacity:"1"},"1200"),$(".header-bg").addClass("-zoomup")}$(".lazy").Lazy({scrollDirection:"vertical",visibleOnly:!0,enableThrottle:!0,throttle:200,effect:"fadeIn",effectTime:100}),isTouchDevice()===!0?$("html").addClass("touch"):$("html").addClass("no-touch");var d,l=!0,c,r=20,p=!0,h=!0,u=105;a(),$(".secondary-button").on("click",function(e){e.preventDefault(),$("body").hasClass("right-navi-is-open")?$("body").removeClass("right-navi-is-open"):$("body").addClass("right-navi-is-open")}),$(".menu-button").on("click",function(e){e.preventDefault(),i()}),$(".nav-link").on("click",function(){i()}),$(".zoom-button-wrapper").on("click",function(a){a.preventDefault(),$(this).parent().hasClass("zoomUpthumbs")?($(this).parent().removeClass("zoomUpthumbs"),e()):($(this).parent().addClass("zoomUpthumbs"),$(this).parent().find("img.latelazy").lazy({bind:"event",threshold:0,afterLoad:function(e){e.css({top:"104px",opacity:"0"}).animate({top:"0px",opacity:"1"},"2000")}}))}),$(".header").hide(),$(".header-bg").hide(),$(".footer").hide(),$(".menu-wrapper").hide(),$(".second-menu-wrapper").hide(),Pace.on("hide",function(){$(".hideDuringLoading").css({visibility:"visible",opacity:"1"}),t(),n(),AOS.init({disable:"mobile",easing:"ease-out",duration:1e3})})});