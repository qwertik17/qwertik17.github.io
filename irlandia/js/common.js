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

	//Footer
	var $check_class = $('.nohomepage');
	var footer = new Boolean(true);
	if ($check_class.length > 0) {
		var footer_h = $(".footer").height()+26;
		$(".footer").css({bottom: -footer_h});
		$(".footer-up").click(function(event) {
			event.preventDefault();
			var icon_f = $(this).children('i');
			if(footer) {
				footer = false;
				$(".footer-up").css({bottom: footer_h-1});
				$(".footer").css({bottom: 0});
				icon_f.removeClass('fa-chevron-up');
				icon_f.addClass('fa-chevron-down');
			} else {
				footer = true;
				$(".footer-up").css({bottom: 0});
				$(".footer").css({bottom: -footer_h});
				icon_f.removeClass('fa-chevron-down');
				icon_f.addClass('fa-chevron-up');
			}
		});
	}

	$(window).resize(function() {
		var $check_class = $('.nohomepage');
		var footer = new Boolean(true);
		if ($check_class.length > 0) {
			var footer_h = $(".footer").height()+26;
			$(".footer").css({bottom: -footer_h});
			$(".footer-up").click(function(event) {
				event.preventDefault();
				var icon_f = $(this).children('i');
				if(footer) {
					footer = false;
					$(".footer-up").css({bottom: footer_h-1});
					$(".footer").css({bottom: 0});
					icon_f.removeClass('fa-chevron-up');
					icon_f.addClass('fa-chevron-down');
				} else {
					footer = true;
					$(".footer-up").css({bottom: 0});
					$(".footer").css({bottom: -footer_h});
					icon_f.removeClass('fa-chevron-down');
					icon_f.addClass('fa-chevron-up');
				}
			});
		}
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
	});
	$(".news-loader").height($(".news-body").height());
	$(window).resize(function(){
		$(".news-loader").height($(".news-body").height());
	})

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

	//Contacts page wrapper
	var cont_min_h = $(window).height()-$("header").outerHeight();
	$(".contacts-page").attr('style', 'min-height:'+cont_min_h+'px');
	$(window).resize(function() {	
		var cont_min_h = $(window).height()-$("header").outerHeight();
		$(".contacts-page").attr('style', 'min-height:'+cont_min_h+'px');
	});

	//Margin
	$(".nohomepage").attr('style', 'margin-top:'+$("header").outerHeight()+'px');
	$(window).resize(function() {	
		$(".nohomepage").attr('style', 'margin-top:'+$("header").outerHeight()+'px');
	});

	//Services page
	if ($(window).width() > 768) {
		var service_h = ($(window).height()-$("header").outerHeight())/2;
		$(".nohomepage .services .column").css({height: service_h});
	} else {
		var service_h = ($(window).height()-$("header").outerHeight())/2.5;
		$(".nohomepage .services .column").css({height: service_h});
	}
	$(window).resize(function() {
		if ($(window).width() > 768) {
			var service_h = ($(window).height()-$("header").outerHeight())/2;
			$(".nohomepage .services .column").css({height: service_h});
		} else {
			var service_h = ($(window).height()-$("header").outerHeight())/2.5;
			$(".nohomepage .services .column").css({height: service_h});
		}
	});

	//Service page
	if ($(window).width() > 992) {
		$(".left-service-bar").css({top: $("header").outerHeight()});
		$(".service-bar-item").css({height: ($(".left-service-bar").outerHeight()/4)});
		$(".service-content").attr('style', 'padding-left:'+ ($(".left-service-bar").width()+15)+"px");
	}
	$(window).resize(function() {
		if ($(window).width() > 992) {
			$(".left-service-bar").css({top: $("header").outerHeight()});
			$(".service-bar-item").css({height: ($(".left-service-bar").outerHeight()/4)});
			$(".service-content").attr('style', 'padding-left:'+ ($(".left-service-bar").width()+15)+"px");
		}
	});

	//News
	var content_news_h = $(window).height()-$("header").outerHeight()-$(".social-share").outerHeight()-$(".news-title").outerHeight()-50;
	$(".news-content").height(content_news_h);

});