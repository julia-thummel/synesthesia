$(document).ready(function(){


  function slideOut() {
    $(".menuContainer").animate({left: "-25.5%"}, {easing: "swing", queue: false, duration: 10000});
      if (!$(".menuContainer").hasClass("slideOut")) {
        $(".menuContainer").addClass("slide");
      };
    };

  function slideIn() {
    $(".menuContainer").animate({left: "0%"}, {easing: "swing", queue: false, duration: 10000});
      if (!$(".menuContainer").hasClass("slideOut")) {
        $(".menuContainer").removeClass("slide");
      };
    };




  $(".menuIcon").click(function() {
    if (!$(".menuContainer").hasClass("slide")) {
      $(".menuContainer").slideOut();
    };
    if ((".menuContainer").hasClass("slide")) {
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
