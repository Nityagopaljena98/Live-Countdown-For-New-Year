// Javascript code to get countdown time for new year 

var dest = new Date("jan 1, 2025 12:00:00").getTime(); //Here put the date till you count  

var x = setInterval(function () {

    var now = new Date().getTime();
    var dif = dest - now;

    var days = Math.floor(dif / (1000 * 60 * 60 * 24));
    console.log(days);
    var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    console.log(minutes);
    var seconds = Math.floor((dif % (1000 * 60)) / 1000);
    console.log(seconds);

    document.getElementById("countdown").innerHTML = days + "d, " + hours + "hrs: " + minutes + "m: " + seconds + "s"

}, 1000);