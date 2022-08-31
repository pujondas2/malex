(function ($) {
"use strict";

// header
const mobileMenu = document.querySelector('.mobile-menu'),
mainMenu = document.querySelector('.main-menu'),
searchIcon = document.querySelector('.search-icon'),
searchBox = document.querySelector('.search-box');

// mobile menu
mobileMenu.addEventListener('click', ()=> {
	mobileMenu.classList.toggle('active');
	mainMenu.classList.toggle('active');
	document.body.classList.toggle('hidden-scrolling');
})

// search
searchIcon.addEventListener("click", ()=> {
	mobileMenu.classList.toggle('none');
	searchBox.classList.toggle('show');
	document.body.classList.toggle('hidden-scrolling');
})



// data background image
$("[data-background]").each(function(){
	$(this).css("background-image", "url(" + $(this).attr('data-background') + ")")
});

$("[data-bg-color]").each(function(){
	$(this).css("background", $(this).attr('data-bg-color'))
});

$('.brand-active').slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 780,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

// testimonial slider
$('.testimonial-active').slick({
	dots: true,
	infinite: true,
	speed: 300,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		}
	  },
	  {
		breakpoint: 785,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });


// scrollToTop
// $.scrollUp({
// 	scrollName: 'scrollUp', // Element ID
// 	topDistance: '900', // Distance from top before showing element (px)
// 	topSpeed: 3000, // Speed back to top (ms)
// 	animation: 'fade', // Fade, slide, none
// 	animationInSpeed: 200, // Animation in speed (ms)
// 	animationOutSpeed: 200, // Animation out speed (ms)
// 	scrollText: '<i class="fas fa-long-arrow-up"></i>', // Text for element
// 	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
// });

})(jQuery);