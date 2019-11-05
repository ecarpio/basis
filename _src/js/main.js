$(function() {
  $("#pageSections .btn").on("click", function() {
    $("body").addClass("panelOpen");

    setTimeout(function() {
      if ($(".collapse").hasClass("show")) {
        $("body").addClass("panelOpen");
      } else $("body").removeClass("panelOpen");
    }, 400);
  });
});
