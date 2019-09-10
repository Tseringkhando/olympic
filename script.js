function clickSearch() {
	 $(".search-topnav").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".search-topnav").val("");
}

// language fade on scroll
$(window).on("scroll", function(e) {
	if ($(window).scrollTop() >= $(".languages").height()) 
		{
			$(".languages").css('opacity','0');
			// $(".menu-lists").css('top','unset');
			
			$(".logoimage").css('height','85%');
			$("header").css('height','15%');

		}
	else {

		$(".languages").css('opacity','1');
		// $(".menu-lists").css('top','50%');
		$("header").css('height','15%');
		$(".logoimage").css('height','85%');
		

	}

});



