// Add current time to paragraph tag
$(document).ready(function () {
    console.log("ready!");

    var m = moment().format("dddd Do MMMM YYYY");
    $("#currentDay").text(m);

// I need a way to allow the user input to be printed on the text span. 

// Then I need to add a click event to the button to store the input. 

// I will then need a to set the input to the local storage so data is held if page is refreshed.

// finally need a way to clear the user input once a task has been done.








});
