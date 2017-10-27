$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var result = beebBoop(userNumber);
    $(".result").show();
    $("#gameResult").text(result);
  });
});
