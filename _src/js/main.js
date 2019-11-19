$(function() {
  // Panel Animations
  $("#pageSections .btn").on("click", function() {
    $("body").addClass("panelOpen");
    backAnimation();
    setTimeout(function() {
      if ($(".collapse").hasClass("show")) {
        $("body").addClass("panelOpen");
      } else $("body").removeClass("panelOpen");
    }, 400);
  });

  // Work Background Images
  $(".work-column").each(function() {
    var workBg = $(this).attr("data-workID");
    var workCaption = $(this).attr("data-workCaption");

    // Apply Background Image
    $(this)
      .find(".work-image")
      .css("background-image", "url(images/hero-" + workBg + ".png)");

    // Click Action to Expand and Show Detail
    $(this).on("click", function() {
      //$("#workCarousel").addClass("active");
      $(this)
        .addClass("active")
        .delay(500)
        .queue(function(next) {
          $(this).addClass("relative");
          next();
        });

      $(".work-column").addClass("hide-panel");
      $(".work-panel-header").addClass("active");
      $(".work-panel-header .work-detail-title").html(workCaption);

      //Play Video

      $("#redVideo")
        .get(0)
        .play();
    });
  });

  function closeExpanded() {
    $(".work-column").removeClass("active hide-panel relative");
    $(".work-panel-header").removeClass("active");

    //Reset Video
    $("#redVideo").get(0).currentTime = 0;
    $("#redVideo")
      .get(0)
      .pause();
  }

  $(".work-detail-title").on("click", function() {
    closeExpanded();
  });

  $(".panel-header button").on("click", function() {
    closeExpanded();
    setTimeout(function() {
      playAnimation();
    }, 500);
  });

  var anim;
  var animData = {
    container: document.getElementById("logo-bm"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    rendererSettings: {
      progressiveLoad: false
    },
    path: "images/logo-b.json"
  };
  anim = bodymovin.loadAnimation(animData);

  function loopCompleteHandler() {
    anim.removeEventListener("loopComplete", loopCompleteHandler);
    anim.stop();
  }

  function backAnimation() {
    anim.removeEventListener("loopComplete", loopCompleteHandler);
    anim.setDirection(-1);
    anim.setSpeed(4);
    anim.play();
  }

  function playAnimation() {
    anim.removeEventListener("loopComplete", loopCompleteHandler);
    anim.setDirection(1);
    anim.setSpeed(1);
    anim.play();
  }
});
