var boundary = document.createElement("div");

var points = [
  { x: 10, y: 20 },
  { x: 40, y: 20 },
  { x: 60, y: 100 },
  { x: 400, y: 250 },
  { x: 500, y: 20 },
  { x: 800, y: 100 },
];

// Styling Boundary

var b = boundary.style;
document.body.appendChild(boundary);
b.border = "1px solid black";
b.width = "75%";
b.height = "300px";
b.position = "relative";

// Creating Blue Dots

points.forEach(function (coordinate) {
  var dots = document.createElement("dots");
  boundary.appendChild(dots);

  var d = dots.style;
  d.height = "10px";
  d.width = "10px";
  d.backgroundColor = "blue";
  d.position = "absolute";
  d.borderRadius = "50%";
  d.top = coordinate.y - 5 + "px";
  d.left = coordinate.x - 5 + "px";
});
