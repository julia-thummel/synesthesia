$(document).ready(function(){

//audio

  //get mouse position
  $( document ).on( "mousemove", function( event ) {
    var mousePosX = event.pageX;
  });
  //end


  var left = document.getElementById("left");
  var right = document.getElementById("right");


    // play on continue
    function playLeft(){
       left.play();
    }

    function playRight(){
       right.play();
    }

    $(".continue").click(function(){
      left.play();
      right.play();
    });

    $(".back, .one").click(function(){
      left.pause();
      right.pause();
    });
    //end


    var thisWidth = $(window).width();
    var half = (thisWidth / 2);

    //volume based on mouse position

    $(document).mousemove(function(){
      mousePosX = (half - mouseX);
      var vol = ((mousePosX) / thisWidth);
      var left = document.getElementById("left");
      var right = document.getElementById("right");
      left.volume = vol;
      right.volume = 1-vol;
      // console.log(left.volume);
      // console.log(right.volume);
      // console.log(mousePosX);
      // console.log(thisWidth);
      // console.log(vol);
    });
    //end




});
