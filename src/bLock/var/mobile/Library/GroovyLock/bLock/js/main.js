// clock function
function clock() {

    // set time variables

    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    // change block width

    $("#hour").css("width", hour + 15 + "%");
    $("#min").css("width", min + 15 + "%");
    $("#sec").css("width", sec + 15 + "%");

    // convert to 12h time

    if (hour >= 13) {
        hour -= 12;
    }

    // for midnight

    if (hour === 0) {
        hour = 12;
    }

    // add 0 before minute if minutes are less than 10 minutes

    if (min < 10) {
        min = "0" + min;
    }

    // add 0 before second if seconds are less than 10 seconds

    if (sec < 10) {
        sec = "0" + sec;
    }

    // set text to time

    $("#h-text").text(hour);
    $("#m-text").text(min);
    $("#s-text").text(sec);
}

setInterval(clock, 1000);

// notification support

function checkNotifications() {
    // ask groovylock if there are notifications showing
    if (groovyAPI.isShowingNotifications()) {
        // add the "notification" class to the elements to move them up to the top
        $("body, #hour, #min, #sec").addClass("notification");
        // check for the notification class if there are no notifications anymore
    } else if ($("body, #hour, #min, #sec").hasClass("notification")) {
        // remove the "notification" class to the elements to move them back down
        $("body, #hour, #min, #sec").removeClass("notification");
    }
}

setInterval(checkNotifications, 1000);

// light and dark theme

if (dark_theme === false) {
    // append the light stylesheet
    $("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/light.css\">");
} else {
    // append the dark stylesheet
    $("head").append("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/dark.css\">");
}

// battery
function updateBattery() {
    var level = Math.ceil(groovyAPI.getBatteryLevel() * 100);
    if (battery === true) {
        // change width according to battery level and battery level text
        $("#batt").css("width", level + "%");
        $("#b-text").text(level + "%");
        // if the battery level is lower than 30 it will keep the width at 30
        if (level < 15) {
            $("#batt").css("width", 15 + "%");
        }
        // if the battery level is less than or equal to 20 change the color to red
        if (level <= 20) {
            $("#batt").css("background", "red");
            $("#b-text").css("color", "white");
        }
        // hide the battery widget if there are notifications showing
        if (groovyAPI.isShowingNotifications()) {
            $("#batt").hide();
        } else {
            $("#batt").show();
        }
    } else {
        $("#batt").hide();
    }

}

setInterval(updateBattery, 1000);
