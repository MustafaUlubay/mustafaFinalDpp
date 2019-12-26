$(document).ready(function() {
  //DIMMER

  $(".special.cards.image").dimmer({
    on: "hover"
  });
  //Sıdebar
  $(".ui.sidebar").sidebar("attach events", ".toc.item");

  //checkbox
  $(".ui.checkbox").checkbox();

  // MODAL

  $("#card1").click(function() {
    $(".ui.modal1.modal1").modal("toggle");
  });

  $("#card2").click(function() {
    $(".ui.modal2.modal2").modal("toggle");
  });

  $("#card3").click(function() {
    $(".ui.modal3.modal3").modal("toggle");
  });

  $("#card4").click(function() {
    $(".ui.modal4.modal4").modal("toggle");
  });

  $("#card5").click(function() {
    $(".ui.modal5.modal5").modal("toggle");
  });

  $("#card6").click(function() {
    $(".ui.modal6.modal6").modal("toggle");
  });
});
