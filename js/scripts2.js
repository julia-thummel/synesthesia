$(document).ready(function(){


      var bassAudio = document.getElementById("bassAudio");
      var vocalsAudio = document.getElementById("vocalsAudio");
      var drumsAudio = document.getElementById("drumsAudio");
      var clarinetAudio = document.getElementById("clarinetAudio");

      bassAudio.muted = true;
      vocalsAudio.muted = true;
      drumsAudio.muted = true;
      clarinetAudio.muted = true;

      $("#clarinetVisual").hide();
      $("#drumsVisual").hide();
      $("#bassVisual").hide();
      $("#vocalsVisual").hide();

    $(".continue").click(function(){
      $("#bass").children(".filledBubble").css({"opacity": "1"});
      $("#bass").addClass("selected");
      bassAudio.muted = false;
      $("#bassVisual").show();
    });


    $(".back, .one").click(function(){
      bassAudio.muted = true;
      vocalsAudio.muted = true;
      drumsAudio.muted = true;
      clarinetAudio.muted = true;
    });



    $(".animate-me").each(function (){
      var size = Math.random()*250;
      var posX = Math.random()* ($( window ).width()) ;
      var posY = Math.random()* ($( window ).height()) ;
      $(this).css({"left": posX +"px", "top": posY +"px", "width": (size/2), "height": size});
      // $(this).css({"left": Math.random()*1300, "width": size, "height": size});
    });

    function clarinetMove() {
      $(".animate-me").each(function (){
        var position = $(this).position();
        $(this).data("position", position);
        $(this).animate({left: position.left + Math.random()*50, top: position.top + Math.random()*50, opacity: Math.random()}, {easing: "swing", queue: true, duration: 2000});
        $(this).animate({left: position.left - Math.random()*50, top: position.top - Math.random()*50, opacity: Math.random()}, {easing: "swing", queue: true, duration: 2000});
      });
      window.setTimeout(clarinetMove, 2000);
    };







    //bass
      $("#bass").children(".filledBubble").click(function() {
        if (!$("#bass").hasClass("selected")) {
          $(this).animate({opacity: "1"}, {easing: "swing", queue: false, duration: 100});
          $("#bass").addClass("selected");
          $("#bassVisual").show();
          bassAudio.muted = false;
        }
        else {
          $(this).animate({opacity: "0"}, {easing: "swing", queue: false, duration: 100});
          $("#bass").removeClass("selected");
          $("#bassVisual").hide();
          bassAudio.muted = true;
        };
      });
    //end


    //vocals
    $("#vocals").children(".filledBubble").click(function() {
      if (!$("#vocals").hasClass("selected")) {
        $(this).animate({opacity: "1"}, {easing: "swing", queue: false, duration: 100});
        $("#vocals").addClass("selected");
        $("#vocalsVisual").show();
        vocalsAudio.muted = false;
      }
      else {
        $(this).animate({opacity: "0"}, {easing: "swing", queue: false, duration: 100});
        $("#vocals").removeClass("selected");
        $("#vocalsVisual").hide();
        vocalsAudio.muted = true;
      };
    });
    //end


    //drums
    $("#drums").children(".filledBubble").click(function() {
      if (!$("#drums").hasClass("selected")) {
        $(this).animate({opacity: "1"}, {easing: "swing", queue: false, duration: 100});
        $("#drums").addClass("selected");
        $("#drumsVisual").show();
        drumsAudio.muted = false;
      }
      else {
        $(this).animate({opacity: "0"}, {easing: "swing", queue: false, duration: 100});
        $("#drums").removeClass("selected")
        $("#drumsVisual").hide();
        drumsAudio.muted = true;
      };
    });
    //end


    //clarinet
    $("#clarinet").children(".filledBubble").click(function() {
      if (!$("#clarinet").hasClass("selected")) {
        $(this).animate({opacity: "1"}, {easing: "swing", queue: false, duration: 100});
        $("#clarinet").addClass("selected");
        $("#clarinetVisual").show();
        clarinetAudio.muted = false;
        clarinetMove();
      }
      else {
        $(this).animate({opacity: "0"}, {easing: "swing", queue: false, duration: 100});
        $("#clarinet").removeClass("selected");
        $("#clarinetVisual").hide();
        clarinetAudio.muted = true;
      };
    });
    //end

    var audio = document.getElementsByTagName("AUDIO");





});
