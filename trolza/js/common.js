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
		interval: 11000
	});
	$("#main-slider").carousel({
		swipe: 20,
		interval: 5000
	});
	$("#history-slider").carousel({
		swipe: 20,
		interval: 6000
	});


	$(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
		delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
		if ($(window).width()>=1200) {
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
		}
	});


	$("body").on('click', '.close-submenu', function(event) {
		event.preventDefault();
		$(".submenu").toggleClass('hide-submenu');
	});


	$(".hamburger-box, .site-overlay").click(function(event) {
		$(".hamburger-box").toggleClass('hamburger--spin is-active');
	});

	$('.open-search-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#search-input',
		mainClass: 'search-bg',
		callbacks: {
			open: function() {
				$('.search-list').equalHeights();
			}
		}
	});
	$(document).on('click', '.close-search-popup', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	lightGallery(document.getElementById('lightgallery'),{
		thumbnail: true,
		hash: false,
		share: false
	});

	$('.airSticky').airStickyBlock({
		offsetTop: 100
	});

	$('.history-timeline-list a').click(function (e) {
		e.preventDefault();
		var curLink = $(this);
		var scrollPoint = $(curLink.attr('href')).position().top;
		$('body,html').animate({
			scrollTop: scrollPoint
		}, 600);
	})

	$(window).on('scroll', function(event) {		
		var scrollPosition = $(document).scrollTop();
		$('.history-timeline-list li a').each(function(index, el) {
			var currentLink = $(this);
			refElement = $(currentLink.attr("href"));
			// if (refElement.position().top-1 <= scrollPosition && refElement.position().top + refElement.height() >= scrollPosition) {
			if (refElement.position().top-1<= scrollPosition) {
				if ($(this).parent().hasClass('active')) {
					return true;
				} else {
					$('.history-timeline-list li').removeClass("active");
					currentLink.parent().addClass("active");
				}
			} else {
				currentLink.parent().removeClass("active");
			}
		});

		var years_list = $('.history-timeline-list');
		years_list_h = $('.history-timeline-list').outerHeight();
		years_list_item = $('.history-timeline-list li');
		length = $('.history-timeline-list').children('li').length;
		end_length = $('.history-timeline-list').children('li').length-3;
		years_list_item_h = years_list_h / length;
		i = 0;
		years_list_item.each(function(index, el) {
			if ($(this).hasClass('active')) {
				var el = index;
			}
			if (el > 4 && el < end_length) {
				var count = el-4;
				margin = years_list_item_h * count;
				years_list.animate({"margin-top": "-"+margin+"px"}, 70);
				console.log(years_list_h);
			} else if (el <= 4) {
				years_list.animate({"margin-top": 0}, 70);
			}

		});			
	});

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});



