$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
	$('#navbarNav a').on('click', function(){
        $("#navbarNav").removeClass("show")
		$("#nav-icon4").toggleClass("open")
    });
});