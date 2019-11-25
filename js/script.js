$(document).ready(function() {

    $('#slides').superslides({
      animation: 'slide',
      play: 5000,
      pagination: false
    });

    var typed = new Typed(".typed", {
      strings: ["Student.","Prospective Developer.","Newbie Photographer."],
      typeSpeed: 150,
      loop: true,
      startDelay: 1000,
      showCursor: false
    });


});
