ver = iOSversion();

if (ver === 0) {
    document.getElementById("everything").className = "cytyle-flat";
} else if (ver[0] < 7) {
    document.getElementById("everything").className = "cytyle-faux";
} else {
    document.getElementById("everything").className = "cytyle-flat";
}
