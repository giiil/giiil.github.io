// set the date we're counting down to

var target_date = new Date('Oct, 7, 2017').getTime();

 

// variables for time units

var months, days, hours, minutes, seconds;

 

// get tag element

var countdown = document.getElementById('countdown');

 

// update the tag with id "countdown" every 1 second

setInterval(function () {

 

    // find the amount of "seconds" between now and target
    

    var current_date = new Date().getTime();

    var seconds_left = (target_date - current_date) / 1000;

 

    // do some time calculations
    
    /*months = parseInt(seconds_left / 2592000)
    seconds_left = seconds_left % 2592000*/

    days = parseInt(seconds_left / 86400);

    seconds_left = seconds_left % 86400;

     

    hours = parseInt(seconds_left / 3600);

    seconds_left = seconds_left % 3600;

     

    //minutes = parseInt(seconds_left / 60);

    //seconds = parseInt(seconds_left % 60);

     

    // format countdown string + set tag value

    //countdown.innerHTML = '<div class="days"><h2>Boarding in <span>' + months +  ' </span> Months and <span> '+ days +' </span> Days</div> ';
    countdown.innerHTML = '<div class="days"><h2>Boarding in <span>' + days +' </span> Days</div> ';

 

}, 1000);