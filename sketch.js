let ripples = [];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].update();
    ripples[i].display();

    if (ripples[i].isDead()) {
      ripples.splice(i, 1);
    }
  }
}

function mousePressed() {
  ripples.push(new Ripple(mouseX, mouseY));
}

class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.alpha = 255;
  }

  update() {
    this.radius += 4;
    this.alpha -= 3;
  }

  display() {
    noFill();
    stroke(0, this.alpha); // 黒
    strokeWeight(3);
    circle(this.x, this.y, this.radius * 2);
  }

  isDead() {
    return this.alpha <= 0;
  }
}
function draw() {
  const margin = 150;

  if (mouseY < margin) {
    let speed = map(mouseY, margin, 0, 0, 20);
    window.scrollBy(0, -speed);
  }

  if (mouseY > height - margin) {
    let speed = map(mouseY, height - margin, height, 0, 20);
    window.scrollBy(0, speed);
  }
}