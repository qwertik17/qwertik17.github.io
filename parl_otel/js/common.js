$(function() {

	$('.date input').datepicker({
        format: "dd.mm.yyyy",
        startDate: "now()",
        maxViewMode: 0,
        todayBtn: "linked",
		language: "ru",
        keyboardNavigation: false,
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom auto"
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
		$(".header").toggle(400);
    });


});
