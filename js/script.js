$(document).ready(function() {


    //background changing speed
    $('#slides').superslides({
      animation: 'slide',
      play: 5000,
      pagination: false
    });


    //typed animation via typed.js
    var typed = new Typed(".typed", {
      strings: ["Student.","Prospective Software Engineer.","Newbie Photographer."],
      typeSpeed: 150,
      loop: true,
      startDelay: 1000,      //delay when page is loaded first
      showCursor: false
    });



    //slider-bar show 4 at max
    $('.owl-carousel').owlCarousel({
      loop:true,
      items: 4,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
              items:4
          }
      }
    });


    // to determine position of skills section within the page
    var skillsTopOffset = $(".skillsSection").offset().top;


    //when scrolled
  	$(window).scroll(function() {


      //only start loading animation when skills section is in view
  		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

  			$('.chart').easyPieChart({
  		        easing: 'easeInOut',
  		        barColor: '#fff',
  		        trackColor: false,
  		        scaleColor: false,
  		        lineWidth: 4,
  		        size: 152,
  		        onStep: function(from, to, percent) {
  		        	$(this.el).find('.percent').text(Math.round(percent));
  		        }
  		    });
  		}
  	});



    //for nav section offset
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){
      const body = $("body");

      //if nav section is scrolled past to reach the top of view window
      if($(window).scrollTop() >= navTop){
        //scroll bug fix
        //when class added account the nav offset
        body.css("padding-top",nav.outerHeight() + "px");
        body.addClass("fixedNav"); //make navigation fixed
      }
      //otherwise
      else {
        //when fixed navbar class removed remove the offset
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
      }
     }


});
