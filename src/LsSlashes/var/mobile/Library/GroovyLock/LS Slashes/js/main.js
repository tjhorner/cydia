// clock function
function clock() {

    // set time variables

    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();


    // 12h time

    if (h12 === true) {
        // convert to 12h time
        if (hour >= 13) {
            hour -= 12;

        }
    }

    if (hour <= 9) {
        hour = "0" + hour;
    }

    // add 0 before minute if minutes are less than 10 minutes

    if (min < 10) {
        min = "0" + min;
    }

    // set text to time

    $("#h-text").text(hour);
    $("#m-text").text(min);

}

setInterval(clock, 1000);

// user defined color

$("body").css("color", "#" + color);
