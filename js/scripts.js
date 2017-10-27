//back-end
var beebBoop = function (inputNumber, userName) {
  var numbers = "";
  if (inputNumber % 3 === 0) {
    return numbers.concat("I'm sorry, " + userName + ". I'm afraid I can't do that.")
  } else {
    stringNumber = inputNumber.toString();
    if ((stringNumber.includes("1")) || (stringNumber.includes("0"))) {
        if (stringNumber.includes("0")) {
          numbers = numbers.concat("Beep!");
        };
        if (stringNumber.includes("1")) {
          numbers = numbers.concat("Boop!");
        };
      return numbers;
    } else {
      for (index = 0; index <= stringNumber; index++) {
        numbers = numbers.concat(index + ",");
      };
      return numbers;
    };
  };
};



//front-end

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var userName = $("#userName").val();
    var result = beebBoop(userNumber, userName);
    $(".display").show();
    $("#userInput").each(function() {
      this.reset();
    });
    $(".gameResult").text(result);
  });
});
