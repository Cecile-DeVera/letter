$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var userInput = $("input#user").val();
    var addressInput = $("input#address").val();
    var date = new Date();

    var year = date.getFullYear();
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthArray[date.getMonth()];
    var day = date.getDate();
    var todaysDate = day + " " + month + " " + year;


  $(".userOutput").text(userInput);
  $("#addressOutput").text(addressInput);
  $("#date").text(todaysDate);

  $("#showStory").show();

  event.preventDefault();
});
});
