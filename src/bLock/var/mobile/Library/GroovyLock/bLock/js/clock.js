function main() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var hBlock = document.getElementById("hour");
    var mBlock = document.getElementById("min");
    var sBlock = document.getElementById("sec");

    var hText = document.getElementById("h-text");
    var mText = document.getElementById("m-text");
    var sText = document.getElementById("s-text");

    hBlock.style.width = hour + 15 + "%";
    mBlock.style.width = min + 15 + "%";
    sBlock.style.width = sec + 15 + "%";

    hText.innerHTML = hour;
    mText.innerHTML = min;
    sText.innerHTML = sec;

    if (hour > 12) {
        hText.innerHTML = hour - 12;
    }
    if (min < 10) {
      mText.innerHTML = "0" + min;
    }
    if (sec < 10) {
      sText.innerHTML = "0" + sec;
    }
}

setInterval(main, 1);

if (theme === "light") {
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", "css/light.css");
    document.head.appendChild(css);
} else if (theme === "dark") {
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", "css/dark.css");
    document.head.appendChild(css);
}
