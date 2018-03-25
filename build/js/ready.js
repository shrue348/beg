$(function(){
	$('.main_menu__toggle').on('click', function(){
		$(this).toggleClass('active')
		$('.main_menu').toggleClass('active')
		$('.main_menu__overlay').toggleClass('active')
	})
})


$(function(){
	baguetteBox.run('.baguetteBox');
})


	$(function(){
		$('.article_slider').slick({
			slidesToShow: 3,
			initialSlide: 1,
			infinite: false,

			prevArrow: '<a class="left carousel-control" href="javascript:;"><i class="icon-angle-left"></i></a>',
			nextArrow: '<a class="right carousel-control" href="javascript:;"><i class="icon-angle-right"></i></a>',
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
						slidesToShow: 2
		      }
		    }
		  ]
		});


	})