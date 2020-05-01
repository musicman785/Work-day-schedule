// Add current time to paragraph tag
$(document).ready(function () {
    console.log("ready!");


    //variable to set the current time and display 
    var m = moment().format("dddd Do MMMM YYYY");
    $("#currentDay").text(m);


    // variable holds current time (PST)
    var currentTime = moment().format("H");
    // variable to change current time to number
    var currentTimeNum = parseInt(currentTime);
    // array with numbers to compare to current time
    var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    // DOM var to target rows in html
    var colorRows = $(".time-row");
    // DOM var to target text area in html
    var userInput = $(".description");


    // for loop compares times between array and rows
    for (var i = 0; i < timeArray.length; i++) {
        // var holds time array index
        var timeLoop = timeArray[i];
        //var holds rows time index
        var colorRowLoop = colorRows[i];

        // condition compares if array time and row time is same and sets row color to red
        if (timeLoop === currentTimeNum) {

            $(colorRowLoop).addClass("present");

        }//if time of row is less than current time sets row color to grey
        if (timeLoop < currentTimeNum) {

            $(colorRowLoop).addClass("past");

        }// if time of row is greater than current time sets row color to green
        if (timeLoop > currentTimeNum) {

            $(colorRowLoop).addClass("future");
        }

    }

    var printLast = JSON.parse(localStorage.getItem("textArea"));

    if (printLast !== null) {
        // Holds previous user input in 9am row on the browser
        $(userInput[0]).text(printLast.nineAm);
        // Holds previous user input in 10am row on the browser
        $(userInput[1]).text(printLast.tenAm);
        // Holds previous user input in 11am row on the browser
        $(userInput[2]).text(printLast.elevenAm);
        // Holds previous user input in 12pm row on the browser
        $(userInput[3]).text(printLast.twelveAm);
        // Holds previous user input in 1pm row on the browser
        $(userInput[4]).text(printLast.onePm);
        // Holds previous user input in 2pm row on the browser
        $(userInput[5]).text(printLast.twoPm);
        // Holds previous user input in 3pm row on the browser
        $(userInput[6]).text(printLast.threePm);
        // Holds previous user input in 4pm row on the browser
        $(userInput[7]).text(printLast.fourPm);
        // Holds previous user input in 5pm row on the browser
        $(userInput[8]).text(printLast.fivePm);
        // Holds previous user input in 6pm row on the browser
        $(userInput[9]).text(printLast.sixPm);
    };







    // event listener for buttons to activate local storage
    $(".saveBtn").click(function (e) {
        e.preventDefault();
        // Var stores rows as objects value pairs to set text to local storage
        var textArea = {
            // object value pair for row 9am
            nineAm: userInput[0].value.trim(),
            // object value pair for row 10am
            tenAm: userInput[1].value.trim(),
            // object value pair for row 11am
            elevenAm: userInput[2].value.trim(),
            // object value pair for row 12pm
            twelveAm: userInput[3].value.trim(),
            // object value pair for row 1pm
            onePm: userInput[4].value.trim(),
            // object value pair for row 2pm
            twoPm: userInput[5].value.trim(),
            // object value pair for row 3pm
            threePm: userInput[6].value.trim(),
            // object value pair for row 4pm
            fourPm: userInput[7].value.trim(),
            // object value pair for row 5pm
            fivePm: userInput[8].value.trim(),
            // object value pair for row 6pm
            sixPm: userInput[9].value.trim(),
        }



        localStorage.setItem("textArea", JSON.stringify(textArea));

    });


            


});







