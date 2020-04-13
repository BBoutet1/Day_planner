/** Current date display **/
var hour = moment().hour(); // current hour
function timeToday() {
    setInterval(function() {
        var today = moment().format('LL') + " " + moment().format('LTS'); // current date and current time
        $("#currentDay").text(today)
    }, 1000);
}
timeToday()

/** Generating hourly activities rows**/
for (var i = 9; i < 17; i++) {
    var rowI = "row" + i;
    $(".container").append("<div id=\"" + rowI + "\" class=\"row\">");
}

/** Generating time, activity(timeblock) and saving buttons**/
for (i = 9; i < 17; i++) {
    var timeId = "time" + i; // timeblock label id
    var blockId = "blockB" + i // timeblock id
    var btnId = "B" + i; // window button Id
    $("#row" + i).append("<label id=\"" + timeId + "\" class=\"hour col-2\">"); //time colum: id --> "time1", "time2", etc.
    $("#row" + i).append("<textarea id=\"" + blockId + "\" class=\"col-9\">"); //timeblock column: id --> "blockB1", "blockB2", etc.
    $("#row" + i).append("<button id=\"" + btnId + "\" class=\"saveBtn col-1\">"); //button column: id --"B1", "B2", etc.
}
/** Button content : save icon  **/
$(".saveBtn").append("<i class=\"fa fa-save\">");

/** 1 timeblock */
for (var j = 9; j < 17; j++) {
    $("#time" + j).text(windowStart(j) + " - " + windowEnd(j));
}

/** 1 hour window start time */
function windowStart(num) {
    if (num < 12) {
        timeStart = num + ":00 AM"; //Morning
    } else if (num == 12) {
        timeStart = num + ":00 PM"; //Midday
    } else if (num > 12) {
        num = num - 12;
        timeStart = num + ":00 PM"; //afternoon
    }
    return timeStart;
}

/** 1 hour window end time */
function windowEnd(num) {
    num = num + 1;
    if (num < 12) {
        timeEnd = num + ":00 AM"; //Morning
    } else if (num == 12) {
        timeEnd = num + ":00 PM"; //Midday
    } else if (num > 12) {
        num = num - 12;
        timeEnd = num + ":00 PM"; //Afternoon
    }
    return timeEnd;
}

/** Time code color (background color) */
for (var j = 9; j < 17; j++) {
    if (j < hour) { // passed timeblocks
        $("#blockB" + j).addClass("past");
    } else if (j == hour) { // present timeblock
        $("#blockB" + j).addClass("present");
    } else { // future timeblock
        $("#blockB" + j).addClass("future");
    }
}

/** Retrieving previously saved timeblock**/
for (var j = 9; j < 17; j++) {
    var storageValue = localStorage.getItem("activityB" + j) // storage keys ---> "activityB1", "activityB2", etc.
    $("#blockB" + j).val(storageValue); // textarea Id ---> "blockB1", "blockB2"
}

$(document).ready(function() {
    /** Local storage **/
    $(".saveBtn").click(function(event) {
        var buttonId = event.target.id; // Getting the clicked button id
        if (buttonId !== "") { // No local storage if the buttton id is not stored
            // Grabbing the timeblock
            var blockText = $("#block" + buttonId).val().trim(); // e.g 1st textarea content value id is "blockB1"
            if (blockText !== "") {
                //store input if not "null"
                localStorage.setItem("activity" + buttonId, blockText);
            } else {
                //clear storage for "null" input
                localStorage.removeItem("activity" + buttonId, blockText)
            }
        }

    });
});