function Plot(x, y) {
  var self = this;
  this.x = x;
  this.y = y;

  this.container = document.body;

  this.element = document.createElement("div");
  this.element.style.position = "absolute";
  this.element.style.width = "20px";
  this.element.style.height = "20px";
  this.element.style.borderRadius = "50%";
  this.element.style.backgroundColor = "Blue";
  this.element.style.top = this.y + "px";
  this.element.style.left = this.x + "px";
  this.element.style.margin = "5px";

  this.render = function () {
    this.container.appendChild(this.element);
  };

  this.setColour = function (color) {
    this.color = color;
    this.element.style.backgroundColor = this.color;
  };

  this.setBorder = function () {
    this.element.style.border = "2px solid green";
  };

  this.element.addEventListener("click", function () {
    self.setColour("Red");
    self.setBorder();
  });
}

var plots = Array(40)
  .fill()
  .map((_, i) => i)
  .map(() => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
  });

plots.forEach((points) => {
  var plot = new Plot(points.x, points.y);

  plot.render();
});

// var data = Array(30).fill;

// var parent = document.createElement("div");

// var dot = new Plot(10, 20);
// dot.render();
