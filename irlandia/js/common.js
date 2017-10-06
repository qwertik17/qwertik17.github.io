jQuery(document).ready(function($) {

	//Parallax
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('.homepage .header').parallax({imageSrc: 'http://irlandia.adminsdw.beget.tech/template/images/bg_header_home.jpg'});
	}
	
	$('.new-project').parallax({imageSrc: 'http://irlandia.adminsdw.beget.tech/upload/new_project/bg.jpg'});

	//Mobile menu
	$(".mobile-menu-btn").click(function(event) {
		event.preventDefault();
		$(".mobile-menu").slideToggle('400', function() {
			
		});
	});
	$(".mobile-menu-close").click(function(event) {
		event.preventDefault();
		$(".mobile-menu").slideToggle('400', function() {
			
		});
	});

	//Home News-slider
	$(".news-list-item").click(function(event) {
		event.preventDefault();
		var id = $(this).attr('href');
		if ($(id).hasClass('news-item-current')) return true;
		$(".news-list-item-current").removeClass('news-list-item-current');
		$(this).addClass('news-list-item-current');
		$(".news-item-current").removeClass('news-item-current');
		$(".news-loader").show(0, function() {
			setTimeout(function(){
				$(id).addClass('news-item-current');
				$(".news-loader").hide();
			},500)
		});
		
		
		// alert(id);
	});

	//Adaptive
	var about_w = $(".about-content-wrap").width();
		about_h = $(".about-content-wrap").height();
	$(".about-bg").css({
		width: about_w,
		height: about_h
	});
	$(window).resize(function() {
		var about_w = $(".about-content-wrap").width();
			about_h = $(".about-content-wrap").height();
		$(".about-bg").css({
			width: about_w,
			height: about_h
		});
	});
});