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

  function workNav() {
    var workNav = $(".work-nav");

    if (
      $(".work-column")
        .first()
        .hasClass("active")
    ) {
      workNav.removeClass("last both");
      workNav.addClass("first");
    } else if (
      $(".work-column")
        .last()
        .hasClass("active")
    ) {
      workNav.removeClass("first both");
      workNav.addClass("last");
    } else if ($(".work-column").hasClass("active")) {
      workNav.removeClass("first");
      workNav.removeClass("last");
      workNav.addClass("both");
    } else {
      workNav.removeClass("first last both");
    }
  }

  // Work Navigation
  var nextWork = $(".next-work");
  var prevWork = $(".prev-work");

  // Get Next or Previous Title Slide
  function getLabel() {
    var nextLabel = $(".work-column.active")
      .next()
      .attr("data-workCaption");
    var prevLabel = $(".work-column.active")
      .prev()
      .attr("data-workCaption");
    var currentLabel = $(".work-column.active").attr("data-workCaption");
    var workNavButtons = $(".work-nav button");

    workNavButtons.find("label").remove();
    nextWork.prepend("<label>" + nextLabel + "</label>");
    prevWork.append("<label>" + prevLabel + "</label>");
    $(".work-panel-header .work-detail-title").html(currentLabel);
  }

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

      workNav();
      getLabel();

      //Play Video
      $("#redVideo")
        .get(0)
        .play();
    });
  });

  function closeExpanded() {
    $(".work-column").removeClass("active hide-panel relative");
    $(".work-panel-header").removeClass("active");
    $(".work-nav").removeClass("both first last");

    //Reset Videol
    $("#redVideo").get(0).currentTime = 0;
    $("#redVideo")
      .get(0)
      .pause();
  }

  $(".work-detail-title").on("click", function() {
    closeExpanded();
  });

  $(".panel-header .collapsed").on("click", function() {
    closeExpanded();
    setTimeout(function() {
      backAnimation()
    }, 500);
  });


  $(document).on("click",".panel-header button:not('.collapsed')",function() {
    closeExpanded();
    
    setTimeout(function() {
      playAnimation()
    }, 500);
  });

  // $(".panel-header button:not('.collapsed')").on("click", function() {
  //   console.log('rteere')
  //   closeExpanded();
    
  //   setTimeout(function() {
  //     playAnimation()
  //   }, 500);
  // });

  nextWork.on("click", function() {
    $(".work-column.active")
      .removeClass("active")
      .next()
      .addClass("active");
    workNav();
    getLabel();
  });

  prevWork.on("click", function() {
    $(".work-column.active")
      .removeClass("active")
      .prev()
      .addClass("active");
    workNav();
    getLabel();
  });

  // Animated Logo
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
