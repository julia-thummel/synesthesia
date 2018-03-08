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

var num = Math.floor(Math.random()*26) + 1;

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



//assign individual letter color
  $("h1").hover(function(){
      $(this).children("#S").animate({color: "#107f17"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#y").animate({color: "#d1e519"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#n").animate({color: "#04541e"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#e").animate({color: "#efea4a"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#s").animate({color: "#107f17"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#t").animate({color: "#175e51"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#h").animate({color: "#f9eba2"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#i").animate({color: "#9fc9f9"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#a").animate({color: "#236ec4"}, {easing: "swing", queue: false, duration: 100});
    }, function(){
      $(this).children("#S").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#y").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#n").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#e").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#s").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#t").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#h").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#i").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
      $(this).children("#a").animate({color: "black"}, {easing: "swing", queue: false, duration: 100});
  });
//end



// set height to window height
jQuery.fn.extend({
    setHeight: function () {
      var height = window.innerHeight;
      $(this).css("height", height);
    }
});

$("#introduction").setHeight();
$("#interaction1").setHeight();
$("#interaction2").setHeight();
//end



// button hover
$('button').hover(function(){
    console.log("hover");
    $(this).css({"background-color":"white", "color":"#a5a5a5"});
    }, function(){
    $(this).css({"background-color":"transparent", "color":"white"});
});
// end



});
