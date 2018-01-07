$(function(){
	var carouselList = $('#carousel ul');

	//setInterval(changeSlideLeft, 3000);
	
	$('#arrowRight').click(function() {
		changeSlideLeft();
	});

	function changeSlideLeft(){
		carouselList.animate({'marginLeft':-1200}, 500, moveSlideLeft());
	};

	function moveSlideLeft(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};


	$('#arrowLeft').click(function() {
		changeSlideRight();
	});

	function changeSlideRight(){
		carouselList.animate({'marginLeft':1200}, 500, moveSlideRight());

	};

	function moveSlideRight(){
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');

		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	};
});

