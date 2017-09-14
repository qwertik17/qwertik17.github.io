$(document).ready(function() {

	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
		$(".item").imagefill();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 500,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1],

		tPrev: 'Назад',
		tNext: 'Далее',
		// tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
		tCounter: '',
		},
		image: {
			tError: 'Ошибка загрузки фото...',
			navigateByImgClick: true,
			 cursor: 'default'
		}
	});

$("body").on("contextmenu", false);
	
});
