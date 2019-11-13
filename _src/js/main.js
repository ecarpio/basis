$(function() {
  // Panel Animations
  $("#pageSections .btn").on("click", function() {
    $("body").addClass("panelOpen");

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
      $(this).addClass("active");
      $(".work-column:not(.active)").hide();

      $(".work-panel-header").addClass("active")
      $('.work-panel-header .work-detail-title')  .html(workCaption);
    });
  });


  function closeExpanded() {
    $(".work-column")
      .removeClass("active")
      .show();
    $(".work-panel-header").removeClass("active");
  }


  $(".work-detail-title").on("click", function() {
    closeExpanded();  
  });

  

  $('.panel-header button').on('click', function(){
    


    closeExpanded();

  })

});
