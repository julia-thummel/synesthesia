$(document).ready(function(){


  // var currentScroll = $(window).scrollTop();
  // var previousDestTop = 0;
  //
  // jQuery.fn.extend({
  //     getScrollDirection: function (currentScroll) {
  //       var lastScroll = 0;
  //       var direction = currentScroll > lastScroll ? 'down' : 'up';
  //       currentScroll = $(window).scrollTop();
  //
  //       lastScroll = currentScroll;
  //
  //       //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
  //       previousDestTop = currentScroll;
  //
  //       return direction;
  //     }
  // });
  //
  // $(window).scroll(function() {
  //   var scrollDirection = getScrollDirection(currentScroll);
  //   console.log(scrollDirection);
  // });





//Menu Slider
  jQuery.fn.extend({
      slideIn: function () {
        $(this).animate({left: "0%"}, {easing: "swing", queue: false, duration: 100});
        $(this).removeClass("slide");
      }
  });

  jQuery.fn.extend({
      slideOut: function () {
        $(this).animate({left: "-27%"}, {easing: "swing", queue: false, duration: 100});
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
// end



//assign individual letter id
$(function(){
  $('h1').each(function(){
      var txt = $(this).text();
      var html = '';
      for (i in txt){
          html = html + '<span id='+txt[i]+'>' + txt[i] + '</span>';
      }
      // Put the generated HTML back in the document.
      $(this).html(html);
    });
});
//end




$(function(){
  $('#y').hover(function(){
    $(this).animate({color: "yellow"}, {easing: "swing", queue: false, duration: 100});
    console.log("hover")
    }, function(){
    $(this).css("color", "black");
  });
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
