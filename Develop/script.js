/*** Variables **/
var hour =moment().hour();

$(document).ready(function(){


    /** Current date display **/
    
    function timeToday() {
        var timerInterval = setInterval(function() {
        
            var today = moment().format('LL') + " "+moment().format('LTS') ;
            $("#currentDay").text( today)
        }, 1000);
    }
    timeToday()

    /** Generating hourly activities rows**/
    for (var i=9; i<17; i++){
        var rowI = "row"+i;
        $(".container").append("<row id=\""+rowI+"\" class=\"row\">");
    }
   
        /** Generating time, activity(time-bblock) and saving buttons**/
    for (i=9; i<17; i++){
        var timeId = "time"+i; // 1 hour window label id
        var activityId = "activityB"+i // window block id
        var btnId = "B"+i; // window button Id
        $("#row"+i).append("<label id=\""+timeId+"\" class=\"hour col-2 text-right\">"); //time colum
        $("#row"+i).append("<textarea id=\""+activityId+"\" class=\"col-9\">"); //block column
        $("#row"+i).append("<button id=\""+btnId+"\" class=\"saveBtn col-1\">"); //button column
     }
    /** Button content : save icon  **/
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

            $("#activityB"+j).addClass("past");

        }
        else if(j=hour){
            $("#activityB"+j).addClass("present"); 
        }  
        else{
            $("#activityB"+j).addClass("past"); 
        }
    }
    /** Local storage **/
    var buttonId ="";
    $( "#B9, #B10, #B11, #B12, #B13, #B14, #B15, #B16").click(function(e){
        buttonId = e.target.id;
        console.log(buttonId)
        blockText = $("#activity"+buttonId).val().trim(); // Grabbing the timeblock text.
        SaveBlock()
        console.log(localStorage.getItem("block"+buttonId))

    });

    /** Save the timeblock text */
    function SaveBlock(){
        if (typeof(Storage) !== "undefined") {
            if($("#activity"+buttonId).text(blockText)!==null){
                var key = "block"+buttonId;
                localStorage.setItem(key, blockText);
                blockText = localStorage.getItem(key);
                $("#activity"+buttonId).text(blockText);
                console.log($("#activity"+buttonId).text());
            }
          } else {
            $("#activity"+buttonId).val("Sorry, your browser does not support Web Storage...") ;
          }
    }



});
