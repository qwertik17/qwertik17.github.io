jQuery(document).ready(function($) {

	
	$('.hamburger').on('click', function(event) {
		event.preventDefault();
		if ($(this).attr('data-show') == 'close') {
			$(this).addClass('hamburger--slider').addClass('is-active');
			$(this).attr('data-show', 'show');
			$(".mobile-menu").slideDown(300);
		} else {
			$(this).removeClass('hamburger--slider').removeClass('is-active');
			$(this).attr('data-show', 'close');
			$(".mobile-menu").slideUp(300);
		}
	});

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
		effect: 'flip',
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.reviews-button-next',
			prevEl: '.reviews-button-prev',
		},
	});	

	$(".main-view").paroller({ factor: '0.3', type: 'background' });

	setTimeout(function(){
		$("#romb1").paroller({ factor: '0.4', type: 'foreground' });
		$("#romb2").paroller({ factor: '-0.1', type: 'foreground' });
		$("#romb3").paroller({ factor: '-0.1', type: 'foreground' });
		$("#romb4").paroller({ factor: '0.4', type: 'foreground' });
		$("#romb5").paroller({ factor: '0.3', type: 'foreground' });
		$("#romb6").paroller({ factor: '-0.1', type: 'foreground' });
		$("#romb7").paroller({ factor: '-0.4', type: 'foreground' });
		$("#romb8").paroller({ factor: '0.2', type: 'foreground' });
		$("#romb9").paroller({ factor: '-0.4', type: 'foreground' });
		$("#romb10").paroller({ factor: '0.2', type: 'foreground' });
		$("#romb11").paroller({ factor: '-0.4', type: 'foreground' });
		$("#romb12").paroller({ factor: '0.2', type: 'foreground' });
	},100);

	$(".object-item").hover(function() {
		if ($(window).width() > 992) {
			$(this).find('.hidden-content').slideDown(250);
		}
	}, function() {
		if ($(window).width() > 992) {
			$(this).find('.hidden-content').slideUp(250);
		}
	});

});

