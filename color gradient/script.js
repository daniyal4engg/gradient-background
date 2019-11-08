var css = document.getElementById("paint");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];

function colorpicker() {
  body.style.background =
    "linear-gradient(to Right," + color1.value + "," + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorpicker);

color2.addEventListener("input", colorpicker);
