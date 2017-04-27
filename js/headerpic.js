// Reference:
//http://stackoverflow.com/questions/28816773/making-an-image-appear-after-scrolling-past-header-attempts-not-working 

$(document).ready(function() {
	var contentOffset = getAboutOffset();
				
	function getAboutOffset() {
		var sec = $("div.headlinePic");
		var off = sec.offset();
		var height = sec["0"].clientHeight;
		var total = off.top + height;
		return total;
	}
				
	$(window).resize(function () {
		contentOffset = getAboutOffset();
	});
				
	$(window).scroll(function() {
		var windowTop = $(window).scrollTop();
				
		if (windowTop > contentOffset) {
			$("div.circular--landscape").fadeIn(750);
		} else {
			$("div.circular--landscape").fadeOut(750);;
		}
	});
});