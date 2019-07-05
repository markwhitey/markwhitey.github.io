$(window).on('scroll', function() {
	if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 50px
		$('#return-top').addClass('visible');    // Fade in the arrow
	} else {
		$('#return-top').removeClass('visible');   // Else fade out the arrow
	}
});
$('#return-top').on('click', function(e) {      // When arrow is clicked
	$('body,html').animate({
		scrollTop : 0                       // Scroll to top of body
	}, 800);
});