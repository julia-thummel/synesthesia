$(document).ready(function(){


//Menu Slider
  jQuery.fn.extend({
      slideIn: function () {
        $(this).animate({left: "0%"}, {easing: "swing", queue: false, duration: 100});
        $(this).removeClass("slide");
      }
  });

  jQuery.fn.extend({
      slideOut: function () {
        $(this).animate({left: "-26%"}, {easing: "swing", queue: false, duration: 100});
        $(this).addClass("slide");
      }
  });

  $(".menuIcon").click(function() {
    if (!$(".menuContainer").hasClass("slide")) {
      $(".menuContainer").slideOut()
    }
    else {
      $(".menuContainer").slideIn();
    };
  });







  // //scroll circle 1
  //   $(".arrow").find("a").click(function(e) {
  //       e.preventDefault();
  //       var section = $(this).attr("href");
  //       $("html, body").animate({
  //           scrollTop: $(section).offset().top
  //       });
  //   });





});
