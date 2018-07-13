jQuery(document).ready(function($) {

	$("input[type=tel]").mask("+7(999) 999-99-99");

	var check_drop_filters = $(".dropdown-filter-container");
	if (check_drop_filters.length > 0) {
		dropFilters();
	}
	$(window).resize(function(event) {
		var check_drop_filters = $(".dropdown-filter-container");
		if (check_drop_filters.length > 0) {
			dropFilters();
		}
	});

	$('.bottom-open').on('click', function(event) {
		event.preventDefault();
		$(this).prop("disabled", true);
		var item = $(this).parent().parent();
		if (item.hasClass('open')) {
			item.next('.filter-item-detail').slideUp(150);
			// setTimeout(function() {
				item.removeClass('open');
			// },150);
		} else {
			$('.filter-item').next('.filter-item-detail').slideUp(150);
			// setTimeout(function() {
				$('.filter-item').removeClass('open');
			// },150);
			// setTimeout(function() {
				item.addClass('open');
			// },300);
			// setTimeout(function() {
				item.next('.filter-item-detail').slideDown(150);
			// },450);
		}
	});

	function dropFilters() {
		var i = 0,
			window_width = $(window).width();
		$('.filter-item').each(function(index, el) {
			$(el).css('order', i);
			if (window_width > 319) var step = 1;
			if (window_width > 479) var step = 2;
			if (window_width > 767) var step = 3;
			if (window_width > 991) var step = 5;
			if (window_width > 1199) var step = 6;
			var level = Math.floor(i/step)+1;
			$(el).next('.filter-item-detail').css('order', step * level);
			i++;
		});
	}

	$(".count-regulator").on('click', function(event) {
		event.preventDefault();
		var action = $(this).data('action'),
		form   = $(this).parent(),
		input  = $(form).children('input'),
		value  = parseInt($(form).children('input').val());
		switch(action) {
			case 'minus':
				if (value !== 1) {
					input.val(value-1).change();
				}
				break;
			case 'plus':
					input.val(value+1).change();
				break;
			default:
				break;
		}
	});
	
	$(".dropdown-menu").hover(function() {
		if($(window).width() > 1200) {
			$(this).attr('data-state', 'on');
			$(".super-menu").show();
			$(this).parent().addClass('hover');
		}
	}, function() {
		if($(window).width() > 1200) {
			$(this).attr('data-state', 'off');
			$(".super-menu").hide();
			$(this).parent().removeClass('hover');
		}
	});
	$(".super-menu").hover(function() {
		if($(window).width() > 1200) {
			$(".dropdown-menu").attr('data-state', 'on');
			$(".super-menu").show();
			$(".dropdown-menu").parent().addClass('hover');
		}
	}, function() {
		if($(window).width() > 1200) {
			$(".dropdown-menu").attr('data-state', 'off');
			$(".super-menu").hide();
			$(".dropdown-menu").parent().removeClass('hover');
		}
	});
	$(".dropdown-menu").on('click', function(event) {
		if($(window).width() > 1200) {
			return true
		} else {
			event.preventDefault();
			var state = $(this).attr('data-state');
			if(state == 'off') {
				$(this).attr('data-state', 'on');
				$(".super-menu").show();
				$(this).parent().addClass('hover');
			} else {
				$(this).attr('data-state', 'off');
				$(".super-menu").hide();
				$(this).parent().removeClass('hover');
			}
		}
	});

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});

	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true,
			tPrev: '', // title for left button
			tNext: '', // title for right button
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});


	var swiper = new Swiper('.sec-gallery .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 44,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
			draggable: true
		},
		breakpoints: {
			960: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			500: {
				slidesPerView: 1,
			}
		}
	});

	$('.menu-button').on('click', function(){
		$(this).toggleClass('menu-open');
		$('.header .top-nav').slideToggle(400);
	});

	$('.scroll-down').on('click', function(){
		$('html,body').animate({scrollTop: $('html,body').height()+'px'},1000);
	});
	$('.scroll-top').on('click', function(){
		$('html,body').animate({scrollTop: 0 + 'px'},1000);
	});

});



