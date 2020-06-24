var container = document.createElement("div");

container.style.height = "500px";
container.style.width = "500px";
container.style.border = "1px solid black";
container.style.position = "relative";
container.style.textAlign = "center";
container.style.margin = "auto";
document.body.appendChild(container);

var element = document.createElement("div");

element.style.height = "100px";
element.style.width = "100px";
element.style.border = "1px solid black";
element.style.position = "absolute";
element.style.borderRadius = "50%";
element.style.backgroundColor = "Blue";

container.appendChild(element);

var topPos = 0;
var leftPos = 200;
var speed = 5;

function render() {
  element.style.top = topPos + "px";
  element.style.left = leftPos + "px";

  if (topPos >= 400 && speed === 5) speed = -speed;
  else if (topPos <= 0 && speed === -5) speed = -speed;
  topPos += speed;

  if (element.style.top === 400 + "px") {
    element.style.backgroundColor = "red";
  } else if (element.style.top === 0 + "px") {
    element.style.backgroundColor = "blue";
  }

  requestAnimationFrame(render);
}

render();
