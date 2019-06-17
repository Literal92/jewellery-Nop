/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                           *
 *****************************************************
 */
$(window).load(function() {


    if ($('.loading').length) {
        $('.loading').fadeOut();
    }


    if ($('.fancybox').length) {
        $('.fancybox').fancybox();
    }


    if ($('#faq').length) {
        $('#faq').accordion();
    }


    if ($("#coming-soon-timer").length) {
        jewellaryCounterint();
    }

    if ($("#rangslider").length) {
        rangSliderint();
    }


    $('.showlogin').on('click', function(e) {
        e.preventDefault();
        $('.login').slideToggle("slow");
    });

    $('.showcoupon').on('click', function(e) {
        e.preventDefault();
        $('.checkout_coupon').slideToggle("slow");
    });

    $('#ship-to-different-address-checkbox').on('change', function() {
        if (this.checked) {
            shippingFields.slideToggle('slow');
        } else {
            $('.shipping-fields').slideToggle('slow');
        }
    });

    $('#createaccount').on('change', function() {
        if (this.checked) {
            $('.create-account').slideToggle('slow');
        }
    });

    $('.slider8').bxSlider({
        mode: 'vertical',
        slideWidth: 300,
        minSlides: 3,
        slideMargin: 10,
        pager: false,
    }); 
	
	$('.slider10').bxSlider({
		slideWidth: 200,
		minSlides: 4,
		maxSlides: 3,
		pager: false,
		slideMargin: 10,

	});	
	
	$('.slider9').bxSlider({
        slideWidth: 300,
        minSlides: 3,
        slideMargin: 10,
        pager: false,
    });	

    $('.tablinks').on('click', function() {
        var dataId = $(this).attr('data-id');
        tabCustom(event, dataId);
    });


    $('.viewGrid').on('click', function() {

        document.getElementById('productsgriads').style.display = 'block';
        document.getElementById('productslist').style.display = 'none';
    });

    $('.viewList').on('click', function() {

        document.getElementById('productsgriads').style.display = 'none';
        document.getElementById('productslist').style.display = 'block';
    });

    owlCarouselInit();


});
	

function owlCarouselInit() {

    var nextNav = '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>';
    var prevNav = '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>';


    $('#main-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        navText: [prevNav, nextNav],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('#Partner-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: [prevNav, nextNav],
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    $('#product-items-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: [prevNav, nextNav],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('#product-sidebar-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: [prevNav, nextNav],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}



function rangSliderint() {

    "use strict";

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

}

// Set the date we're counting down to
function jewellaryCounterint() {



    var countDownDate = new Date("dec 24, 2017 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("days").innerHTML = days;

        document.getElementById("hours").innerHTML = hours;

        document.getElementById("minutes").innerHTML = minutes;

        document.getElementById("seconds").innerHTML = seconds;


    }, 1000);
}




function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function tabCustom(evt, dataId) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dataId).style.display = "block";
    evt.currentTarget.className += " active";


}