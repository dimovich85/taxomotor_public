// Hamburger
$('.menu-icons').click(function(){
		$('header.header menu').toggleClass('d-block');
		setTimeout(function(){
			$('header.header menu').toggleClass('show');
		}, 100);
		$('#hamburger-ico').toggleClass('visible-toggle');
});


// Modal windows

$('.job-hired button, .best-agreements button, .consult button').click(function(){
		$('.modal-background').removeClass('closed');
});

$('#closer').click(function(){
		$('.modal-background').addClass('closed');
});

// Header-scroll

$(window).scroll(function(){
	var position = $(this).scrollTop();
	if (position >= 650){
		$('header.header').addClass('scroll-header');
	} 
	else{
		$('header.header.scroll-header').removeClass('scroll-header');
	}
});