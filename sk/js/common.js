jQuery(document).ready(function($) {

	$(document).on('click', '.menu-btn', function() {
		var status = $(this).attr('data-status');
		if( status == 'close') {
			$(this).attr('data-status', 'open');
			$(this).children('i').removeClass('icon-menu-of-three-lines').addClass('icon-close');
			$('.main-menu').slideDown(300);
		} else {
			$(this).attr('data-status', 'close');
			$(this).children('i').removeClass('icon-close').addClass('icon-menu-of-three-lines');
			$('.main-menu').slideUp(300);
		}
	});

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

	$.fn.extend({
	  animateCss: function(animationName, callback) {
	    var animationEnd = (function(el) {
	      var animations = {
	        animation: 'animationend',
	        OAnimation: 'oAnimationEnd',
	        MozAnimation: 'mozAnimationEnd',
	        WebkitAnimation: 'webkitAnimationEnd',
	      };

	      for (var t in animations) {
	        if (el.style[t] !== undefined) {
	          return animations[t];
	        }
	      }
	    })(document.createElement('div'));

	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	      $(this).removeClass('animated ' + animationName);

	      if (typeof callback === 'function') callback();
	    });

	    return this;
	  },
	});
	//Фильтрация объектов
	$(document).on('click', '.filter', function(event) {
		event.preventDefault();
		var speed_a = 800;
		if ($(this).hasClass('active')) return;
		if ($(this).attr('data-filter') == "all") {
			$(".objects .object-item-wr").show(speed_a);
			$(".filter").removeClass('active');
			$(this).addClass('active');
			return;
		}
		var data_cat = $(this).attr('data-filter');
		$(".objects .object-item-wr").each(function(index, el) {
			if ($(el).attr('data-cat') !== data_cat) {
				$(el).hide(speed_a);
			};
		});
		$("[data-cat='"+data_cat+"']").show(speed_a);
		$(".filter").removeClass('active');
		$(this).addClass('active');
		
	});
});