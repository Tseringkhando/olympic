function clickSearch() {
	 $(".search-topnav").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".search-topnav").val("");
}

// language fade on scroll
$(window).on("scroll", function(e) {
	if ($(window).scrollTop() >= $(".languages").height()) 
		{
			$(".languages").fadeOut();
			// $(".menu-lists").css('top','unset');
			
			$(".logoimage").css('height','13vh');
			$("header").css('height','13%');

		}
	else {

		$(".languages").fadeIn();
		// $(".menu-lists").css('top','50%');
		$("header").css('height','15%');
		$(".logoimage").css('height','85%');
		

	}

});



