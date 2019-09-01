
// language fade on scroll
$(window).on("scroll", function(e) {
	if ($(window).scrollTop() >= $(".languages").height()) 
		{
			$(".languages").fadeOut();
			// $(".menu-lists").css('top','unset');
			$("header").css('height','13%');
			$(".logoimage").css('height','13vh');

		}
	else {

		$(".languages").fadeIn();
		// $(".menu-lists").css('top','50%');
		$("header").css('height','21%');
		$(".logoimage").css('height','18vh');
		

	}

});


function clickSearch() {
	 $(".search-topnav").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".search-topnav").val("");
}
