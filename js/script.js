// Плавний Якорь
$(document).ready(function(){
    $(".btn").on("click","a", function (event) { //обєкто по якому клікаєм
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500); // 1500 - швидкість скорла
    });
});


// Slick-slider
$(document).ready(function(){
  $('.slider__wrapper').slick({
     dots: false, // ідекатори (кружки)
     arrows: true,// стрілки
     prevArrow: "<div class='slider__arrows_item slider__arrows_left'><img src='img/icons/arrow_right.png' alt='slider arrow'></div>",// стрілка назад
     nextArrow: "<div class='slider__arrows_item slider__arrows_right'><img src='img/icons/arrow_left.png' alt='slider arrow'></div>",// стралка вперед
	  infinite: true,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 1,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  // variableWidth: true,
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});


$(document).ready(function(){
  $('.works__slider').slick({
     dots: false, // ідекатори (кружки)
     arrows: true,// стрілки
     prevArrow: "<div class='works__arrow'><img src='img/icons/arrow_right.png' alt='slider arrow'></div>",// стрілка назад
     nextArrow: "<div class='works__arrow'><img src='img/icons/arrow_left.png' alt='slider arrow'></div>",// стралка вперед
	  infinite: true,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 3,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  // variableWidth: true,
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});

$(document).ready(function(){
  $('.spring__wrapper').slick({
     dots: false, // ідекатори (кружки)
     arrows: false,// стрілки
    /* prevArrow: "<div class='works__arrow'><img src='img/icons/arrow_right.png' alt='slider arrow'></div>",// стрілка назад
     nextArrow: "<div class='works__arrow'><img src='img/icons/arrow_left.png' alt='slider arrow'></div>",// стралка вперед*/
	  infinite: true,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 3,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  variableWidth: true,
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
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
	  ]
  });
});

$(document).ready(function(){
  $('.services__wrapper').slick({
     dots: false, // ідекатори (кружки)
     arrows: false,// стрілки
    /* prevArrow: "<div class='works__arrow'><img src='img/icons/arrow_right.png' alt='slider arrow'></div>",// стрілка назад
     nextArrow: "<div class='works__arrow'><img src='img/icons/arrow_left.png' alt='slider arrow'></div>",// стралка вперед*/
	  infinite: true,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 3,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  // variableWidth: true,
	  asNavFor: '.services__videos',
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        asNavFor: '.services__videos',
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        asNavFor: '.services__videos',
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        asNavFor: '.services__videos',
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});

$(document).ready(function(){
  $('.services__videos').slick({
     dots: false, // ідекатори (кружки)
     arrows: false,// стрілки
    /* prevArrow: "<div class='works__arrow'><img src='img/icons/arrow_right.png' alt='slider arrow'></div>",// стрілка назад
     nextArrow: "<div class='works__arrow'><img src='img/icons/arrow_left.png' alt='slider arrow'></div>",// стралка вперед*/
	  infinite: true,// безкінечна прокрутка
	  autoplay: true,// автоматична прокрутка
	  autoplaySpeed: 5000,// швидкість скрола
	  slidesToShow: 3,// скільки показується слайдерів
	  slidesToScroll: 1,// по скільки скролисьтся
	  // variableWidth: true,
	  asNavFor: '.services__wrapper',
	  responsive: [// адаптив
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        asNavFor: '.services__wrapper',
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        asNavFor: '.services__wrapper',
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        asNavFor: '.services__wrapper',
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});



$(document).ready(function () {
	$('.header__contacts_btn').click(function () {
		$('.popup').slideToggle();
		if ($('.popup').css('display', 'block')) {
			$('body').css('overflow-y', 'hidden');
			$('.darkbg').css('display', 'block');
		}
	});

	$('.popup__close').click(function() {
		$('.popup').slideToggle();
		$('body').attr('style', '');
			$('.darkbg').attr('style', '');
	});
});
new WOW().init();
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});