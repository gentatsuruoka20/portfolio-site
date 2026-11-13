let r = 0;
let x = 0;
let y = 0;
let expanding = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  if (expanding) {
    noFill();
    stroke(0, 100, 255);
    strokeWeight(2);

    ellipse(x, y, r, r);

    r += 3;

    if (r > 300) {
      expanding = false;
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
  r = 0;
  expanding = true;
}