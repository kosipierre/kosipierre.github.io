$(document).ready(function() {

// added JS comment for testing dev branch

// Scolling About Me Section
  $("#Skills").on("click", function(event)
    {
        alert("Skills Has Been Clicked");

        //
        // a = $("#info1");
        // b = $("#infoA");
        //
        // var awardStatus = "1";
        // if (awardStatus == "1") {
        //
        //   $(a).fadeTo("slow", 100)
        //
        //   %(a).animate( {
        //     opacity: 0,
        //     left: "200px",
        // };

        // if ($(".skillClass").is(':hidden')) {
        // $(".skillClass").show("slide", { direction: "down" }, 1000);
        // } else {
        // $(".skillClass").hide(1000);
        // $("#info1").toggle( "slow", function() {
        //     // Animation complete.
        // });

        $(".skillClass").fadeOut("slow");
      }

// ENd of Scrolling About Me Section...


  $("#continue, #navHome, #navAbout, #navContact, #navWork").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  }); //end function

  //VIdeo on Hover Section

  var figure = $(".videoo").hover(hoverVideo, hideVideo );

  function hoverVideo(e) {
      $('video', this).get(0).play();
  }

  function hideVideo(e) {
      $('video', this).get(0).pause();
  }

});
