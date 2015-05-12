function videoBg() {
	var ratio = 852/480;
	var w = $('.wrapper').width();
	var h = $(window).height();
	if (  w/h > ratio ) {
		$('.bg video').css({
			'left': '0',
			'top': -(w/852*480-h)*0.5+'px',
			'-webkit-transform': 'scale('+w/852+')',
			'-webkit-transform-origin': 'left top',
			'-moz-transform': 'scale('+w/852+')',
			'-moz-transform-origin': 'left top',
			'transform': 'scale('+w/852+')',
			'transform-origin': 'left top'
		});
	}
	else {
		$('.bg video').css({
			'left': -(h/480*852-w)*0.5+'px',
			'top': '0',
			'-webkit-transform': 'scale('+h/480+')',
			'-webkit-transform-origin': 'left top',
			'-moz-transform': 'scale('+h/480+')',
			'-moz-transform-origin': 'left top',
			'transform': 'scale('+h/480+')',
			'transform-origin': 'left top'
		});
	}
}
function catalogLi() {
	$('.catalog ul li:nth-child(8n+1), .catalog ul li:nth-child(8n+2), .catalog ul li:nth-child(8n+3), .catalog ul li:nth-child(8n+6), .catalog ul li:nth-child(8n+7), .catalog ul li:nth-child(8n+8)').css({
		'width': (Math.ceil($('.wrapper').width()-9)/7)*2+'px',
		'margin-right': '4px'
	});
	$('.catalog ul li:nth-child(8n+4), .catalog ul li:nth-child(8n+5)').css({
		'width': Math.ceil($('.wrapper').width()-9)/7+'px',
		'margin-right': '4px'
	});
}
$(document).ready(function() {
	if ( $('.carousel').length > 0 ) {
		$('.carousel').jcarousel({
			scroll: 1,
			animation: 500,
			wrap: 'circular'
		});
	}
	if ( $('.bg').length > 0 ) {
		videoBg();
	}
	if ( $('.catalog').length > 0 ) {
		$('.catalog ul li').each(function() {
			$(this).css({
				'background': 'url("'+$(this).find('img').attr('src')+'") no-repeat center center',
				'-webkit-background-size': 'cover',
				'-moz-background-size': 'cover',
				'-o-background-size': 'cover',
				'background-size': 'cover'
			});
		});
		catalogLi();
		$('.catalog ul li').hover(
			function() {
				$(this).find('.pre').stop(true,true).fadeOut(300);
				$(this).find('.full p').css({
					'width': $(this).outerWidth()-40+'px',
					'margin-top': -$(this).find('.full p').outerHeight()/2+2+'px'
				});
				$(this).find('.full').stop(true,true).animate({
					'top': '0'
				}, 300);
			},
			function() {
				$(this).find('.full').stop(true,true).animate({
					'top': '297px'
				}, 300);
				$(this).find('.pre').stop(true,true).fadeIn(300);
			}
		);
	}
});
$(window).resize(function() {
	if ( $('.bg').length > 0 ) {
		videoBg();
	}
	if ( $('.catalog').length > 0 ) {
		catalogLi();
	}
});