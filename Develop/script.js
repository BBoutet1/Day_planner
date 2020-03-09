/*** Variables **/
var months = ["January","February","March","April","May","June","July","August",
"September","October","November","December"]; // Months array
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; // day names array
var d = new Date(); // date of the day
var day = d.getDay();// current day of the week
    day = days[day]; 
var date = d.getDate();// current day date
var month = d.getMonth(); // current month
    month = months[month];
var year = d.getFullYear(); // current year
var hour =d.getHours; //current hours

$(document).ready(function(){
    /** Current date display **/
    $("#currentDay").text( day +" "+ date+" "+month+" "+year)

    /** Generating hourly activities rows**/
    for (var i=9; i<17; i++){
        var rowI = "row"+i;
        $(".container").append("<row id=\""+rowI+"\" class=\"row\">");
    }
   
    
    
});