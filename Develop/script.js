/*** Variables **/
var months = ["January","February","March","April","May","June","July","August",
"September","October","November","December"]; // Months array
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; // day names array
var hour =moment().hour();
moment().format();

$(document).ready(function(){

    /** Current date display **/
    var today = moment().format('LLLL');
    $("#currentDay").text( today)

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

    /** 1 hour window */
    for (var j=9; j<17; j++){
        $("#time"+j).text(windowStart(j)+" - "+windowEnd(j));

    }

    /** 1 hour window start time */
    function windowStart(num){

        if (num<12)
        {
            timeStart = num+":00 AM";  //Morning
        }
        else if(num==12)
        {
            timeStart = num+":00 PM";  //Midday
        }
        else if(num>12)
        {
            num=num-12;
            timeStart = num+":00 PM"; //afternoon
        }
        return timeStart;
    }

    /** 1 hour window end time */
    function windowEnd(num){
        num=num+1;
        if (num<12)
        {
            timeEnd = num+":00 AM";  //Morning
        }
        else if(num==12)
        {
            timeEnd = num+":00 PM";  //Midday
        }
        else if(num>12)
        {
            num=num-12;
            timeEnd = num+":00 PM"; //Afternoon
        }

        return timeEnd;
    } 

     /** Time code color */
     for (var j=9; j<17; j++){
        if (j<hour) {

            $("#activity"+j).addClass("past");

        }
        else if(j=hour){
            $("#activity"+j).addClass("present"); 
        }  
        else{
            $("#activity"+j).addClass("past"); 
        }
    }
});
