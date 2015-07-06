function init() {

    if (seconds === "false") {
        document.getElementById("shand").style.display = "none";
    }

    setInterval(function() {
        function r(el, deg) {
            el.setAttribute('transform', 'rotate(' + deg + ' 50 50)');
        }
        var d = new Date();
        r(shand, 6 * d.getSeconds());
        r(mhand, 6 * d.getMinutes());
        r(hhand, 30 * (d.getHours() % 12) + d.getMinutes() / 2);
    }, 1000);
}

init();
