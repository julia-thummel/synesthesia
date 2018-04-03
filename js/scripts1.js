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
$('.button').hover(function(){
    console.log("hover");
    $(this).animate({"background-color":"white", "color":"#a5a5a5"}, {easing: "swing", queue: false, duration: 300});
    }, function(){
    $(this).animate({"background-color":"transparent", "color":"white"}, {easing: "swing", queue: false, duration: 300});
});

$('.back').hover(function(){
    console.log("hover");
    $(this).animate({"background-color":"white", "color":"#a5a5a5"}, {easing: "swing", queue: false, duration: 300});
    }, function(){
    $(this).animate({"background-color":"transparent", "color":"white"}, {easing: "swing", queue: false, duration: 300});
});
// end



// set active section
$(".sectionName").find(".one").addClass("active");

jQuery.fn.extend({
    makeActive: function () {
      $(".sectionName").find(".sn").removeClass("active");
      $(this).addClass("active");
    }
});

$(".one").click(function(){
  $(".one").makeActive();
});

$(".two").click(function(){
  $(".two").makeActive();
});

$(".three").click(function(){
  $(".three").makeActive();
});
// end




$("#interaction1, .back").hide();



// continue button
jQuery.fn.extend({
    continueTrans: function () {
      $(".blackSquare").css({"z-index": "110"});
      $(".two").makeActive();
      $(".blackSquare").delay(300).animate({opacity: 1}, {queue: false, duration: 800});
      $(".blackSquare").delay(200).animate({
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100%"},
        {easing: "swing", queue: true, duration: 500});
        $(".introContent, .button, .continue").delay(400).animate({opacity: 0,}, {queue: true, duration: 300});
        $("#introduction, .mainFrame").delay(1500).queue(function (next) {
          $(this).hide();
          next();
        });
        $(".remain").css({"color": "white"});
        $(".blackSquare").delay(800).queue(function (next) {
          $(this).fadeOut(500);
          next();
        });
        $("#interaction1, .back").delay(800).queue(function (next) {
          $(this).show();
          next();
        });
        $("#interaction1").addClass("current");
    }
});

$(".continue").click(function(){
  $(".continue").continueTrans();
});

$(".two").click(function(){
  $(".two").continueTrans();
});
//end



//back to intro
jQuery.fn.extend({
    backToIntro: function () {
      $(".blackSquare").delay(100).queue(function (next) {
        $(this).fadeIn(500);
        $(this).delay(500).animate({
          top: "6%",
          left: "3.5%",
          width: "93%",
          height: "88%"},
          {easing: "swing", queue: true, duration: 500});
        $(this).delay(200).animate({opacity: 0,}, {queue: true, duration: 300});
        next();
      });
      $("#interaction1, #interaction2, .back").delay(600).queue(function (next) {
        $(this).hide();
        next();
      });
      $("#introduction, .mainFrame, .introContent").delay(600).queue(function (next) {
        $(".introContent").animate({opacity: 1,}, {queue: true, duration: 300});
        $(this).show();
        $(".remain").css({"color": "#201f1f"});
        $(".button, .continue").delay(1800).animate({opacity: 1,}, {queue: true, duration: 300});
        next();
      });
      setTimeout( function(){
        $(".blackSquare").css({"z-index": "100"})
      },1800);
      $(".one").makeActive();
      $("#interaction1").removeClass("current");
    }
});

$(".back").click(function(){
  $(".back").backToIntro();
});

$(".one").click(function(){
  $(".one").backToIntro();
});
//end


var zero = "#fff06a";
var one = "#e55b1b";
var two = "#7c6b62";
var three = "#93528a";
var four = "#fff06a";
var five = "#fff06a";
var six = "#fff06a";
var seven = "#fff06a";
var eight = "#fff06a";
var nine = "#fff06a";
var a = "#fff06a";
var b = "#fff06a";
var c = "#fff06a";
var d = "#fff06a";
var e = "#fff06a";
var f = "#fff06a";
var g = "#fff06a";
var h = "#fff06a";
var i = "#fff06a";
var j = "#fff06a";
var k = "#fff06a";
var l = "#fff06a";
var m = "#fff06a";
var n = "#fff06a";
var o = "#fff06a";
var p = "#fff06a";
var q = "#fff06a";
var r = "#fff06a";
var s = "#fff06a";
var t = "#fff06a";
var u = "#fff06a";
var v = "#fff06a";
var w = "#fff06a";
var x = "#fff06a";
var y = "#fff06a";
var z = "#fff06a";

var keyNum = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87, 88, 89, 90
];

var names = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z"
];

var colors = [
  zero, one, two, three, four, five, six, seven, eight, nine,
  a, b, c, d, e, f, g, h, i, j,
  k, l, m, n, o, p, q, r, s, t,
  u, v, w, x, y, z
];


window.onkeydown = function(event) {
  for (i=0; i < keyNum.length; i++) {
    if (event.keyCode == keyNum[i]) {
      var name = names[i];
      var color = colors[i];
    }
  }
  if ($("#interaction1").hasClass("current")) {
    $(".keyboardIcon, .useKeyboard").fadeOut(300);
    $(".g").removeClass("activeLetter");
    $(".g").addClass("backgroundLetter");
    var grapheme = $("<h1 class='g activeLetter'></h1>").text(name);
    $("#interaction1").append(grapheme);
    $(".activeLetter").css({"color": color});
  };
};




});
