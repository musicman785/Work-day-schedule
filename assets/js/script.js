// Add current time to paragraph tag
$(document).ready(function () {
    console.log("ready!");


    //variable to set the current time and display 
    var m = moment().format("dddd Do MMMM YYYY");
    $("#currentDay").text(m);



    var currentTime = moment().format("H");
    var currentTimeNum = parseInt(currentTime);
    var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var colorRows = $(".time-row");
    console.log(colorRows);

    for (var i = 0; i < timeArray.length; i++) {
        var timeLoop = timeArray[i];
        var colorRowLoop = colorRows[i];


        if (timeLoop === currentTimeNum) {

            $(colorRowLoop).addClass("present");

        }
        if (timeLoop < currentTimeNum) {

            $(colorRowLoop).addClass("past");

        }
        if (timeLoop > currentTimeNum) {

            $(colorRowLoop).addClass("future");
        }

    }




});
// event listener for buttons to activate local storage
// look to activity 23 week for   starting from line 42


// use buttons to set items to local storage 


// questions for tutor 1. How to attach time to rows?