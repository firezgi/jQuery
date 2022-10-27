$(document).ready(function () {
  $("#hidden").hover(
    function () {
      $(this).css("color", "black");
    },
    function () {
      // $(this).hide();
      // $(this).css("display", "none");
    }
  );
  $("button").click(function () {
    console.log(first);
    // $("#hidden").css("display", "none");
    // alert("I am alerting you");
  });
});