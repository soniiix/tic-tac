function displayTime(){
    var date = new Date();
    var hrs = date.getHours().toString().padStart(2, '0');
    var min = date.getMinutes().toString().padStart(2, '0');
    var sec = date.getSeconds().toString().padStart(2, '0');

    document.getElementById('heures').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('secondes').innerHTML = sec;
}

setInterval(displayTime, 100);