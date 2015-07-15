function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    } else {
        return 0;
    }
}
ver = iOSversion();

if (ver === 0) {
    document.getElementById("everything").className = "cytyle-flat";
} else if (ver < 7) {
    document.getElementById("everything").className = "cytyle-faux";
} else {
    document.getElementById("everything").className = "cytyle-flat";
}
