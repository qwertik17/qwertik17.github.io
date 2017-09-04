jQuery(document).ready(function() {
	
	var  _win    = jQuery(window),
	_sidebar_bar = jQuery('#sidebar'),
	_win_height  = _win.height();

	
	//** init isotope
	var ux_ts = new ThemeIsotope;
	ux_ts.init();
	
	
	// Responsive condition 
	if( jQuery('.responsive-ux').length ){ 	
		var _responsive = true;
	}else{
		var _responsive = false;
	}
	
	
	// Set min height for content area
	if(jQuery('#content_wrap').length){
		jQuery('#content_wrap').parent('.row-fluid').css('min-height',_win_height);
		jQuery('#content_wrap').parent('#content').css('min-height',_win_height);
	}

	
	//Set transform-origin
	function main_transform_origin(){

		var origin_value  =  function(){
			
			var 
			st         = _win.scrollTop(), 
			pageHeight = jQuery('#main').height(),
			orgin_y    = '400px',
			win_Height = _win_height;

			if( st < win_Height ){
				orgin_y = win_Height/1.2;
			}else{
				orgin_y = pageHeight - (win_Height/1.2);
			}

			jQuery('#main').css('transform-origin','50% '+ orgin_y+'px');
			
		};
		_win.scroll(origin_value);

	    origin_value();	
	};

	if( _win.width() > 768 && !Modernizr.touch ) {
		main_transform_origin();
	}

	jQuery('.popup-gallery').magnificPopup({
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
		tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
		},
		image: {
			tError: 'Ошибка загрузки фото...',
			navigateByImgClick: true,
			 cursor: 'default'
		}
	});

	jQuery("body").on("contextmenu", false);
});

