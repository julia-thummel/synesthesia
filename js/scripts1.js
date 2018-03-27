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
    $(this).animate({"background-color":"white", "color":"#a5a5a5"}, {easing: "swing", queue: false, duration: 300});
    }, function(){
    $(this).animate({"background-color":"transparent", "color":"white"}, {easing: "swing", queue: false, duration: 300});
});
// end



// set active section
$(".sectionName").find(".one").addClass("active");

$(".one").click(function(){
  $(".sectionName").find(".sn").removeClass("active");
  $(".sectionName").find(".one").addClass("active");
});

$(".two").click(function(){
  $(".sectionName").find(".sn").removeClass("active");
  $(".sectionName").find(".two").addClass("active");
});

$(".three").click(function(){
  $(".sectionName").find(".sn").removeClass("active");
  $(".sectionName").find(".three").addClass("active");
});
// end


// continue button
$(".continue").click(function(){
  $(".sectionName").find(".one").removeClass("active");
  $(".sectionName").find(".two").addClass("active");
  $(".blackSquare").delay(1200).animate({
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%"},
    {easing: "swing", queue: true, duration: 800});
  $(".introContent").delay(300).animate({opacity: 0,}, {queue: true, duration: 300});
  $(".button").delay(300).animate({opacity: 0,}, {queue: true, duration: 300});
  $("#introduction").delay(2000).queue(function (next) {
    $(this).hide();
    next();
  });
  $(".remain").css({"z-index": "125", "color": "white"});
});

//end



});
