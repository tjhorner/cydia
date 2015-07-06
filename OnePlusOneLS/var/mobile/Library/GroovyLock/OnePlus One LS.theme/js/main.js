if (transparent === true) {
    $("#bg").css("opacity", transparency);
} else {

}

if (weather === true) {
    $.simpleWeather({
        woeid: WOEID,
        success: function(weather) {
            html = '<h2><i class="icon-' + weather.code + '"></i>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
} else {
    $(".wi").css("display", "none");
}

if (date === true) {
    var showDate = function() {
        var now = new Date();
        var day = now.getDate();
        var year = now.getFullYear();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        $("#date").text(months[now.getMonth()] + " " + day + ", " + year);
        setTimeout(function() {
            showDate();
        }, 5000);
    };
} else {
    $("#date").css("display", "none");
}

if (h12 === true) {
    var hours12 = function() {
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        ampm = (h >= 12) ? 'PM' : 'AM';
        h = ((h + 11) % 12 + 1);
        if (m < 10) {
            $("#time").text(h + ":0" + m);
        } else {
            $("#time").text(h + ":" + m);
        }
        $("#ampm").text(ampm);
        setTimeout(function() {
            hours12();
        }, 5000);
    };
    hours12();
} else {
    var twenty = function() {
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        if (m < 10) {
            $("#time").text(h + ":0" + m);
        } else {
            $("#time").text(h + ":" + m);
        }
        setTimeout(function() {
            twenty();
        }, 5000);
    };
    $("#ampm").css("display", "none");
    twenty();
}


if (ampmpos === "top") {
    $("#ampm").css("top", "8vw");
} else {
    $("#ampm").css("top", "16vw");
}



if (alarm === true) {

} else {

}

if (calendar === true) {

} else {

}

if (swipe === true) {

} else {
    $("#swipe").css("display", "none");
}


function updateBattery() {
    if (battery === true) {
        $.get("file:///var/mobile/Library/Stats/BatteryStats.txt", function(data) {
            var split = data.split("\n");
            var level = split[0].split(": ")[1];
            var state = split[1].split(": ")[1];

            if (state === "Charging" || state === "Fully Charged") {
                $("#battpercent").text(level + "% Charged");
            } else {
                $("#battpercent").text(level + "%");
            }

            if (level > 50) {
                $("#batticon").addClass("fi-battery-full");
                $("#batticon").removeClass("fi-battery-half");
                $("#batticon").removeClass("fi-battery-empty");
            } else if (level < 51) {
                $("#batticon").removeClass("fi-battery-full");
                $("#batticon").addClass("fi-battery-half");
                $("#batticon").removeClass("fi-battery-empty");
            } else if (level < 21) {
                $("#batticon").removeClass("fi-battery-full");
                $("#batticon").removeClass("fi-battery-half");
                $("#batticon").addClass("fi-battery-empty");
            }
        });
    }
}
setTimeout(function() {
    updateBattery();
}, 5000);


//$("#swipe").click(groovyAPI.attemptUnlockWithPasscode(pass));


// set bg color
$("#bg").css("background-color", color);

$('#wrapper').pep({
    constrainTo: 'parent',
    multiplier: '1.3',
    revert: 'true'
});

showDate();
