jQuery(document).ready(function($) {

	$(".up-btn").hover(function() {
		$(this).parent().addClass('top-up-hover');
	}, function() {
		$(this).parent().removeClass('top-up-hover');
	});

	$(".up-btn").on('click', function(event) {
		event.preventDefault();
		$("html, body").animate({scrollTop: "0px"},1000);
	});

	$(".phone-input").mask("+7(999) 999-9999");

	$("#bus-carousel").carousel({
		swipe: 50,
		interval: 10000
	});
			
});



