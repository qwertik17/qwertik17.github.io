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
	var ph = $(".page-header").outerHeight(true);
	var fh = $("footer").outerHeight(true);
	$(".page-content").css({"min-height": wh-ph-fh-8 + "px"});

	$(".chosen-select").chosen({disable_search_threshold: 10});

})