//thank you eelslap.com and http://actnormal.co/ for the script!]
(function (window, $, undefined) {
  var app = window.Quentins || (window.Quentins = {});
  var $window = $(window);

  var currentPosition = 0;
  var targetPosition = 0;
  var browserWidth = 0;

  var loadedImages = 0;

  var autorun = function () {
    $("#reverse1")
      .one("load", function () {
        imageLoaded();
      })
      .each(function () {
        if (this.complete) $(this).load();
      });

    $("#reverse2")
      .one("load", function () {
        imageLoaded();
      })
      .each(function () {
        if (this.complete) $(this).load();
      });

    $("#reverse3")
      .one("load", function () {
        imageLoaded();
      })
      .each(function () {
        if (this.complete) $(this).load();
      });

    $("#reverse4")
      .one("load", function () {
        imageLoaded();
      })
      .each(function () {
        if (this.complete) $(this).load();
      });

    $("#reverse1").attr(
      "src",
      "https://cdn.glitch.global/d7d5679c-c45b-4526-a1b5-1a08bf17f34c/reverse1.jpg?v=1649689729132"
    );
    $("#reverse2").attr(
      "src",
      "https://cdn.glitch.global/d7d5679c-c45b-4526-a1b5-1a08bf17f34c/reverse2.jpg?v=1649689729888"
    );
    $("#reverse3").attr(
      "src",
      "https://cdn.glitch.global/d7d5679c-c45b-4526-a1b5-1a08bf17f34c/reverse3.jpg?v=1649689730973"
    );
    $("#reverse4").attr(
      "src",
      "https://cdn.glitch.global/d7d5679c-c45b-4526-a1b5-1a08bf17f34c/reversequentin5.jpg?v=1649803268898"
    );
    //$("#reverse4").attr("src", "images/new3.jpg");

    //startSlap();
  };

  var imageLoaded = function () {
    loadedImages++;

    if (loadedImages == 4) {
      $("#loader").animate({ opacity: 0 }, 500, "linear", function () {
        $("#loader").css("display", "none");
      });
      setTimeout(function () {
        $("#allimages").css("display", "block");
        $("#allimages").animate({ opacity: 1 }, 3000, "linear");
        if (isTouchDevice()) {
          setTimeout(function () {
            $("#introtext").css("display", "block");
            $("#introtext").html("Drag your finger across the screen to slap!");
            $("#introtext").css("display", "block");
            $("#introtext").animate({ opacity: 1 }, 1000, "linear");

            setTimeout(function () {
              $("#introtext").animate(
                { opacity: 0 },
                1000,
                "linear",
                function () {
                  $("#introtext").css("display", "none");
                }
              );
            }, 3000);
          }, 1000);
        }

        startSlap();
      }, 500);
    }
  };

  var startSlap = function () {
    browserWidth = $(window).width();

    setInterval(function () {
      currentPosition += (targetPosition - currentPosition) / 4;
      var currentSlap = (currentPosition / 854) * 194;
      currentSlap = Math.min(194, Math.max(0, currentSlap));
      var pos = Math.round(currentSlap) * -854;

      $("#allimages").css("left", pos);
    }, 30);

    $("body").bind("mousemove", function (e) {
      // $('#status').html(e.pageX +', '+ e.pageY);
      targetPosition =
        854 -
        Math.max(
          0,
          Math.min(854, e.pageX - $("#quentincontainer").offset().left)
        );
      //targetPosition = browserWidth - (e.pageX - $('#quentincontainer').offset().left);
      // console.log(targetPosition);

      // https://www.w3schools.com/tags/av_prop_currenttime.asp

      // ON mouse move, make sure audio is playing, and set Current Time

      $("#bugger").html(targetPosition);
    });

    $("body").bind("touchmove", function (e) {
      e.preventDefault();
      var touch = event.targetTouches[event.targetTouches.length - 1];
      $("#bugger").html(
        "TOUCH: " + touch.pageX + ", " + event.targetTouches.length
      );
      targetPosition = browserWidth - touch.pageX;
    });

    $(window).resize(function () {
      browserWidth = $(window).width();
    });
  };

  var isTouchDevice = function () {
    var el = document.createElement("div");
    el.setAttribute("ongesturestart", "return;");
    return typeof el.ongesturestart === "function";
  };
  // On DOM ready
  $(autorun);
})(this, jQuery);
