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

})