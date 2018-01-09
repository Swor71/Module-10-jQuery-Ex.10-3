$(function(){
	var carousel = $('#carousel');
	var photos = $('.photos');
	var dots = $('.dots');

	photos.find('li').each(function(){
		dots.append('<li></li>');
	});

	var dot = dots.find('li');
	dot.first().addClass('active');

	dot.click(function(){
		target = $(this).index();
		changeSlide(target);
	});

	function changeSlide(target){
		photos.stop().animate({'left':-1200 * target});
		dot.removeClass('active').eq(target).addClass('active');
	};

	carousel.find('#arrowRight').click(function(){
		target = dot.siblings('.active').index();
		target == dot.length - 1 ? target = 0 : target += 1;
		changeSlide(target);
	});

	carousel.find('#arrowLeft').click(function(){
		target = dot.siblings('.active').index();
		target ==  0 ? target = 4 : target -=1;
		changeSlide(target);
	});

});

