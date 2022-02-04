var start = 0
var pause = false

// Need to pause time on click

function start_timer() {
    if (start != 0) {
        pause = true;
    }
    start = Math.floor(Date.now() / 1000);
    timer()
}

function timer() {
    if (pause === true) {
        return
    }
    var now = Math.floor(Date.now() / 1000);
    var diff = now - start;
    var m = Math.floor(diff / 60);
    var s = Math.floor(diff % 60);
    m = pad(m);
    s = pad(s);
    document.getElementById("timer").innerHTML = m + ":" + s;
    var t = setTimeout(timer, 500);
}

function pad(number){
    if (number < 10) {number = "0" + number};
    return number;
}

function button(button_id){
    start = start - 60;
    document.getElementById(button_id).style.display = "none";
}
