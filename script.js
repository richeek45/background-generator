var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
}

function getRandom() {
  // var randomInt = '#' + parseInt(Math.random() * 0xffffff).toString(16);
  // console.log(randomInt);
  // return ((randomInt.length < 6) ? '0' + randomInt : randomInt);
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

}

function randomColorPicker() {
  color1.value = getRandom();
  color2.value = getRandom();
  setGradient();
}

function createButton() {
  var random = document.createElement("button");
  random.appendChild(document.createTextNode("Random"));
  body.appendChild(random);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

createButton();

body.addEventListener("click", randomColorPicker);