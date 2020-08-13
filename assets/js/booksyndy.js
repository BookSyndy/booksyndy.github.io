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
		if (this.hash !== "") {

		event.preventDefault();

		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(hash).offset().top - 55 },750);
		}
	});
	
	$('#logo').on('click', function(){
		if (this.hash !== "") {
		event.preventDefault();

		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(hash).offset().top - 55 },750);
		}
	});

});

function changeImage(imgName) {
	image=document.getElementById('imgDisp');
	image.src = imgName;
}

// $('.step').click(function(){
// 	$(this).toggleClass('clicked');
// });