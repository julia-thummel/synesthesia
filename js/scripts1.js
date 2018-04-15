$(document).ready(function(){



$(".logoWhite").hide();


//Menu Slider
  jQuery.fn.extend({
      slideIn: function () {
        $(this).animate({left: "0%"}, {easing: "swing", queue: false, duration: 100});
        $(this).removeClass("slide");
      }
  });

  jQuery.fn.extend({
      slideOut: function () {
        $(this).animate({left: "-22%"}, {easing: "swing", queue: false, duration: 100});
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




$("#interaction1, #interaction2, .back").hide();



// continue button
jQuery.fn.extend({
    transOne: function () {
      $(".blackSquare").css({"z-index": "110"});
      $(".two").makeActive();
      $(".blackSquare").delay(300).animate({opacity: 1}, {queue: false, duration: 800});
      $(".blackSquare").delay(200).animate({
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100%"},
        {easing: "swing", queue: true, duration: 500});
      $(".introContent, .button, .continue").delay(400).animate({opacity: 0}, {queue: true, duration: 300});
      $("#introduction, .mainFrame, .logo").delay(1500).queue(function (next) {
        $(this).hide();
        $(".logoWhite").show();
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


jQuery.fn.extend({
    transTwo: function () {
      $(".three").makeActive();
      $(".blackSquare").queue(function (next) {
        $(this).fadeIn(500);
        next();
      });
      $("#interaction1").delay(1600).queue(function (next) {
        $(this).hide();
        next();
      });
      $(".blackSquare").delay(1300).queue(function (next) {
        $(this).fadeOut(500);
        next();
      });
      $(".interaction2").delay(2000).queue(function (next) {
        $(this).show();
        next();
      });
      $("#interaction2").delay(1500).show();
      $("#interaction1").removeClass("current");
      $("#interaction2").addClass("current");
    }
});



$(".continue").click(function(){
  $(".continue").transOne();
});

$(".two").click(function(){
  $(".two").transOne();
});

$(".three").click(function(){
  $(".three").transTwo();
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
        $(".logoWhite").hide();
        next();
      });
      $("#introduction, .mainFrame, .logo, .introContent").delay(600).queue(function (next) {
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



//arrays for letter color
var zero = "#16228c";
var one = "#068fce";
var two = "#e81919";
var three = "#139655";
var four = "#b7902d";
var five = "#d132be";
var six = "#ede92d";
var seven = "#f79c13";
var eight = "#0079b2";
var nine = "#184f18";
var a = "#f7c213";
var b = "#e21102";
var c = "#039301";
var d = "#6f912b";
var e = "#fcf046";
var f = "#4f7f50";
var g = "#005901";
var h = "#eaefba";
var i = "#aafffd";
var j = "#8340d6";
var k = "#e21646";
var l = "#4c82e0";
var m = "#20aa8f";
var n = "#1a3823";
var o = "#04068c";
var p = "#ea25d3";
var q = "#d6a4d0";
var r = "#425946";
var s = "#c6482f";
var t = "#8c0505";
var u = "#f7d2eb";
var v = "#e87f06";
var w = "#c1c0bf";
var x = "#9b2b0c";
var y = "#e0d8a1";
var z = "#f93e00";

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
//end


jQuery.fn.extend({
    backgroundAnimate: function () {
      $(this).css({"opacity": "1"});
      $(this).animate({opacity: 0}, {easing: "swing", queue: true, duration: 500});
    }
});


//letters show up on keypress
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
    var posX = Math.random()* $( window ).width();
    var posY = Math.random()* $( window ).height();
    $(".p").css({"left": posX +"px", "top": posY +"px"});
    $(".backgroundLetter").removeClass("g");
    $(".backgroundLetter").removeClass("p");
    var grapheme = $("<h1 class='g p activeLetter'></h1>").text(name);
    $("#interaction1").append(grapheme);
    $(".activeLetter").css({"color": color});
    $("#background").css({"background-color": color});
    $("#background").backgroundAnimate();
    $(".backgroundLetter").css({"color": "white", "opacity": ".5"});
  };
};
//end


//background letter styling
function move() {
  $(".backgroundLetter").each(function (){
    var position = $(this).position();
    $(this).data("position", position);
    $(this).animate({left: position.left + Math.random()*50, top: position.top + Math.random()*50}, {easing: "swing", queue: true, duration: 10000});
    $(this).animate({left: position.left - Math.random()*50, top: position.top - Math.random()*50}, {easing: "swing", queue: true, duration: 10000});
  });
  window.setTimeout(move, 1000);
};

move();
//end







});
