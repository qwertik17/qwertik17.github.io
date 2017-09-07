$(window).ready(function(){
	var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
  }); 
});

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

$("body").on("contextmenu", false);
})
