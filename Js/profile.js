$(document).ready(function(){

// Scolling About Me Section



    var skills = $(".skillClass");
    var edu = $(".eduClass");
    var awards = $(".awdClass");

  $("#Skills").on("click", function(event)
    {
      // alert("has Been Clickd");

      $("#Skills").css('font-weight', "bold");
      $("#Education").css('font-weight', "normal");
      $("#Awards").css('font-weight', "normal");


      if ($(skills).is(":hidden")) {

        if ($(edu).is(":visible")) {
          $(edu).animate({opacity:0});
          $(edu).toggle("slow");
        }

        if ($(awards).is(":visible")) {
          $(awards).animate({opacity:0});
          $(awards).toggle("slow");
        }

        $(skills).animate({opacity:100});
        $(skills).toggle("slow");

      }


    });

    $("#Education").on("click", function(event)
      {
        // alert("has Been Clickd");


        $("#Education").css('font-weight', "bold");
        $("#Skills").css('font-weight', "normal");
        $("#Awards").css('font-weight', "normal");

        if ($(edu).is(":hidden")) {

          if ($(skills).is(":visible")) {
            $(skills).animate({opacity:0});
            $(skills).toggle("slow");
          }

          if ($(awards).is(":visible")) {
            $(awards).animate({opacity:0});
            $(awards).toggle("slow");
          }

          $(edu).animate({opacity:100});
          $(edu).toggle("slow");
        }

      });

      $("#Awards").on("click", function(event)
        {
          // alert("has Been Clickd");


          $("#Awards").css('font-weight', "bold");
          $("#Skills").css('font-weight', "normal");
          $("#Education").css('font-weight', "normal");

          if ($(awards).is(":hidden")) {

            if ($(edu).is(":visible")) {
              $(edu).animate({opacity:0});
              $(edu).toggle("slow");
            }

            if ($(skills).is(":visible")) {
              $(skills).animate({opacity:0});
              $(skills).toggle("slow");
            }

            $(awards).animate({opacity:100});
            $(awards).toggle("slow");
          }

        });

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
