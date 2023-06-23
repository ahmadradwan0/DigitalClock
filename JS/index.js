$(document).ready(function () {
   
    function showTime(){
        // To get time  from machine ..
        var date = new Date();

        // 
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();


        // Am Pm Settings ..

        var session = "AM";

        //condetions for time behaviour ..

        if(hours==0){
            hours = 12;

        }

        if(hours>=12){
            session = "PM";

        }

        if(hours>12){
            hours = hours -12;
        }

        hours = hours<10?"0"+hours : hours;
        minutes = minutes<10?"0"+minutes : minutes;
        seconds = seconds<10?"0"+seconds : seconds;


        // set variables to spans .. 

        $("#hours").text(hours);
        $("#min").text(minutes);
        $("#sec").text(seconds);
        $("#period").text(session);


        // to change time every second ..
        setTimeout(showTime,1000);
        

    }

    showTime();
});