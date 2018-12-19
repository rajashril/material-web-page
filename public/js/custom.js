/*sticky header*/
window.onscroll = function() {stickyHeader()};

var navbar = document.getElementById("sticky-top");
var sticky = navbar.offsetTop;

function stickyHeader() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		var stickyHeight = jQuery(".sticky").outerHeight();
		jQuery(".sticky").next("section").css("padding-top", stickyHeight+"px");
	} else {
		navbar.classList.remove("sticky");
	}
}

jQuery(document).ready(function(){
	/*Testimonial slider*/
	$('#testimonial-slider').slick({
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev waves-effect waves-dark btn rounded"><i class="icon-arrow-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next waves-effect waves-dark btn rounded"><i class="icon-arrow-right"></i></button>'
	});

	/*Popular destination slider*/
	$('.popular-destination').slick({
		slidesToShow: 2,
		arrows: false,
		centerMode: true,
		centerPadding: '30px',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: false,					
					slidesToShow: 1
				}
			}
		]
	});

	/*Start and end date calender*/
	$('.calender').datepicker({
		allowInputToggle: true
	});
	
	/*Show hide search form*/
	$('.collapsible').collapsible();

	/*mobile menu*/
	$('.sidenav').sidenav();

	/* show overlay */
	var initialht = $(".shadow-box .content").outerHeight();
	
	$(".shadow-box").hover(function(){		
		var boxht = $(this).innerHeight();
		$(this).css("height",boxht+"px");
		$(this).find(".shadow-box-img").css("height",boxht+"px");
		$(this).find(".content").addClass("overlay");
	}, function () {
		var boxht = $(this).innerHeight() - initialht;
		$(this).find(".shadow-box-img").css("height",boxht+"px");
		$(this).find(".content").removeClass("overlay");
	});
});