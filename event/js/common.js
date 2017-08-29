jQuery(document).ready(function($) {
	//preloader
	setTimeout(function() {
		$(".preloader").fadeOut('slow');
	}, 700);

	//timer
	var time = "2017/09/15";
	$("#days").countdown(time).on('update.countdown', function(e) {
		$(this).html(e.strftime('%D'));
	})
	$("#hours").countdown(time).on('update.countdown', function(e) {
		$(this).html(e.strftime('%H'));
	})
	$("#minutes").countdown(time).on('update.countdown', function(e) {
		$(this).html(e.strftime('%M'));
	})
	$("#seconds").countdown(time).on('update.countdown', function(e) {
		$(this).html(e.strftime('%S'));
	})

	//accordion
	$('.accordion').accordion({
		"transitionSpeed": 400
	});

	//sponsors
	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin: 100,
	    items: 3,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    smartSpeed: 1500
	})

	//map
	$("#hide_map").on('click', function(event) {
		event.preventDefault();
		$(".message, #map-overlay").fadeOut('300');
		setTimeout(function(){
			$(".btn-show").fadeIn('300');
		},300)
	});
	$(".btn-show").on('click', function(event) {
		event.preventDefault();
		$(".message, #map-overlay").fadeIn('300');
		$(".btn-show").fadeOut('300');		
	});



	//magnific-popup documentation http://dimsemenov.com/plugins/magnific-popup/documentation.html
	//owlcarousel2 documentation https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html

});
