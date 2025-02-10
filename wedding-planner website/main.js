$(document).ready(function(){


 	$(".hamburger-menu").click(function(){
		
		$(".header-links").slideToggle();
		
    });

    $('.img-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$(window).on("scroll",function(){

		let heightWindow = $(window).scrollTop();

		if (heightWindow > 800) {
			$("#scrollTop").fadeIn();
		}else{
			$("#scrollTop").fadeOut();
		}

		/*console.log(heightWindow);*/

	});

	$("#scrollTop").click(function(){
		$("html, body").animate({
			scrollTop: 0
		});
	});

	$("#scrollTop").mouseenter(function(){
		$("#scrollTop").css("background-color","#dd9293");
	});

	$("#scrollTop").mouseleave(function(){
		$("#scrollTop").css("background-color","#1a1111");
	});

});