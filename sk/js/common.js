jQuery(document).ready(function($) {

	


	$('.home-filter-form select').styler();

	var swiper = new Swiper('.swiper-container', {
		loop: true,
		autoplay: {
			delay: 3500,
		},
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});	

	var reviews_slider = new Swiper('.reviews-slider', {
		loop: true,
		autoplay: {
			delay: 3500,
		},
		navigation: {
			nextEl: '.reviews-button-next',
			prevEl: '.reviews-button-prev',
		},
	});	

	$(".main-view").paroller({ factor: '0.3', type: 'background' });
	$("#romb1").paroller({ factor: '0.4', type: 'foreground' });
	$("#romb2").paroller({ factor: '-0.1', type: 'foreground' });
	$("#romb3").paroller({ factor: '-0.1', type: 'foreground' });
	$("#romb4").paroller({ factor: '0.4', type: 'foreground' });
	$("#romb5").paroller({ factor: '0.3', type: 'foreground' });
	$("#romb6").paroller({ factor: '-0.1', type: 'foreground' });

	$(".object-item").hover(function() {
		$(this).find('.hidden-content').slideDown(250);
	}, function() {
		$(this).find('.hidden-content').slideUp(250);
	});

	$(document).on('click', '.object-item', function(event) {
		event.preventDefault();
		$(this).find('.hidden-content').slideDown(250);
	});

});

