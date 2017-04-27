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
			$("div.circular--landscape").show();
		} else {
			$("div.circular--landscape").hide();
		}
	});
});