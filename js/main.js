document.getElementById("nav-menu-icon").onclick = function (){
    document.getElementById("nav-menu").style.display = "flex";
    document.getElementById("nav-menu").style.flexDirection = "column";
    document.getElementById("nav-menu").style.position = "absolute";
    document.getElementById("nav-menu").style.top = "100%";
    document.getElementById("nav-menu").style.left = "0";
    document.getElementById("nav-menu").style.width = "100%";
    document.getElementById("nav-menu").style.backgroundColor = "rgb(0 0 0 / 50%)";

    document.getElementsByClassName("nav-link").style.padding = "15px";
};