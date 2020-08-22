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

img1=document.getElementById('imgDisp1')
img2=document.getElementById('imgDisp2')
img3=document.getElementById('imgDisp3')

function changeImageDownload(){
	img2.src = './assets/img/profile.png'
	img1.src = './assets/img/download.png'
	img3.src = './assets/img/buy_sell.png'
}

function changeImageSignup(){
	img2.src = './assets/img/buy_sell.png'
	img1.src = './assets/img/profile.png'
	img3.src = './assets/img/download.png'
}

function changeImageEnjoy(){
	img2.src = './assets/img/download.png'
	img1.src = './assets/img/buy_sell.png'
	img3.src = './assets/img/profile.png'
}

$('.step').on('click', function(){
    $('.step').removeClass('selected');
    $(this).addClass('selected');
});

$('.carousel').carousel({
	interval: 7000,
	ride: "carousel",
  })

console.log("Hello there, fellow Inspector")
console.log("Welcome to BookSyndy's website")
console.log("Designed and Developed by Advay Sai Inabathini")