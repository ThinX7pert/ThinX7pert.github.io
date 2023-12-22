var light = document.getElementById("moon-icon");

light.onclick = function (){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")) {
        light.src = "img/bx-sun.svg";
    }
    else {
        light.src = "img/bxs-moon.svg";
    }
}