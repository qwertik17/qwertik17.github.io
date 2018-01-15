jQuery(document).ready(function($) {

	$('.advantages-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		responsive:{0:{items:1},480:{items:2},570:{items:3},768:{items:4},992:{items:5},1200:{items:6}}
	})

	$(".up-btn").hover(function() {
		$(this).parent().addClass('top-up-hover');
	}, function() {
		$(this).parent().removeClass('top-up-hover');
	});

	$(".up-btn").on('click', function(event) {
		event.preventDefault();
		$("html, body").animate({scrollTop: "0px"},1000);
	});

	$(".phone-input").mask("+7(999) 999-9999");

	$("#bus-carousel").carousel({
		swipe: 20,
		interval: 10000
	});
	$("#main-slider").carousel({
		swipe: 20,
		interval: 5000
	});
	$("#history-slider").carousel({
		swipe: 20,
		interval: 5000
	});


	$(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
		delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
		if (delta >= 0) {
			if ($(window).scrollTop()>$(".header").outerHeight()) {
				$(".header").addClass('sticky-header');
				$("body").css({"margin-top": $(".header").outerHeight()+'px'});
			} else {
				$(".header").removeClass('sticky-header');
				$("body").css({"margin-top": '0px'});
			}
			
		} else {
			$(".header").removeClass('sticky-header');
			$("body").css({"margin-top": '0px'});
		}
	});
	$('body').swipe({swipeStatus:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection){	
			if (phase=="end"){
				if (direction == 'up') {
					if ($(window).scrollTop()>$(".header").outerHeight()) {
						$(".header").addClass('sticky-header');
						$("body").css({"margin-top": $(".header").outerHeight()+'px'});
					} else {
						$(".header").removeClass('sticky-header');
						$("body").css({"margin-top": '0px'});
					}
				}
				if (direction == 'down') {
					$(".header").removeClass('sticky-header');
					$("body").css({"margin-top": '0px'});
				}
			}
		},
		triggerOnTouchEnd:false,
		threshold:20
	});




	$("body").on('click', '.close-submenu', function(event) {
		event.preventDefault();
		$(".submenu").toggleClass('hide-submenu');
	});


	$(".hamburger-box, .site-overlay").click(function(event) {
		$(".hamburger-box").toggleClass('hamburger--spin is-active');
	});

	
});



