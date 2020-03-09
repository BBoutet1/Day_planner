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
   
        /** Generating time, activity(time-bblock) and saving buttons**/
    for (i=9; i<17; i++){
        var timeId = "time"+i; // 1 hour window label id
        var activityId = "activity"+i // window block id
        var btnId = "btn"+i; // window button Id
        $("#row"+i).append("<label id=\""+timeId+"\" class=\"hour col-2 text-right\">"); //time colum
        $("#row"+i).append("<textarea id=\""+activityId+"\" class=\"col-9\">"); //block column
        $("#row"+i).append("<button id=\""+btnId+"\" class=\"saveBtn col-1\">"); //button column
    }
    /** Buttons contents : save icon  **/
    $(".saveBtn").append("<i class=\"fa fa-save\">");

    /** 1 Writting the 1 hour time window in time colums */
    for (var j=9; j<17; j++){
        $("#time"+j).text(windowStart(j)+" - "+windowEnd(j));
        if (j<hour) {
        $("activity"+j).addClass("past")
        }
        else if("activity"+j){
        $("textarea").addClass("present") 
        }  
        else{
            $("activity"+j).addClass("past") 
        }
    }
    
});