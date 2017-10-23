jQuery(document).ready(function($) {

	$(".header-bg").height($(window).height());
 		
	$(".date").flatpickr({
		minDate: "today",
		rangeSeparator: "по",
		mode: "range",
		dateFormat: "d.m.Y",
		"locale": "ru"
	});

    $(".phone-input").mask("+7(999) 999-9999");

	var ssh = $(".small-service").width();
	var lsh = ssh * 2;
	var slsh = ssh / 2;
	$(".small-service").css({"height": ssh});
	$(".large-service").css({"height": lsh});
	$(".long-service").css({"height": ssh});
	if ($(window).width()>768) {	
		$(".small-long-service").css({"height": slsh});
	} else {
		$(".small-long-service").css({"height": slsh*2});
	}
	$(".y-video-more").css({"height": $(".y-video").height()});

	if ($(window).width() < 768) {
		$(".dropdown").click(function(event) {
			$(this).children('ul').slideToggle(400);
		});
	}
	$(window).resize(function(){
		var ssh = $(".small-service").width();
		var lsh = ssh * 2;
		var slsh = ssh / 2;
		$(".small-service").css({"height": ssh});
		$(".large-service").css({"height": lsh});
		$(".long-service").css({"height": ssh});
		if ($(window).width()>768) {	
			$(".small-long-service").css({"height": slsh});
		} else {
			$(".small-long-service").css({"height": slsh*2});
		}
		$(".y-video-more").css({"height": $(".y-video").height()});
		$(".header-bg").height($(window).height());
	})


	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$(".y-video-more").css({"height": $(".y-video").height()});

	var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });


    $(".mobile-mnu").click(function(event) {
    	event.preventDefault();
		$(".header").slideToggle(400);
    });

    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			tError: 'Ошибка загрузки изображения'
		},
		gallery: {
			enabled: true,
			tPrev: '<i class="fa fa-long-arrow-left" aria-hidden="true"></i> Назад',
			tNext: 'Далее <i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			arrowMarkup: '<div class="gallery-arrow gallery-arrow-%dir%">%title%</div>'
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	$(".up-btn").click(function(event) {
		$("html").animate({scrollTop:0}, 500);
		return false;
	});

	var $check_class = $('.fond-item .fond-item-content');
	if ($check_class.length > 0) {
		$('.fond-item .fond-item-content').equalHeights();
	}	


	$("#popup__toggle").on('click', function(event) {
		event.preventDefault();
		$(".modal-callback-wrap").animate({"opacity": "1"},200);
		$(".modal-callback").slideDown(400);
		$(".modal-callback-wrap").fadeIn(400);
	});


	$(".modal-callback-wrap,.close-modal-callback").click(function(event){
		event.preventDefault();
		$(".modal-callback-wrap").animate({"opacity": "0"},300);
		$(".modal-callback").slideUp(400);
	})

	
});
