function animacionOnOff(interpolator) {
    var ts = document.getElementById(interpolator);
    ts.getAttribute("enabled") === "true" ? ts.setAttribute("enabled", "false") : ts.setAttribute("enabled", "true");
}
