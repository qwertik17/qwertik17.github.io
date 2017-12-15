jQuery(document).ready(function($) {
	$('.insta .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay: 3000,
		autoplaySpeed: 500,
		navSpeed: 500,
		navText: [],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			1000:{
				items:4
			},
			1400:{
				items:5
			}
		}
	});

	$('.partners .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay: 3000,
		autoplaySpeed: 500,
		navSpeed: 500,
		navText: [],
		autoWidth: true,
		margin: 100,
		center:true
	});

	$('.shop-gallery-slider .owl-carousel').owlCarousel({
		loop:true,
		margin: 10,
		nav: true,
		autoplay: 3000,
		autoplaySpeed: 500,
		navSpeed: 500,
		navText: [],
		items: 1,
		margin: 0
	});

	if ( $(window).width()>600) {
		$("#map").css({"height":$(".map-cover").outerHeight(true)+"px"});
	};
	$(window).resize(function(event) {
		if ($(window).width()>600) {
			$("#map").css({"height":$(".map-cover").outerHeight(true)+"px"});
		};
	});

	$(".menu-btn").on('click', function(event) {
		event.preventDefault();
		$(".mobile-menu").slideDown(400);
	});
	$(".close-menu").on('click', function(event) {
		event.preventDefault();
		$(".mobile-menu").slideUp(400);
	});

	var wh = $(window).height();
	var ph = $(".page-header:first-child").outerHeight(true);
	var fh = $("footer").outerHeight(true);
	$(".page-content").css({"min-height": wh-ph-fh-8 + "px"});

	$(".chosen-select").chosen({disable_search_threshold: 10});




	var speed = 2000;
	var container =  $('.display-animation');
	container.each(function() {
		var elements = $(this).children();
		elements.each(function() {
			var elementOffset = $(this).offset();
			var offset = elementOffset.left*0.8 + elementOffset.top;
			var delay = parseFloat(offset/speed).toFixed(2);
			$(this)
			.css("-webkit-animation-delay", delay+'s')
			.css("-o-animation-delay", delay+'s')
			.css("animation-delay", delay+'s')
			.addClass('animated');
		});
	});

	$(".ripple-effect").click(function(e){
		var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
        	rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
        	var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
        	ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
        	top: y+'px',
        	left:x+'px'
        }).addClass("animate");
    })

	$(".phone-input").mask("+7(999) 999-9999");



	var filterList = {
		init: function () {
			$('.shops-list').mixitup({
				targetSelector: '.shop-item',
				filterSelector: '.filter',
				effects: ['fade','scale'],
				easing: 'snap'
			});
		}
	};
	filterList.init();

	var toggle_categories = new Boolean(false);
	$(".toggle-filters, .close-filter-list").on('click', function(event) {
		event.preventDefault();
		if (toggle_categories == false) {
			toggle_categories = true;
			$(".toggle-filters").addClass('active-toggle');
			$(".filters-list").slideDown(400);
		} else {
			toggle_categories = false;
			$(".toggle-filters").removeClass('active-toggle');
			$(".filters-list").slideUp(400);
		}
	});

	$('.popup-gallery').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Загрузка изображения #%curr%...',
			mainClass: 'mfp-img-mobile, mfp-fade',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1],
				tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
				tPrev: '',
				tNext: ''
			},
			zoom: {
				enabled: true,
				duration: 300,
				opener: function(element) {
					return element.find('img');
				}
			},
			image: {
				cursor: 'default',
				verticalFit: true,
				tError: 'При загрузке изображения произошла ошибка.'
			}
		});
	});

	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

})