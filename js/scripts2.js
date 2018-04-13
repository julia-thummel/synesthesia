$(document).ready(function(){



    var bass = $("<audio loop id='bassAudio'><source src='../viscomp/bass.mp3' type='audio/mp3'></audio>");
    var vocals = $("<audio loop id='vocalsAudio'><source src='../viscomp/vocals.mp3' type='audio/mp3'></audio>");
    var drums = $("<audio loop id='drumsAudio'><source src='../viscomp/drums.mp3' type='audio/mp3'></audio>");
    var clarinet = $("<audio loop id='clarinetAudio'><source src='../viscomp/clarinet.mp3' type='audio/mp3'></audio>");



    //select different sounds
    $("#bass").children(".filledBubble").css({"opacity": "1"});
    $("#bass").addClass("selected");
    $("#bass").append(bass);
    var bassAudio = document.getElementById("bassAudio");
    bassAudio.pause();

    //bass
      $("#bass").children(".filledBubble").click(function() {
        if (!$("#bass").hasClass("selected")) {
          $(this).animate({opacity: "1"}, {easing: "swing", queue: false, duration: 100});
          $("#bass").addClass("selected");
          $("#bass").append(bass);
          bassAudio.pause();
        }
        else {
          $(this).animate({opacity: "0"}, {easing: "swing", queue: false, duration: 100});
          $("#bass").removeClass("selected");
          $("#bass").remove(bass);
        };
      });
    //end


    //vocals
    $("#vocals").children(".filledBubble").click(function() {
      if (!$("#vocals").hasClass("selected")) {
        $(this).animate({opacity: "1"}, {easing: "swing", queue: false, duration: 100});
        $("#vocals").addClass("selected");
        $("#vocals").append(vocals);
        var vocalsAudio = document.getElementById("vocalsAudio");
        vocalsAudio.pause();
      }
      else {
        $(this).animate({opacity: "0"}, {easing: "swing", queue: false, duration: 100});
        $("#vocals").removeClass("selected");
        $("#vocals").remove(vocals);
      };
    });
    //end


    //drums
    $("#drums").children(".filledBubble").click(function() {
      if (!$("#drums").hasClass("selected")) {
        $(this).animate({opacity: "1"}, {easing: "swing", queue: false, duration: 100});
        $("#drums").addClass("selected");
        $("#drums").append(drums);
        var drumsAudio = document.getElementById("drumsAudio");
        drumsAudio.pause();
      }
      else {
        $(this).animate({opacity: "0"}, {easing: "swing", queue: false, duration: 100});
        $("#drums").removeClass("selected")
        $("#drums").remove(drums);
      };
    });
    //end


    //clarinet
    $("#clarinet").children(".filledBubble").click(function() {
      if (!$("#clarinet").hasClass("selected")) {
        $(this).animate({opacity: "1"}, {easing: "swing", queue: false, duration: 100});
        $("#clarinet").addClass("selected");
        $("#clarinet").append(clarinet);
        var clarinetAudio = document.getElementById("clarinetAudio");
        clarinetAudio.pause();
      }
      else {
        $(this).animate({opacity: "0"}, {easing: "swing", queue: false, duration: 100});
        $("#clarinet").removeClass("selected");
        $("#clarinet").remove(clarinet);
      };
    });
    //end

    var audio = document.getElementsByTagName("AUDIO")[0, 1, 2, 3];



    $(".playButton").click(function() {
      bassAudio.play();
      vocalsAudio.play();
      drumsAudio.play();
      clarinetAudio.play();
      // $(".playButton").hide();
      // $(".resetButton").show();
    });


});
